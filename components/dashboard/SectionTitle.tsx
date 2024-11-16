"use client"
import { MainConfigForm, LogForm, PlanForm, FormDialog } from "@/components/form"
import { CloudUploadIcon } from "lucide-react"
import { type FormType } from "@/types/form"
import { FORM_TYPES } from "@/constants"

export default function SectionTitle({
  title,
  icon = { icon: <CloudUploadIcon className="h-5 w-5" />, name: "plus" },
  formType,
}: {
  title: string
  icon?: { icon: React.ReactNode; name: string }
  formType: FormType
}) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <FormDialog
        triggerElement={icon.icon}
        identity={icon.name}
        key={icon.name}
      >
        {formType === FORM_TYPES.MAIN && (
          <MainConfigForm title="主設定" description="庫存、資金、成本" isDialog />
        )}
        {formType === FORM_TYPES.LOG && (
          <LogForm title="交易紀錄設定" isDialog />
        )}
        {formType === FORM_TYPES.PLAN && <PlanForm title="規劃設定" isDialog />}
      </FormDialog>
    </div>
  )
}
