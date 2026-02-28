
import React from "react";
import { Metadata } from "next";
import { serviceData } from "@/lib/city-service-data";
import ServicePageClient from "./service-page-client";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  const services = [
    "seo-local",
    "geo-ia",
    "automacao-whatsapp",
    "landing-page",
    "site-institucional",
    "automacao-ia"
  ];
  return services.map((service) => ({
    service,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const data = serviceData[service];

  if (!data) return {};

  return {
    title: `${data.label} para Empresas Locais | Upper`,
    description: data.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const data = serviceData[service];

  if (!data) {
    notFound();
  }

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.label,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": "Upper Agency"
    }
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqQuestions.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
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
        "name": data.label,
        "item": `https://www.upperagency.com.br/servicos/${service}`
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <ServicePageClient serviceKey={service} data={data} />
    </>
  );
}
