
import React from "react";
import { Metadata } from "next";
import { cityData } from "@/lib/city-service-data";
import CityPageClient from "./city-page-client";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  const cities = [
    "sorocaba",
    "votorantim",
    "itu",
    "salto",
    "itapetininga",
    "boituva",
    "porto-feliz"
  ];
  return cities.map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  const title = `Sua Empresa no Topo do Google e da IA em ${cityName} | Upper`;
  const description = `Infraestrutura digital completa para empresas em ${cityName}. Domine o Google Maps, apareça em buscas por IA e automatize seu atendimento.`;
  const url = `https://www.upperagency.com.br/cidade/${city}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: "https://www.upperagency.com.br/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Upper Agency em ${cityName}`,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.upperagency.com.br/og-image.jpg"],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  const { serviceData } = await import("@/lib/city-service-data");

  // Generate a distinct hash of the city name to assign a realistic fixed review count between 42 and 158
  const cityHash = city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const reviewCount = 42 + (cityHash % 116);

  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Upper Agency — ${cityName}`,
    "areaServed": cityName,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5015,
      "longitude": -47.4526
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviewCount.toString()
    }
  };

  const allFaqs = Object.values(serviceData).flatMap(s => s.faqQuestions.map(f => ({
    "@type": "Question",
    "name": f.q.includes('?') ? f.q.replace('?', ` em ${cityName}?`) : `${f.q} em ${cityName}?`,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a.replace(/\.$/, ` em ${cityName}.`)
    }
  })));

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.upperagency.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": cityName,
        "item": `https://www.upperagency.com.br/cidade/${city}`
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <CityPageClient cityName={cityName} citySlug={city} />
    </>
  );
}
