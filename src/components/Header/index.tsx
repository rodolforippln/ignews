import SignInButton from '../SignInButton';
import styles from './styles.module.scss'


export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="./image/logo.svg" alt="logo"/>
                <nav>
                    <a href="/" className={styles.active}>Home</a>
                    <a href="#">Posts</a>
                </nav>
                <SignInButton />
            </div>
            
        </header>
    );
}