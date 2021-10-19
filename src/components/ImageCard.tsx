import { useEffect, useState } from "react";
import { ImageObj, TranslationType } from "../shared/types";
import { sendRequest } from "../shared/utils";
import Translation from "./Translation";
import styles from './ImageCard.module.css';

function ImageCard({ imageId, translations, updateTranslation }: {imageId: string, translations: TranslationType[], updateTranslation: Function}) {
    const [imageData, setImageData] = useState<ImageObj>();
    const filteredTranslations = translations.filter(translation => translation.imageId === imageId);

    useEffect(() => {
        const callback = (imageObj: ImageObj) => {
            setImageData(imageObj);
        };
        sendRequest<ImageObj>(`https://picsum.photos/id/${imageId}/info`, callback);
    }, [imageId])

    return (
        <article className={styles['translation-card']}>
            <div className={styles['translation-image']}>
                {imageData ? <img src={imageData.download_url} alt={`By ${imageData.author}`} /> : null}
            </div>
            <div className={styles['translation-submissions']}>
                {filteredTranslations.map(translation => <Translation key={translation.id} translation={translation} updateTranslation={updateTranslation} />)}
            </div>
        </article>
    );
}

export default ImageCard;