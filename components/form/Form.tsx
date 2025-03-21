"use client"

import { usePathname } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/form/input"
import { cn } from "@/lib/utils"
import { IconBrandGoogle } from "@tabler/icons-react"
import ButtonEffect, { BottomGradient } from "../buttons/ButtonEffect"
import Link from "next/link"
import { FadeText } from "../FadeText"
import { AnimatePresence } from "motion/react"
import { FormBaseProps, CustomInputProps } from "@/types/form.d"
import TypingAnimation from "./TypingAnimation"
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"
import { FORM_TYPES } from "@/constants"

export function FormBase({
  title,
  description,
  formClass,
  type = FORM_TYPES.AUTH,
  action,
  isAuth = false,
  children,
  isDialog = false,
}: FormBaseProps) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"
  return (
    <div
      className={cn(
        "bg-tertiary text-header mx-auto w-full max-w-md rounded-2xl p-4 shadow-input md:p-8",
        formClass,
      )}
    >
      {isDialog ? (
        <DialogTitle asChild>
          <h2 className="text-2xl font-bold">{title}</h2>
        </DialogTitle>
      ) : (
        <h2 className="text-2xl font-bold">{title}</h2>
      )}
      
      {description && (
        isDialog ? (
          <DialogDescription asChild>
            <p className="text-subtext mt-2 max-w-sm text-sm">{description}</p>
          </DialogDescription>
        ) : (
          <p className="text-subtext mt-2 max-w-sm text-sm">{description}</p>
        )
      )}

      <form className="my-4" action={action}>
        {children}

        <ButtonEffect className="mb-2 mt-4" type="submit">
          {isLoginPage ? (
            "登入"
          ) : (
            "註冊"
          )}
        </ButtonEffect>

        {type === "auth" && <AuthFooter isLoginPage={isLoginPage} />}

        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

        {/* Third party auth */}
        {type === "auth" && (
          <div className="flex flex-col space-y-4">
            <button
              className="group/btn text-header relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-slate-50 px-4 font-medium shadow-input dark:bg-zinc-800 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              onClick={() => console.log("google")}
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
        )}
      </form>
    </div>
  )
}


function AuthFooter({ isLoginPage }: { isLoginPage: boolean }) {
  return (
    <div className="text-subtext pt-0.5 text-end">
      <span>{isLoginPage ? "沒有帳號嗎?" : "已經有帳號了?"}</span>
      <Link
        href={isLoginPage ? "/signup" : "/login"}
        className="ml-4 text-sky-800 hover:opacity-80 dark:text-sky-500"
      >
        {isLoginPage ? "前往註冊" : "回到登入"}
      </Link>
    </div>
  )
}

export function LabelInputContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  )
}

export function CustomInput({
  id,
  labelName,
  placeholder,
  type = "text",
  containerClass,
}: {
  id: string
  labelName: string
  placeholder?: string
  type?: string
  containerClass?: string
}) {
  return (
    <LabelInputContainer className={containerClass}>
      <Label htmlFor={id}>{labelName}</Label>
      <Input id={id} placeholder={placeholder} type={type} />
    </LabelInputContainer>
  )
}

export function ErrorMessage({
  message,
  classNames,
}: {
  message: string
  classNames?: string
}) {
  return (
    <AnimatePresence>
      <FadeText
        className={cn(
          "text-danger m-0 inline-block w-full text-end font-mono text-sm",
          classNames,
        )}
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
        text={`! ${message}`}
      />
    </AnimatePresence>
  )
}
