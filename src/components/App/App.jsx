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

  React.useEffect(() => {
  //   fetch(src)
  //   .then(res => res.json())
  //   .then(data => {
  //     setData(data.data);
  //     setIsLoading(false);// в этот момент понимает что данные загрузились
  //     console.log(data);
  //   }) ;
    getIngredientData() // вызов функции
  }, []);

  const getIngredientData = async () => { // для асинхронной функ обяз пишем async(асинхронно)
    try {
      const res = await fetch(src); // в самом try за место then пишем await(подожди)
      const data = await res.json();
      setData(data.data);
      setIsLoading(false);
      console.log(data);
    }
    catch(err) {
      console.log(err)
    }
  }
  

//и компонент отрисовывается по новой, на 30 стр тернарный оператор что значение изм с isLoading  ?  true : false и рендерит <> что в фрагменте </>
  return (
    <div className={styles.mainContainer}> 
      <Header />
      <div className={styles.burgerContainer}> 
        {isLoading  ? <div>Loading...</div> :
        <>
          <BurgerIngredients data={data}  setIsModalIngredientOpen={setIsModalIngredientOpen}/>
          <BurgerConstructor data={data} setIsOrderDetails={setIsOrderDetails}/>
        </>
        }
      </div>
      {isModalIngredientOpen ? //тернарный оператор выбирает из начального состояния
        <Modal>
          <IngredientDetails setIsModalIngredientOpen={setIsModalIngredientOpen} />
        </Modal> : null 
      }
      {isModalOrderDetails ?
        <Modal>
          <OrderDetails setIsOrderDetails={setIsOrderDetails} />
        </Modal> : null
      }
    </div> 
  );
}
export default App;