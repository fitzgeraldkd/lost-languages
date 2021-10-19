import { useState, useEffect, useCallback } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import ImageCards from './ImageCards';
import { TranslationType, LanguageOptions, ImageObj } from '../shared/types'
import { randomNumber, sendRequest } from '../shared/utils';


function App() {
  const [translations, setTranslations] = useState<TranslationType[]>([]);
  const [activeImage, setActiveImage] = useState<ImageObj>();

  const addTranslation = (translation: TranslationType) => {
    // give ID to new translation
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
      <Form addTranslation={addTranslation} activeImage={activeImage} handleNewImageClick={handleNewImageClick} />
      <ImageCards translations={translations} updateTranslation={updateTranslation} />
    </div>
  );
}

export default App;
