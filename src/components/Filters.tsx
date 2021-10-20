import { LanguageType } from "../shared/types";
import FilterOption from "./FilterOption";

function Filters({ usedLanguages, handleLanguageActiveToggle }: {usedLanguages: LanguageType[], handleLanguageActiveToggle: Function}) {
    return (
        <>
            {usedLanguages.map(language => <FilterOption key={language.abbreviation} language={language} handleLanguageActiveToggle={handleLanguageActiveToggle} />)}
        </>
    );
}

export default Filters;