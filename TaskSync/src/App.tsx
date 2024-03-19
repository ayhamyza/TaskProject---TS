import {PlusCircle } from 'phosphor-react'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Header as ListHeader} from './components/List/Header'
import { Empty } from './components/List/Empty'

import './global.css'



export function App() {
  return (
    <main>
      <div className={ styles.header }>
        <Header/>
      </div>
    

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <div className={styles.infoContainer}>
            <Input/>
            <Button>
              Criar 
              <PlusCircle
                size={16} 
                color="#F2F2F2" 
                weight="bold" 
              />
            </Button>
          </div>

          <div className= {styles.listHeader}>
            <ListHeader/>
            <Empty/>
          </div>
        </div>   
      </section>
    </main>
  )
}