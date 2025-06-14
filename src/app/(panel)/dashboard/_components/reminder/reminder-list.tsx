"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reminder } from "@/generated/prisma"
import { Plus, Trash } from "lucide-react"
import { ScrollArea } from '@/components/ui/scroll-area'
import { deleteReminder } from "../../_actions/delete-reminder"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'

interface ReminderListProps {
  reminder: Reminder[]
}

export function ReminderList({ reminder }: ReminderListProps) {

  const router = useRouter();

  async function handleDeleteReminder(id: string) {
    const response = await deleteReminder({ reminderId: id })

    if (response.error) {
      toast.error(response.error)
      return;
    }

    toast.success(response.data);
    router.refresh();

  }

  return (

    <div className="flex flex-col gap-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 ">

          <CardTitle className="text-xl md:text-2xl font-bold">
            Lembretes
          </CardTitle>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="w-9 p-0">
                <Plus className="w-5 h-5" />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo lembrete</DialogTitle>
                <DialogDescription>Criar um lembrete para sua lista</DialogDescription>
              </DialogHeader>

              <div>
                teste
              </div>
            </DialogContent>
          </Dialog>

        </CardHeader>

        <CardContent>
          {reminder.length === 0 && (
            <p className="text-sm text-gray-500">
              Nenhum lembrete registrado...
            </p>
          )}

          <ScrollArea
            className="h-[340px] lg:max-h-[calc(100vh-15rem)] pr-0 w-full flex-1"
          >
            {reminder.map((item) => (
              <article
                key={item.id}
                className="flex flex-wrap flex-row items-center justify-between py-2 bg-yellow-100 mb-2 px-2 rounded-md"
              >
                <p className="text-sm lg:text-base">Item.description</p>

                <Button
                  className="bg-red-500 hover:bg-red-600 shadow-none rounded-full p-2"
                  size="sm"
                  onClick={() => handleDeleteReminder(item.id)}
                >
                  <Trash className="w-4 h-4 text-white" />
                </Button>
              </article>
            ))}
          </ScrollArea>
        </CardContent>

      </Card>
    </div>
  )
}