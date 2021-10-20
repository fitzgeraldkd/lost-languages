export type LanguageAbbreviation = 'ar' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'ga' | 
                                   'hi' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'nl' | 
                                   'pl' | 'pt' | 'ru' | 'sv' | 'tr' | 'uk' | 'vi' | 
                                   'zh';

export type LanguageType = {
  language: string;
  abbreviation: LanguageAbbreviation;
  active: boolean;
};

export type TranslationType = {
  id?: string,
  imageId: string,
  firstLanguage: LanguageAbbreviation,
  firstSentence: string,
  targetLanguage: LanguageAbbreviation,
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