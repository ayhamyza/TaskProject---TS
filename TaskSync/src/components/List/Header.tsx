import styles from './Header.module.css'

export function Header() {
    return (
        <header className={ styles.container }>
            <aside>
                <p> Tarefas criadas</p>
                <span>5</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>10</span>
            </aside>
        </header>
    )

}