import { DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { AppointmentWithService } from "./appointments-lis";
import { format } from 'date-fns'
import { formatCurrency } from "@/utils/formatCurrency";

interface DialogAppointmentProps {
  appointment: AppointmentWithService | null;
}

export function DialogAppointment({ appointment }: DialogAppointmentProps) {

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Detalhes do agendamento
        </DialogTitle>
        <DialogDescription>
          Veja todos os detalhes do agendamento
        </DialogDescription>
      </DialogHeader>

      <div className="py-4">

        {appointment && (
          <article>
            <p><span className="font-bold">Horário agendado:</span> {appointment.time}</p>
            <p className="mb-2"><span className="font-bold">
              Data do agendamento: </span> {new Intl.DateTimeFormat('pt-BR', {
                timeZone: 'UTC',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              }).format(new Date(appointment.appointmentDate))}
            </p>
            <p><span className="font-bold">Nome:</span> {appointment.name}</p>
            <p><span className="font-bold">Phone:</span> {appointment.phone}</p>
            <p><span className="font-bold">Email:</span> {appointment.email}</p>

            <section className="bg-gray-100 mt-4 p-2 rounded-md">
              <p><span className="font-bold">Serviço:</span> {appointment.service.name}</p>
              <p><span className="font-bold">Valor:</span> {formatCurrency((appointment.service.price / 100))}</p>
            </section>

          </article>
        )}

      </div>

    </DialogContent>
  )
}