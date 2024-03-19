import styles from './Empty.module.css'
import clipboardImage from '../../assets/Clipboard.png'

export function Empty() {
  return (
    <div className={styles.container}>
      <img 
        src= {clipboardImage}
        alt="ícone de prancheta" 
      />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}