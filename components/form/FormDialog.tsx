import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

/**
 * FormDialog component renders a dialog modal with a trigger element.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Content to be displayed inside the dialog.
 * @param {React.ReactNode} props.triggerElement - Element that triggers the dialog when interacted with.
 * @param {string} [props.contentClass] - Additional CSS classes for customizing dialog content styling.
 * @param {string} props.identity - Unique key for the dialog trigger.
 *
 * @returns {JSX.Element} A dialog component with customizable content and trigger.
 */
export default function FormDialog({
  children,
  triggerElement,
  contentClass,
  identity,
}: {
  children: React.ReactNode
  triggerElement: React.ReactNode
  contentClass?: string
  identity: string
}): JSX.Element {
  return (
    <Dialog>
      <div className="flex items-center justify-end">
        <DialogTrigger asChild key={identity}>
          <Button
            variant="ghost"
            className="rounded-full transition-transform hover:scale-110 dark:hover:bg-transparent"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {triggerElement}
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent
        className={cn("border-none sm:max-w-[425px]", contentClass)}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}
