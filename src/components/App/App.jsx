import React from 'react';
import Header from '../Header/Header';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from './App.module.css';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
// import { useEffect } from 'react';

const src = "https://norma.nomoreparties.space/api/ingredients";

function App() {

  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalIngredientOpen, setIsModalIngredientOpen] = React.useState(false);
  const [isModalOrderDetails, setIsOrderDetails] = React.useState(false);
  const [ingredientDetails, setIngredientDetails] = React.useState(null);

  React.useEffect(() => {
    getIngredientData()
  }, []);

  const getIngredientData = async () => {
    try {
      const res = await fetch(src);
      const data = await res.json();
      setData(data.data);
      setIsLoading(false);
      console.log(data);
    }
    catch(err) {
      console.log(err)
    }
  }
  
  return (
    <div className={styles.mainContainer}> 
      <Header />
      <div className={styles.burgerContainer}> 
        {isLoading  ? <div>Loading...</div> :
        <>
          <BurgerIngredients data={data}  setIsModalIngredientOpen={setIsModalIngredientOpen} setIngredientDetails={setIngredientDetails}/>
          <BurgerConstructor data={data} setIsOrderDetails={setIsOrderDetails}/>
        </>
        }
      </div>
      {isModalIngredientOpen ?
        <Modal setIsModalOpen={setIsModalIngredientOpen} >
          <IngredientDetails ingredientDetails={ingredientDetails} />
        </Modal> : null 
      }
      {isModalOrderDetails ?
        <Modal setIsModalOpen={setIsOrderDetails}>
          <OrderDetails setIsOrderDetails={setIsOrderDetails} />
        </Modal> : null
      }
    </div> 
  );
}
export default App;