"use client"
<<<<<<< HEAD
import { CustomInput, FormBase } from "@/components/Form"
=======
import { CustomInput, ErrorMessage, FormBase } from "@/components/form/Form"
import { SignUpSchema } from "@/lib/validation"
import { useFormState } from "react-dom"
import { ZodError } from "zod"
>>>>>>> feature/mainPage_articleList_Footer

function SignUpPage() {
   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
     e.preventDefault()
     console.log("Send")
   }
  return (
<<<<<<< HEAD
    <div className="bg-primary grid min-h-screen place-items-center">
=======
    <div className="w-full">
      {getErrorMessage("form") && (
        <ErrorMessage message={getErrorMessage("form") as string} />
      )}
>>>>>>> feature/mainPage_articleList_Footer
      <FormBase
        title="Welcome to Good Talk"
        description="Where amazing happen"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <CustomInput
            id="email"
            labelName="Email"
            placeholder="請輸入信箱.."
            type="email"
          />
          <CustomInput
            id="username"
            labelName="用戶名稱"
            placeholder="請輸入您的用戶名稱.."
          />
          <CustomInput
            id="password"
            labelName="密碼"
            placeholder="請輸入密碼.."
            type="password"
          />
          <CustomInput
            id="confirmPassword"
            labelName="再次確認密碼"
            placeholder="請再次輸入密碼.."
            type="password"
          />
        </div>
      </FormBase>
    </div>
  )
}

export default SignUpPage
