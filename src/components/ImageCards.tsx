import { TranslationType } from '../shared/types'
import ImageCard from './ImageCard';

function ImageCards({ updateTranslation, translations }: {updateTranslation: Function, translations: TranslationType[]}) {
    const uniqueImages = translations.filter((translation, index) => (
        index === translations.findIndex(findTranslation => findTranslation.imageId === translation.imageId)
    )).map(translation => translation.imageId);
    console.log(uniqueImages);
    return (
        <>
            {uniqueImages.map(image => <ImageCard key={image} imageId={image} translations={translations} updateTranslation={updateTranslation} />)}
        </>
    );
}

export default ImageCards;