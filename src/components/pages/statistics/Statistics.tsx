import React from 'react';
import styles from './Statistics.module.scss'; // Проверьте путь к стилям
import { dataOne, dataTwo } from './data/data.ts'; // Проверьте путь к данным

const Statistics: React.FC = () => {
  return (
    <div>
      <h2 className={styles.header}></h2>
      <div className={styles.columns}>
        {
          dataOne.map((elem:any,id:number) => (
            <div key={id}>{elem}</div> // Предполагается, что у элемента есть id и name
          ))
        }
      </div>

      <h2 className={styles.header}>Места развлечений</h2>
      <div className={styles.columns}>
        {
          dataTwo.map((elem:any,id:number) => (
            <div key={id}>{elem}</div> // Аналогично здесь
          ))
        }
      </div>
    </div>
  );
}

export default Statistics;
