"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import MainForm from "@/components/form/MainConfigForm"
import LogForm from "@/components/form/LogForm"
import PlanForm from "@/components/form/PlanForm"
import { CloudUploadIcon } from "lucide-react"

// TODO: FormType
export default function SectionTitle({
  title,
  icon = { icon: <CloudUploadIcon className="h-5 w-5" />, name: "plus" },
  formType,
}: {
  title: string
  icon?: { icon: React.ReactNode; name: string }
  formType: any
}) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <Dialog>
        <div className="flex items-center justify-end">
          <DialogTrigger asChild key={icon.name}>
            <Button
              variant="secondary"
              className="btn-primary rounded-full transition-transform hover:scale-110"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {icon.icon}
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent className="border-none sm:max-w-[425px]">
          {formType === "main" && (
            <MainForm title="主設定" description="庫存、資金、成本" />
          )}
          {formType === "log" && <LogForm title="交易紀錄設定" />}
          {formType === "plan" && <PlanForm title="規劃設定" />}
        </DialogContent>
      </Dialog>
    </div>
  )
}
