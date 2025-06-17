import { getTimesClinic } from "../../_data-access/get-times-clinic"
import { AppointmentsList } from "./appointments-lis"

export async function Appointments({ userId }: { userId: string }) {

  const { times } = await getTimesClinic({ userId: userId })

  return (
    <AppointmentsList times={times} />
  )
}