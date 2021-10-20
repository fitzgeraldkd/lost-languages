import { useState, useEffect, useCallback } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import ImageCards from './ImageCards';
import { TranslationType, LanguageOptions, ImageObj } from '../shared/types'
import { randomNumber, sendRequest } from '../shared/utils';
import { nanoid } from 'nanoid';
import styles from './App.module.css';


function App() {
  const [translations, setTranslations] = useState<TranslationType[]>([]);
  const [activeImage, setActiveImage] = useState<ImageObj>();

  const addTranslation = (translation: TranslationType) => {
    // TODO: let API give translation ID
    translation.id = nanoid();
    setTranslations(currentTranslations => [...currentTranslations, translation])
  }

  const updateTranslation = (updatedTranslation: TranslationType) => {
    setTranslations(currentTranslations => currentTranslations.map(translation => (
      translation.id === updatedTranslation.id ? updatedTranslation : translation
    )));
  }

  const changeImage = (imageObj: ImageObj) => {
    console.log(imageObj);
    setActiveImage(imageObj);
  };

  // const getRandomImage = () => {
  //   // Fetch a random image from the API and update the state
  //   const baseUrl = 'https://picsum.photos/v2/list?limit=100&page='
  //   const callback = (imageList: ImageObj[]) => {
  //     const imageObj = imageList[randomNumber(0, imageList.length-1)];
  //     changeImage(imageObj);
  //   };
  //   sendRequest<ImageObj[]>(baseUrl + randomNumber(1, 10), callback)
  // };

  const getRandomImage = useCallback(() => {
    // Fetch a random image from the API and update the state
    const baseUrl = 'https://picsum.photos/v2/list?limit=100&page=';
    const callback = (imageList: ImageObj[]) => {
      const imageObj = imageList[randomNumber(0, imageList.length-1)];
      changeImage(imageObj);
    };
    setActiveImage(undefined);
    sendRequest<ImageObj[]>(baseUrl + randomNumber(1, 10), callback);
  }, []);

  const handleNewImageClick = () => {
    // Called when a button is clicked
    getRandomImage();
  };

  useEffect(() => {
    // Called when component is mounted
    getRandomImage();
  }, [getRandomImage]);

  return (
    <div className="App">
      <Header />
      <section className={styles['section-main']}>
        <section className={styles['section-form']}>
          <Form addTranslation={addTranslation} activeImage={activeImage} handleNewImageClick={handleNewImageClick} />
        </section>
        <section className={styles['section-translations']}>
          <ImageCards translations={translations} updateTranslation={updateTranslation} changeImage={changeImage} />
        </section>
      </section>
    </div>
  );
}

export default App;
