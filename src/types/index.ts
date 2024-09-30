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

export type LocaleProjectRequestForm = {
  type: string
  name: string
  id: string
  label: string
  placeholder: string
}
