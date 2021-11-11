import { TranslationType } from "../shared/types";
import styled from 'styled-components'

function Translation({ updateTranslation, translation, translation: { firstLanguage, firstSentence, targetLanguage, targetSentence, likes, dislikes } }: 
    {updateTranslation: Function, translation: TranslationType}) {
    
    const handleVoteClick = (property: 'likes' | 'dislikes') => {
        // TODO: PATCH database
        const newTranslation = {...translation, [property]: translation[property] + 1}
        updateTranslation(newTranslation);
    };

    return (
        <TranslationSubcard>
            <div>
                <span className='language-label'>{firstLanguage}</span>
                <span>{firstSentence}</span>
            </div>
            <div>
                <span className='language-label'>{targetLanguage}</span>
                <span>{targetSentence}</span>
            </div>
            <button onClick={() => handleVoteClick('likes')}>{likes} 👍</button>
            {/* <button onClick={() => handleVoteClick('dislikes')}>{dislikes} 👎</button> */}
        </TranslationSubcard>
    );
}

export default Translation;

const TranslationSubcard = styled.div`
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #888;
    border-radius: 2px;
    background-color: white;

    div {
        margin-bottom: 10px;

        .language-label {
            background-color: rgb(195, 240, 184);
            border-radius: 20% / 50%;
            padding: 1px 5px;
            margin-right: 5px;
        }
    }
`;