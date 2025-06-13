import { getReminders } from "../_data-access/get-reminders"


export async function Reminders({ userId }: { userId: string }) {

  const reminders = await getReminders({ userId: userId })

  console.log("Lembretes encontrados: ", reminders)

  return (
    <div>
      <h1>LEMBRETE</h1>
    </div>
  )
}