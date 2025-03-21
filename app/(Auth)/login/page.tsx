"use client"
import { useActionState } from "react";
import { CustomInput, ErrorMessage, FormBase } from "@/components/form/Form"
import { LoginSchema } from "@/lib/validation"
import { ZodError } from "zod"

function LoginPage() {
  // update state based on form action value
  const [messages, loginAction, pending] = useActionState(handleSubmit, [
    { name: "", message: "" },
  ])

  // It has to return a value for message state
  async function handleSubmit(prevState: any, formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      await LoginSchema.parseAsync({ email, password })
      // TODO: Login action
    } catch (error: any) {
      if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => {
          return { name: issue.path[0].toString(), message: issue.message }
        })
        console.log(errors)
        return errors
      } else {
        console.error("Login Form Input error", error)
        return [
          {
            name: "form",
            message: "An unexpected error occurred. Please try again.",
          },
        ]
      }
    }
    return null // return null if success, no error returned
  }

  const getErrorMessage = (inputName: string) =>
    messages?.find((m) => m.name === inputName)?.message
  return (
    <div className="w-full">
      {getErrorMessage("form") && (
        <ErrorMessage message={getErrorMessage("form") as string} />
      )}
      <FormBase
        title="Welcome to Good Talk"
        description="Where amazing happen, welcome back."
        action={loginAction}
        isAuth
      >
        <div className="flex flex-col gap-4">
          <CustomInput
            id="email"
            labelName="Email"
            placeholder="請輸入信箱.."
            type="email"
          />
          <CustomInput
            id="password"
            labelName="Password"
            placeholder="請輸入密碼.."
            type="password"
          />
        </div>
      </FormBase>
    </div>
  )
}

export default LoginPage
