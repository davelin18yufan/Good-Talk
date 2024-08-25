"use client"
import { CustomInput, FormBase } from "@/components/Form"

function LoginPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("Send")
  }
  return (
    <div className="bg-primary grid min-h-screen place-items-center">
      <FormBase
        title="Welcome to GoodTalk"
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
