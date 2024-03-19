import styles from './Header.module.css';
import RocketLogo from '../assets/rocket.svg'

export function Header () {
    return(
        <header className={styles.header}>
            <div className={styles.div}>
                <img src={ RocketLogo } alt="" />
                <h1 className={styles.FirstCollorH1}>ta<span className={styles.SecondCollorH1}>sk</span></h1>
            </div>
           
        </header>
    )
}