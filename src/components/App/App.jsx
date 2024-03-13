import React from 'react';
import Header from '../Header/Header';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from './App.module.css';
import data from '../../utils/data';


function App() {
  return (
    <div className={styles.mainContainer}> 
      <Header />
      <div className={styles.burgerContainer}> 
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </div>
    </div>
  );
}

export default App;
