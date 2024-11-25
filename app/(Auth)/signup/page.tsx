"use client"
import { CustomInput, ErrorMessage, FormBase } from "@/components/form/Form"
import { SignUpSchema } from "@/lib/validation"
import { useFormState } from "react-dom"
import { ZodError } from "zod"

function SignUpPage() {
  // update state based on form action value
  // ! Should Replace useFormState to useActionState after react 19 is stable and update to next14.13 canary. which can be used in RSC.
  const [messages, signUpAction, pending] = useFormState(handleSubmit, [
    { name: "", message: "" },
  ])

  // It has to return a value for message state
  async function handleSubmit(prevState: any, formData: FormData) {
    const email = formData.get("email") as string
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    try {
      await SignUpSchema.parseAsync({
        email,
        username,
        password,
        confirmPassword,
      })
      // TODO: Signup action
    } catch (error: any) {
      if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => {
          return { name: issue.path[0].toString(), message: issue.message }
        })
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

  // Only return first error.
  const getErrorMessage = (inputName: string) =>
    messages?.find((m) => m.name === inputName)?.message
  return (
    <div className="w-full">
      {getErrorMessage("form") && (
        <ErrorMessage message={getErrorMessage("form") as string} />
      )}
      <FormBase
        title="Be one of us in Good Talk"
        description="So excited to have you, almost there."
        action={signUpAction}
        isAuth
      >
        <div className="flex flex-col gap-4">
          <CustomInput
            id="email"
            labelName="Email"
            placeholder="請輸入信箱.."
            type="email"
            required
            errorMessage={getErrorMessage("email")}
          />
          <CustomInput
            id="username"
            labelName="用戶名稱"
            placeholder="請輸入您的名稱.."
            type="text"
            required
            errorMessage={getErrorMessage("username")}
          />
          <CustomInput
            id="password"
            labelName="密碼"
            placeholder="請輸入您的密碼.."
            type="password"
            required
            errorMessage={getErrorMessage("password")}
          />
          <CustomInput
            id="confirmPassword"
            labelName="再次確認密碼"
            placeholder="請再次輸入密碼.."
            type="password"
            required
            errorMessage={getErrorMessage("confirmPassword")}
          />
        </div>
      </FormBase>
    </div>
  )
}

export default SignUpPage
