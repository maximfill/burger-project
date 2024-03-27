import React from 'react'
import styles from './OrderDetails.module.css';
import myImage from '../../images/done.png';




const OrderDetails = () => {

  return (
    <div className={styles.order}>
    
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