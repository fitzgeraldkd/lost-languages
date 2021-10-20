import React, { useState } from 'react';
import { LanguageType } from '../shared/types';
import styles from './FilterOption.module.css';

function FilterOption({ language, handleLanguageActiveToggle }: {language: LanguageType, handleLanguageActiveToggle: Function}) {
    // const [active, setActive] = useState(true);

    return (
        <button className={styles.button + (language.active ? ' ' + styles['button-active'] : '')} onClick={() => handleLanguageActiveToggle(language.abbreviation)}>
            {language.language}
        </button>
    )
};

export default FilterOption;
