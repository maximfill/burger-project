import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Header.module.css';
import React from 'react';

const Header = () => {
  return(
    <header className={styles['logo-containerHeader']}>

      <div className={styles.containerOrderFeed}>
        <div className={styles.burgerWrap}>
          <BurgerIcon type="primary"/>
          <p className="text text_type_main-default ml-4">
            Конструктор
          </p>
        </div>
        <div className={styles.tapeWrap}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-4">
            Лента заказов
          </p>
        </div>
      </div>

      <div className={styles.logoIconWrapper}>
        <Logo />
      </div>

      <div className={styles.containerPersonalAccount}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive ml-4">
          Личный кабинет
        </p>
      </div>
    </header>
  )
}

export default Header;




