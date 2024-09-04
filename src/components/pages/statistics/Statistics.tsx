import React from 'react';
import styles from './Statistics.module.css'; // Проверьте путь к стилям
import { dataOne, dataTwo } from './data'; // Проверьте путь к данным

const Statistics: React.FC = () => {
  return (
    <div>
      <h2 className={styles.header}>Достопримечательности</h2>
      <div className={styles.columns}>
        {
          dataOne.map((elem:unknown) => (
            <div key={elem.id}>{elem.name}</div> // Предполагается, что у элемента есть id и name
          ))
        }
      </div>

      <h2 className={styles.header}>Места развлечений</h2>
      <div className={styles.columns}>
        {
          dataTwo.map((elem:unknown) => (
            <div key={elem.id}>{elem.name}</div> // Аналогично здесь
          ))
        }
      </div>
    </div>
  );
}

export default Statistics;
