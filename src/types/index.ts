export type LocaleData = {
  id: number | string
  title: string
  strong?: string
  description: string
}

export type LocaleNavLinks = {
  id: number
  label: string
  ariaLabel: string
}

export type LocaleFaqData = {
  question: string
  answer: string
}

export type LocalePricingData = LocaleData & {
  price: number
  services: string[]
}

export type LocaleformInputs = {
  type: string
  name: string
  id: string
  label: string
  placeholder: string
  helpText: string
}

export type BenefitData = {
  id: number
  icon: string
  title: string
  description: string
}
