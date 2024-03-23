import React from 'react';
import styles from './BurgerIngredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerIngredient = ({title, image, price, setIsModalIngredientOpen}) => {

  const handleClickIngredient = () => {
    setIsModalIngredientOpen(true)
  };
// при нажатии на элемент сост меняется и модалка с этим элементом появляется onClick={handleClickIngredient}
  return (
    <div className={styles.ingredientsMenuWrapper} onClick={handleClickIngredient}>
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