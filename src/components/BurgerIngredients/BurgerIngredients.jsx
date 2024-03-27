import React from 'react';
import styles from './BurgerIngredients.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const BurgerIngredients = ({data, setIsModalIngredientOpen, setIngredientDetails} ) => {
  return(
    <div className={styles.ingredients}>

      <div className={styles.burgerSign}>
        <p className="text text_type_main-large">
          Соберите бургер
        </p>
      </div>
      <div className={styles.menuСontainer}>
        <div className={styles.bunsRange}>
          <p className="text text_type_main-default">
            Булки
          </p>
        </div>
        <div className={styles.saucesRange}>
          <p className="text text_type_main-default text_color_inactive">
            Соусы
          </p>
        </div>
        <div className={styles.fillingsRange}>
          <p className="text text_type_main-default text_color_inactive">
            Начинки
          </p>
        </div>
      </div>

      <div className={styles.scrollMenu}>
        <div className={styles.nameBuns}>
          <p className="text text_type_main-medium">
            Булки
          </p>
        </div>
        <div className={styles.buns}>
          {data.map(ingredientData => { 
            if (ingredientData.type === "bun") { 
              return <BurgerIngredient 
                key={ingredientData._id}  
                setIngredientDetails={setIngredientDetails} 
                ingredientData={ingredientData} 
                setIsModalIngredientOpen={setIsModalIngredientOpen}
              />;
            } 
          })}
        </div>

        <div className={styles.nameBuns}>
          <p className="text text_type_main-medium">
            Соусы
          </p>
        </div>
        <div className={styles.bunsSauce}>
          {data.map(ingredientData=> { 
            if (ingredientData.type === "sauce") { 
              return <BurgerIngredient 
                key={ingredientData._id} 
                setIngredientDetails={setIngredientDetails} 
                ingredientData={ingredientData}  
                setIsModalIngredientOpen={setIsModalIngredientOpen}
              />;
            } 
          })}
        </div>

        <div className={styles.nameBuns}>
          <p className="text text_type_main-medium">
            Начинки
          </p>
        </div>
        <div className={styles.bunsSauce}>
          {data.map(ingredientData => { 
            if (ingredientData.type === "main") { 
              return <BurgerIngredient 
                key={ingredientData._id} 
                setIngredientDetails={setIngredientDetails}
                ingredientData={ingredientData}  
                setIsModalIngredientOpen={setIsModalIngredientOpen}
              />;
            } 
          })}
        </div>
      </div>
    </div>
  )
}

export default BurgerIngredients;