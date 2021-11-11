import styled from 'styled-components';

function Header() {
    return (
        <HeaderContainer>
            <img src={process.env.PUBLIC_URL + '/lost-languages.png'} alt='Lost Languages' />
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    text-align: center;
    img {
        max-height: 200px;
        margin-bottom: 20px;
    }
`;