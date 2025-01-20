import { CustomInput, FormBase } from "./Form"

export default function PlanForm({
  title,
  description,
  formClass,
  isDialog,
}: {
  title: string
  description?: string
  formClass?: string
  isDialog?: boolean
}) {
  return (
    <FormBase
      title={title}
      description={description}
      formClass={formClass}
      action={() => {}}
      isDialog={isDialog}
    >
      <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <CustomInput
          id="firstname"
          placeholder="Tyler"
          labelName="First Name"
        />
        <CustomInput
          id="lasttname"
          placeholder="Durdon"
          labelName="Last Name"
        />
      </div>
      <CustomInput
        id="email"
        placeholder="projectmayhem@fc.com"
        labelName="Email Address"
        containerClass="mb-4"
      />
      <CustomInput
        id="password"
        placeholder="••••••••"
        labelName="Password"
        containerClass="mb-4"
      />
      <CustomInput
        id="twitterpassword"
        placeholder="••••••••"
        labelName="Your twitter password"
        containerClass="mb-8"
        type="twitterpassword"
      />
    </FormBase>
  )
}
