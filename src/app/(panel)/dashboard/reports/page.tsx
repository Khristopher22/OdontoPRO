import { redirect } from "next/navigation";
import { getPermissionUserToReports } from "./_data_access/get-permission-report"
import getSession from "@/lib/getSession";

export default async function Reports() {

  const session = await getSession();

  if (!session?.user?.id) {
    redirect("/")
  }

  const user = await getPermissionUserToReports({ userId: session?.user?.id! });

  if (!user) {
    return (
      <main>
        <h1>Você não tem permissão para acessar essa página</h1>
        <p>Assine o plano PROFISISONAL para ter acesso completo!</p>
      </main>
    )
  }

  return (
    <main>
      <h1>Página de relatorios</h1>
    </main>
  )
}