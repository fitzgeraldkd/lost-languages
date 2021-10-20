export type LanguageOptions = 'en' | 'es' | 'it' | 'fr';

export type TranslationType = {
  id?: string,
  imageId: string,
  firstLanguage: LanguageOptions,
  firstSentence: string,
  targetLanguage: LanguageOptions,
  targetSentence: string,
  likes: number,
  dislikes: number
}

export type ImageObj = {
  id: string,
  author: string,
  width: string,
  height: string,
  url: string,
  download_url: string
}