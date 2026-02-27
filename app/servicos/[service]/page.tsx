
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
    title: `${data.label} para Empresas Locais | Upper Agency`,
    description: data.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const data = serviceData[service];

  if (!data) {
    notFound();
  }

  return <ServicePageClient serviceKey={service} data={data} />;
}
