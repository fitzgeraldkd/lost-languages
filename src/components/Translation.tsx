import { TranslationType } from "../shared/types";
import styles from './Translation.module.css';

function Translation({ updateTranslation, translation, translation: { firstLanguage, firstSentence, targetLanguage, targetSentence, likes, dislikes } }: 
    {updateTranslation: Function, translation: TranslationType}) {
    
    const handleVoteClick = (property: 'likes' | 'dislikes') => {
        // TODO: PATCH database
        const newTranslation = {...translation, [property]: translation[property] + 1}
        updateTranslation(newTranslation);
    };

    return (
        <div className={styles['translation-subcard']}>
            <div className={styles['translation-text']}>
                <span className={styles['language-label']}>{firstLanguage}</span>
                <span>{firstSentence}</span>
            </div>
            <div className={styles['translation-text']}>
                <span className={styles['language-label']}>{targetLanguage}</span>
                <span>{targetSentence}</span>
            </div>
            <button onClick={() => handleVoteClick('likes')}>{likes} 👍</button>
            {/* <button onClick={() => handleVoteClick('dislikes')}>{dislikes} 👎</button> */}
        </div>
    );
}

export default Translation;