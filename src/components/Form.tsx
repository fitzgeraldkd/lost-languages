import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { TranslationType, ImageObj, LanguageType } from '../shared/types'
import styles from './Form.module.css';
// import  {Client}  from 'pg';

function Form({ addTranslation, activeImage, handleNewImageClick, languages }: 
    {addTranslation: Function, activeImage: ImageObj | undefined, handleNewImageClick: FormEventHandler, languages: LanguageType[]}) {
    const defaultFormData: TranslationType = {
        imageId: activeImage ? activeImage.id : '',
        firstLanguage: 'en',
        firstSentence: '',
        targetLanguage: 'es',
        targetSentence: '',
        likes: 0,
        dislikes: 0
    };
    const [formData, setFormData] = useState(defaultFormData);

    const handleFormChange = (e: ChangeEvent<HTMLTextAreaElement|HTMLSelectElement>) => {
        console.log(formData);
        setFormData(currentFormData => Object.assign({...currentFormData, [e.target.name]: e.target.value}));
    };

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (activeImage) {
            // const client = new Client({
            //     connectionString: process.env.DATABASE_URL,
            //     ssl: {
            //         rejectUnauthorized: false
            //     }
            // });

            // client.connect();

            // TODO: POST to database
            addTranslation({...formData, imageId: activeImage.id});
            resetForm();
        }
    };

    const resetForm = () => {
        setFormData(defaultFormData);
    }

    const languageJsx = languages.map(language => {
        return <option value={language.abbreviation} key={language.abbreviation}>{language.language}</option>
    })

    return (
        <div className={styles['form-container']}>
            {activeImage ? 
                <>
                    <img src={activeImage.download_url} alt={`By ${activeImage.author}`} />
                    <div>Photo by <a href={activeImage.url} target='_blank' rel='noreferrer'>{activeImage.author}</a></div>
                </> : 
                <p>Loading Image...</p>}
            <button onClick={handleNewImageClick}>Get New Image</button>
            <br />
            <form className={styles['translation-form']} onSubmit={handleFormSubmit}>
                <label htmlFor="">First Language:</label>
                <select name="firstLanguage" value={formData.firstLanguage} onChange={handleFormChange}>
                    {languageJsx}
                </select>
                <br />
                <textarea name='firstSentence' value={formData.firstSentence} onChange={handleFormChange} placeholder='Write a sentence in your first language to describe the photo.' />
                <br />
                <label htmlFor="">Target Language:</label>
                <select name='targetLanguage' value={formData.targetLanguage} onChange={handleFormChange}>
                    {languageJsx}
                </select>
                <br />
                <textarea name='targetSentence' value={formData.targetSentence} onChange={handleFormChange} placeholder='Translate your description to a language of your choice.'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;