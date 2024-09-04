
import styles from './HomePage.module.scss'
const HomePage = () => {
  return (
    <div>
      <h2 className={styles.header}>Исполнители</h2>
        <p className={styles.name}>Клименко Лев</p>
        <p className={styles.name}>Знаменский Максим</p>
        <p className={styles.name}>Кузнецова Валерия</p>
        <p className={styles.name}>Черных Ира</p>
    </div>
  )
}

export default HomePage
