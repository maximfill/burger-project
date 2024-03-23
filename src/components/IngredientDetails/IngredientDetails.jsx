import React from 'react'
import styles from './IngredientDetails.module.css';
import image from '../../images/icon.png';

const IngredientDetails = ({setIsModalIngredientOpen}) => {

  const closingClickIngredient = () => {
    setIsModalIngredientOpen(false)
  };

  return (
    <div className={styles.ingredient}>
      <div className={styles.ingredientDetails}>
        Детали ингридиента
        <div className={styles.closing} onClick={closingClickIngredient}>
          <img src={image} alt="Image" />
        </div>
      </div>
      <div className={styles.cutlet}>
        <div className={styles.cutletIng}>
          <img src="https://code.s3.yandex.net/react/code/meat-01.png" alt="картинка"/>
        </div>
      </div>
      <div className={styles.compound}>
        Биокотлета из марсианской Магнолии
      </div>
      <div className={styles.container}>
        <div className={styles.calories}> 
          <div className={styles.ccal}> 
            Калории, ккал
          </div>
          <div className={styles.number}> 
            244,4
          </div>
        </div>
        <div className={styles.calories}>
          <div className={styles.ccal}> 
            Белки, г
          </div>
          <div className={styles.number}> 
            12, 2
          </div>
        </div>
        <div className={styles.calories}>
          <div className={styles.ccal}> 
            Жиры, г
          </div>
          <div className={styles.number}> 
            17, 2
          </div>
        </div>
        <div className={styles.calories}>
          <div className={styles.ccal}> 
            Углеводы, г
          </div>
          <div className={styles.number}> 
            10, 2
          </div>
        </div>
      </div>
    </div>
  )
}


export default IngredientDetails;