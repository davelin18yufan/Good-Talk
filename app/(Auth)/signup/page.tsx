"use client"
import { CustomInput, FormBase } from "@/components/Form"

function SignUpPage() {
   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
     e.preventDefault()
     console.log("Send")
   }
  return (
    <div className="bg-primary grid min-h-screen place-items-center">
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
