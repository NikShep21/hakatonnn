import React from 'react'
import styles from './Statistics.module.scss'
import {dataOne,dataTwo} from './data/data.js'
const Statistics = () => {
  return (
    <div>
        <h2 className={styles.header}>
            Достопримечательности
        </h2>
        <div className={styles.columns}>
            {
              dataOne.map((elem:any,key:number)=>{
                return <div key={key}>{elem}</div>
              })
            }
        </div>
        
        <h2 className={styles.header}>
            Места развлечений
        </h2>
        <div className={styles.columns}>
            {
              dataTwo.map((elem:any,key:number)=>{
                return <div key={key}>{elem}</div>
              })
            }
        </div>
    </div>
  )
}

export default Statistics