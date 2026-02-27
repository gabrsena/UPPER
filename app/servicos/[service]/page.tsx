
import { redirect } from "next/navigation";

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  // Redireciona para a versão de Sorocaba por padrão
  redirect(`/${service}/sorocaba`);
}
