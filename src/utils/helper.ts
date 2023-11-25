import { slugify } from 'transliteration'

export const formatNumberWithComma = (numberToFormat: number) => {
  return numberToFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const convertToUrlFormat = (textToConvert: string) => {
  return slugify(textToConvert)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}
