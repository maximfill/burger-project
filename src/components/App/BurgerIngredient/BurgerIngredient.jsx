import React from 'react';
import styles from './BurgerIngredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerIngredient = ({title, image, price}) => {
  return (
    <div className={styles.breadMenuWrapper}>
      <img src={image} alt="Ингредиент бургера" />
      <div className={styles.containerPrice}>
        <p className="text text_type_digits-default mr-2"> {price} </p>
        <CurrencyIcon type="primary" />
      </div>

      <div className={styles.containerText}>
        <p className="text text_type_main-default"> {title} </p>
      </div>
    </div>
  );
}

export default BurgerIngredient;