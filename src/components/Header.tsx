import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={process.env.PUBLIC_URL + '/lost-languages.png'} alt='Lost Languages' />
        </div>
    );
}

export default Header;