import React from 'react';
import './App.css';
import Header from '../Header/Header';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../App/BurgerConstructor/BurgerConstructor';
import styles from './App.module.css';
import data from '../../utils/data';


function App() {
  return (
    <div className={styles.mainContainer}> 
      <Header />
      <div className={styles.burgerContainer}> 
        <BurgerIngredients />
        <BurgerConstructor data={data} />
      </div>
    </div>
  );
}

export default App;
