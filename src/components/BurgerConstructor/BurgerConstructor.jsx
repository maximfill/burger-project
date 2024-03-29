import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({data, setIsOrderDetails}) => {

  const handleClickIngredient = () => {
    setIsOrderDetails(true)
  };

  return( 
    <div className={styles.mainContainer}>
      <div className={styles.сontainerAnOrder}>
        <div className={styles.selectMenuTop}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        <div className={styles.scrollMenu}>
          {data.map(item => {
            if (item.type != "bun") { 
              return <div className={styles.selectMenu} key={item._id}>
                <div className={styles.dragIcon}>
                  <DragIcon type="primary" />
                </div>
                <div className={styles.сonstructorElement}>
                  <ConstructorElement  text={item.name} price={20} thumbnail={item.image} />
                </div>
              </div>}
          })}
        </div>
        <div className={styles.selectMenuBottom}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        <div className={styles.placingAnOrder}>
          <div className={styles.orderPrice}>
            <p className="text text_type_digits-medium">610</p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={styles.checkout}>
            <Button  onClick = {handleClickIngredient} htmlType="button" type="primary" size="large">
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerConstructor;



