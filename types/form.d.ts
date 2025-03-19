import { FORM_TYPES } from "@/constants"

export type FormType = (typeof FORM_TYPES)[keyof typeof FORM_TYPES]

export interface FormBaseProps {
  title: string
  description?: string
  formClass?: string
  type?: FormType
  action: (formData: FormData) => void
  isAuth: boolean
  children: React.ReactNode
  isDialog?: boolean
}

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  labelName: string
  containerClass?: string
  errorMessage?: string
}

export interface ErrorMessage {
  name: string
  message: string
}
