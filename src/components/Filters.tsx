import styled from "styled-components";
import { LanguageType } from "../shared/types";
import FilterOption from "./FilterOption";

function Filters({ usedLanguages, handleLanguageActiveToggle }: {usedLanguages: LanguageType[], handleLanguageActiveToggle: Function}) {
    if (usedLanguages.length === 0) return null;
    return (
        <FilterContainer>
            Filters: 
            {usedLanguages.map(language => <FilterOption key={language.abbreviation} language={language} handleLanguageActiveToggle={handleLanguageActiveToggle} />)}
        </FilterContainer>
    );
}

export default Filters;

const FilterContainer = styled.div`
    position: sticky;
    top: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #888;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: rgb(231,241,241);
    box-shadow: 0 0 10px #888;
    padding: 10px;
`;