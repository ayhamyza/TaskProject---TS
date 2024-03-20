import styles from './Header.module.css';

export function Header () {
    return(
        <header className={styles.header}>
            <div className={styles.div}>
                <h1 className={styles.FirstCollorH1}>ta<span className={styles.SecondCollorH1}>sk</span></h1>
            </div>
           
        </header>
    )
}