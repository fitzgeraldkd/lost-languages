import { LanguageType } from "../shared/types";
import FilterOption from "./FilterOption";
import styles from './Filters.module.css';

function Filters({ usedLanguages, handleLanguageActiveToggle }: {usedLanguages: LanguageType[], handleLanguageActiveToggle: Function}) {
    if (usedLanguages.length === 0) return null;
    return (
        <div className={styles['filter-container']}>
            Filters: 
            {usedLanguages.map(language => <FilterOption key={language.abbreviation} language={language} handleLanguageActiveToggle={handleLanguageActiveToggle} />)}
        </div>
    );
}

export default Filters;