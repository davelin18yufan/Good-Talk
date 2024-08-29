export const FORM_TYPES = {
  AUTH: "auth",
  REGULAR: "regular",
} as const

export type FormType = (typeof FORM_TYPES)[keyof typeof FORM_TYPES]

export interface FormBaseProps {
  title: string
  description?: string
  formClass?: string
  type?: FormType
  action: (formData: FormData) => void
  pending: boolean
  children: React.ReactNode
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