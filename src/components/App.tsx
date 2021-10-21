import { useState, useEffect, useCallback } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import ImageCards from './ImageCards';
import { TranslationType, LanguageType, ImageObj, LanguageAbbreviation } from '../shared/types'
import { randomNumber, sendRequest } from '../shared/utils';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import Filters from './Filters';
import About from './Modal/About';
// import  { Pool }  from 'pg';


function App() {
  const [modal, setModal] = useState<JSX.Element>();
  const [translations, setTranslations] = useState<TranslationType[]>([]);
  const [activeImage, setActiveImage] = useState<ImageObj>();
  const [languages, setLanguages] = useState<LanguageType[]>([
    {language: 'English', abbreviation: 'en', active: true},
    {language: 'Arabic', abbreviation: 'ar', active: true},
    {language: 'Chinese', abbreviation: 'zh', active: true},
    {language: 'Dutch', abbreviation: 'nl', active: true},
    {language: 'Finnish', abbreviation: 'fi', active: true},
    {language: 'French', abbreviation: 'fr', active: true},
    {language: 'German', abbreviation: 'de', active: true},
    {language: 'Hindi', abbreviation: 'hi', active: true},
    {language: 'Hungarian', abbreviation: 'hu', active: true},
    {language: 'Indonesian', abbreviation: 'id', active: true},
    {language: 'Irish', abbreviation: 'ga', active: true},
    {language: 'Italian', abbreviation: 'it', active: true},
    {language: 'Japanese', abbreviation: 'ja', active: true},
    {language: 'Korean', abbreviation: 'ko', active: true},
    {language: 'Polish', abbreviation: 'pl', active: true},
    {language: 'Portuguese', abbreviation: 'pt', active: true},
    {language: 'Russian', abbreviation: 'ru', active: true},
    {language: 'Spanish', abbreviation: 'es', active: true},
    {language: 'Swedish', abbreviation: 'sv', active: true},
    {language: 'Turkish', abbreviation: 'tr', active: true},
    {language: 'Ukranian', abbreviation: 'uk', active: true},
    {language: 'Vietnamese', abbreviation: 'vi', active: true}
  ]);

  useEffect(() => {
    fetch('/api/translations')
      .then(resp => resp.json())
      .then(data => setTranslations(data));
    // require("dotenv").config();
    // console.log(process);
    // const pool = new Pool({
    //   connectionString: process.env.DATABASE_URL,
    //   ssl: {
    //       rejectUnauthorized: false
    //   }
    // });
    // console.log(pool);

    // pool.connect();

    // pool.query('SELECT * FROM translations;', (err, res) => {
    //   if (err) throw err;
    //   for (const row of res.rows) {
    //     console.log(JSON.stringify(row));
    //   }
    //   pool.end();
    // });
  }, []);

  const handleSetModal = (newModal: JSX.Element) => {
    setModal(newModal);
  }

  const handleLanguageActiveToggle = (abbreviation: LanguageAbbreviation) => {
    setLanguages(currentLanguages => currentLanguages.map(language => (
      language.abbreviation === abbreviation ? {...language, active: !language.active} : language
    )))
  }

  const usedLanguages = languages.filter(language => (
    translations.some(translation => (
      translation.firstLanguage === language.abbreviation || translation.targetLanguage === language.abbreviation
    ))
  ));

  const addTranslation = (translation: TranslationType) => {
    // TODO: let API give translation ID
    translation.id = nanoid();
    setTranslations(currentTranslations => [...currentTranslations, translation])
  };

  const updateTranslation = (updatedTranslation: TranslationType) => {
    setTranslations(currentTranslations => currentTranslations.map(translation => (
      translation.id === updatedTranslation.id ? updatedTranslation : translation
    )));
  };

  const changeImage = (imageObj: ImageObj | undefined) => {
    setActiveImage(imageObj);
  };

  const getRandomImage = useCallback(() => {
    const baseUrl = 'https://picsum.photos/v2/list?limit=100&page=';
    const callback = (imageList: ImageObj[]) => {
      const imageObj = imageList[randomNumber(0, imageList.length-1)];
      changeImage(imageObj);
    };
    changeImage(undefined);
    sendRequest<ImageObj[]>(baseUrl + randomNumber(1, 10), callback);
  }, []);

  const handleNewImageClick = () => {
    getRandomImage();
  };

  useEffect(() => {
    getRandomImage();
  }, [getRandomImage]);

  const activeLanguages = languages.filter(language => language.active).map(language => language.abbreviation);

  const filteredTranslations = translations.filter(translation => (
    activeLanguages.includes(translation.firstLanguage) && activeLanguages.includes(translation.targetLanguage)
  ))

  return (
    <div className="App">
      { modal ? modal : <></> }
      
      <Header />
      <section className={styles['section-main']}>
        <section className={styles['section-form']}>
          <Form addTranslation={addTranslation} activeImage={activeImage} handleNewImageClick={handleNewImageClick} languages={languages} />
        </section>
        <section className={styles['section-translations']}>
          <Filters usedLanguages={usedLanguages} handleLanguageActiveToggle={handleLanguageActiveToggle} />
          <ImageCards translations={filteredTranslations} updateTranslation={updateTranslation} changeImage={changeImage} />
        </section>
      </section>
      <button className={styles['about-button']} onClick={() => handleSetModal(<About handleSetModal={handleSetModal} />)}>?</button>
    </div>
  );
}

export default App;
