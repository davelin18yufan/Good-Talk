"use client"

import { usePathname } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { IconBrandGoogle } from "@tabler/icons-react"
import ButtonEffect from "./ButtonEffect"
import Link from "next/link"

export function FormBase({
  title,
  description,
  formClass,
  type = "auth",
  onSubmit,
  children,
}: {
  title: string
  description?: string
  formClass?: string
  type?: "auth" | "regular"
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"
  return (
    <div
      className={cn(
        "bg-tertiary text-header mx-auto w-full max-w-md rounded-2xl p-4 shadow-input md:p-8",
        formClass,
      )}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p className="text-subtext mt-2 max-w-sm text-sm">{description}</p>
      )}

      <form className="my-4" onSubmit={onSubmit}>
        {children}

        <ButtonEffect className="mb-2 mt-4" type="submit">
          {isLoginPage ? "登入" : "註冊"}
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

function BottomGradient() {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
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
