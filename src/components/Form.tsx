import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import styled from "styled-components";
import { TranslationType, ImageObj, LanguageType } from '../shared/types'

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
        <FormContainer>
            {activeImage ? 
                <>
                    <img src={activeImage.download_url} alt={`By ${activeImage.author}`} />
                    <div>Photo by <a href={activeImage.url} target='_blank' rel='noreferrer'>{activeImage.author}</a></div>
                </> : 
                <p>Loading Image...</p>}
            <button onClick={handleNewImageClick}>Get New Image</button>
            <br />
            <form onSubmit={handleFormSubmit}>
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
        </FormContainer>
    );
}

export default Form;

const FormContainer = styled.div`
    position: sticky;
    top: 10px;
    background-color: rgb(231, 241, 241);
    margin-right: 50px;
    border: 1px solid #888;
    border-radius: 5px;
    box-shadow: 0 0 10px #888;
    padding: 5px;
    text-align: center;

    @media only screen and (max-width: 992px) {
        margin-right: 0;
    }

    img {
        max-width: 300px;
        max-height: 200px;
    }

    button {
        margin-bottom: 15px;
    }

    form {
        text-align: left;
    
        select {
            margin-left: 15px;
        }

        textarea {
            width:100%;
            box-sizing: border-box;
            margin: 10px 0;
            resize: vertical;
        }
    }
`;