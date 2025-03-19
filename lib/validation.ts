import * as z from "zod"

// zod has default error message
export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "無效的信箱" })
    .min(10, { message: "字數少於最低限制" }),
  password: z
    .string()
    .min(8, { message: "密碼至少需要 8 個字符" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
      message: "密碼必須包含至少一個大寫字母、一個小寫字母和一個數字",
    }),
})

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .email({ message: "無效的信箱" })
      .min(10, { message: "字數少於最低限制" }),
    username: z
      .string()
      .min(2, { message: "名稱最少要 2 個字符" }),
    password: z
      .string()
      .min(8, { message: "密碼必須至少8個字符" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
        message: "密碼必須包含至少一個大寫字母、一個小寫字母和一個數字",
      }),
    confirmPassword: z.string({ required_error: "這是必填欄位" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "兩次密碼輸入不相符",
    path: ["confirmPassword"],
  })