export type FormData = {
  type: string
  name: string
  id: string
  label: string
  placeholder: string
}

export type LocaleData = {
  id: number | string
  title: string
  strong?: string
  description: string
}

export type LocaleFaqData = {
  question: string
  answer: string
}

export type LocalePricingData = LocaleData & {
  price: number
  services: string[]
}
