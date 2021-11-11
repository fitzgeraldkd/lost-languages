import { useEffect, useState } from "react";
import { ImageObj, TranslationType } from "../shared/types";
import { sendRequest } from "../shared/utils";
import Translation from "./Translation";
import styled from 'styled-components';

function ImageCard({ imageId, translations, updateTranslation, changeImage }: {imageId: string, translations: TranslationType[], updateTranslation: Function, changeImage: Function}) {
    const [imageData, setImageData] = useState<ImageObj>();
    const filteredTranslations = translations.filter(translation => translation.imageId === imageId);

    useEffect(() => {
        const callback = (imageObj: ImageObj) => {
            setImageData(imageObj);
        };
        sendRequest<ImageObj>(`https://picsum.photos/id/${imageId}/info`, callback);
    }, [imageId])

    return (
        <TranslationCard>
            <div className='translation-image'>
                {imageData ? 
                    <>
                        <img src={imageData.download_url} alt={`By ${imageData.author}`} />
                        <br />
                        Photo by <a href={imageData.url} target='_blank' rel='noreferrer'>{imageData.author}</a>
                        <br />
                        <button onClick={() => changeImage(imageData)}>Add a Translation</button>
                    </> :
                    null}
            </div>
            <div className='translation-submissions'>
                {filteredTranslations.map(translation => <Translation key={translation.id} translation={translation} updateTranslation={updateTranslation} />)}
            </div>
        </TranslationCard>
    );
}

export default ImageCard;

const TranslationCard = styled.article`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #888;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    background-color: rgb(231, 241, 241);
    box-shadow: 0 0 10px #888;
    transition: box-shadow 0.25s;

    &:hover {
        box-shadow: 0 0 15px #333;
    }

    .translation-image, .translation-submissions {
        display: inline-block;
        vertical-align: top;
    }

    .translation-image {
        text-align: center;
        box-sizing: border-box;
        padding: 5px;

        img {
            max-width: 300px;
        }
    }

    .translation-submissions {
        padding: 5px;
        flex-grow: 1;
    }
`;