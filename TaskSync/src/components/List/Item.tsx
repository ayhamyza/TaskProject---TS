import { Trash, Check } from '@phosphor-icons/react'
import styles from './Item.module.css'
export function Item () {

    
      return (
        <div className={styles.container}>
          <div>
            <label htmlFor="checkbox">
              <input readOnly type="checkbox"/>
              <span className={styles.checkbox}>
                <Check size={12} />
              </span>
    
              <p className={styles.paragraph}>
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </p>
              
            </label>
          </div>
    
          <button className={styles.buttonTrash}>
            <Trash size={18} color="#808080" />
          </button>
        </div>
      
    )
}        