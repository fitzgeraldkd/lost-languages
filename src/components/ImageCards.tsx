import { TranslationType } from '../shared/types'
import ImageCard from './ImageCard';

function ImageCards({ updateTranslation, translations, changeImage }: {updateTranslation: Function, translations: TranslationType[], changeImage: Function}) {
    const uniqueImages = translations.filter((translation, index) => (
        index === translations.findIndex(findTranslation => findTranslation.imageId === translation.imageId)
    )).map(translation => translation.imageId);
    
    return (
        <>
            {uniqueImages.map(image => 
                <ImageCard 
                    key={image} 
                    imageId={image} 
                    translations={translations} 
                    updateTranslation={updateTranslation} 
                    changeImage={changeImage}
                />
            )}
        </>
    );
}

export default ImageCards;