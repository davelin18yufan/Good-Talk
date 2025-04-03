import { Progress } from "@/components/ui/progress"

interface StatProps {
  label: string
  value: number
  maxValue: number
}

export default function Stat({ label, value, maxValue }: StatProps) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <Progress value={(value / maxValue) * 100} className="h-2" />
    </div>
  )
}
