import React from 'react'
import styles from './OrderDetails.module.css';
import myImage from '../../images/done.png';
import image from '../../images/icon.png';



const OrderDetails = ({setIsOrderDetails}) => {

  const closingOrderDetails = () => {
    setIsOrderDetails(false)
  };

  return (
    <div className={styles.order}>
      <div className={styles.orderClosing}>
        <div className={styles.closing} onClick={closingOrderDetails}>
          <img src={image} alt="Image" />
        </div>
      </div>
      <div className={styles.numbers}>
        <p className="text text_type_digits-large">034536</p>
      </div>
      <div className={styles.text}>
        идентификатор заказа
      </div>
      <div className={styles.gif}>
        <img src={myImage} alt="Image" />
      </div>
      <div className={styles.orderText}>
        Ваш заказ начали готовить
      </div>
      <div className={styles.statusOrder}>
        Дождитесь готовности на орбитальной станции
      </div>
    </div>
  )
}

export default OrderDetails;