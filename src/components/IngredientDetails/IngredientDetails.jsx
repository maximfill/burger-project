import React from 'react'
import styles from './IngredientDetails.module.css';

const IngredientDetails = ({ingredientDetails}) => {

  const {calories, proteins, fat, carbohydrates, image, name} = ingredientDetails;
console.log(ingredientDetails)

  return (
    <div className={styles.ingredient}>
      <div className={styles.ingredientDetails}>
        <p className="text text_type_main-large">
          Детали ингридиента
        </p>
  
      </div>
      <div className={styles.cutlet}>
        <div className={styles.cutletIng}>
          <img src={image} alt="картинка"/>
        </div>
      </div>
      <div className={styles.compound}>
        <p className="text text_type_main-medium">
          {name}
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.calories}> 
          <div className={styles.ccal}> 
            Калории, ккал
          </div>
          <div className={styles.number}> 
            <p className="text text_type_digits-default">
              {calories}
            </p>
          </div>
        </div>
        <div className={styles.calories}>
          <div className={styles.ccal}> 
            Белки, г
          </div>
          <div className={styles.number}> 
            <p className="text text_type_digits-default">
              {proteins}
            </p>
          </div>
        </div>
        <div className={styles.calories}>
          <div className={styles.ccal}> 
            Жиры, г
          </div>
          <div className={styles.number}>
            <p className="text text_type_digits-default">
              {fat}
            </p>
          </div>
        </div>
        <div className={styles.calories}>
          <div className={styles.ccal}> 
            Углеводы, г
          </div>
          <div className={styles.number}> 
            <p className="text text_type_digits-default">
              {carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default IngredientDetails;