import styled from 'styled-components';
import { LanguageType } from '../shared/types';

function FilterOption({ language, handleLanguageActiveToggle }: {language: LanguageType, handleLanguageActiveToggle: Function}) {

    return (
        <FilterButton className={language.active ? 'filter-active' : ''} onClick={() => handleLanguageActiveToggle(language.abbreviation)}>
            {language.language}
        </FilterButton>
    )
};

export default FilterOption;

const FilterButton = styled.button`
    margin-left: 10px;
    background-color: rgb(177, 224, 238);
    opacity: 0.6;
    border: 1px solid black;

    &:hover {
        box-shadow: 0 0 3px;
    }

    &.filter-active {
        opacity: 1;
    }
`;
