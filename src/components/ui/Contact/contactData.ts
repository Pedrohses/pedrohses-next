export type ContactChannel = {
  id: string
  label: string
  value: string
  href: string
}

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "pedrohsesilva@gmail.com",
    href: "mailto:pedrohsesilva@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/pedro-silva-43985125b",
    href: "https://linkedin.com/in/pedro-silva-43985125b",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/pedrohses",
    href: "https://github.com/pedrohses",
  },
]
