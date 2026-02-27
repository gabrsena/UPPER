
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
  
  return {
    title: `SEO Local e Automação WhatsApp em ${cityName} | Upper Agency`,
    description: `Infraestrutura digital completa para empresas em ${cityName}. Domine o Google Maps, apareça em buscas por IA e automatize seu atendimento.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  return <CityPageClient cityName={cityName} citySlug={city} />;
}
