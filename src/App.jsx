
import './App.css';
import { useState } from 'react';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";




function App() {


  const [ProductList, setProductList] = useState([

    {name: 'Iphone X', price: 10},
    {name: 'Hwawei p30', price: 20},
    {name: 'xiaomi redmi note', price: 25},
    {name: 'samsung galaxy note 20', price: 30},
    {name: 'Nokia 6310.', price: 85}

  ]);

  const [OrderArray, setOrderArray] = useState([]);
  const [totalOrderPrice, settotalOrderPrice] = useState(0);
  const [Order, setOrder] = useState({});
  const [OrdersArray, setOrdersArray] = useState([]);
  const [viewArray, setviewArray] = useState([]);

  function setTheView() {

    setviewArray(OrderArray.map((p,i,a)=>{

      p.times = 0
      p.first = "false";

      for (let m = 0 ; m < OrderArray.length ; m++ ){
      
        if (OrderArray[m].name === p.name){

          if (p.times === 0) {OrderArray[m].first = "true"}
           p.times++

          }

      }
      return p;

    }))

    setviewArray(OrderArray.filter(p=>p.first == "true"))



  }

  function countInArray(array, what) {
    return array.filter(item => item == what).length;
  }


  const addNewOrder = (n,p,i) => {
      
      setOrderArray([{name: n, price: p, id: i},...OrderArray])
      settotalOrderPrice(totalOrderPrice+p);
      setOrder({products: [{name: n, price: p, id: i},...OrderArray], total: totalOrderPrice+p})
      

  }   
  
  const saveOrderToArray = ()=> {
    
    if (totalOrderPrice !=0) {

      setOrdersArray(([Order,...OrdersArray]))
      setOrder({});
      setOrderArray([]);
      settotalOrderPrice(0);
      setviewArray([])

    }

  }

  function Home()
  {

    const navigate = useNavigate();

    return (

      <div className="App">
        
      <br></br>
      <h1 className='text' >SV-shop</h1>
      <img src="./images/1x/cartIcon2.png" id='icon' onClick={() => {navigate("/cart"); setTheView() }}/>
      <h3 className='text' style={{display: "inline-block"}}>View Cart</h3>
      <br></br>
      <br></br>
      {ProductList.map( (p,i) =>{
  
      return [<Product prodName={p.name} prodPrice={p.price} id={i} addOrder={addNewOrder}/>,<br></br>]
      
      })}

      </div>

    );

  }


  function Cart()
  {


    const navigate = useNavigate();


    return(

      <div className="Cart text">
      <br></br>
      <br></br>
      <img src="./images/1x/homeIcon.png" id='homeIcon' onClick={() => navigate("/")}/>
      <br></br><br></br>
      <h1>Cart</h1>
      <br></br><br></br>
      {viewArray.map( (p,i,a) =>{


      return [<div className='text'><h3> {p.name} {p.price} x {p.times}</h3></div>]
  
      })}
      <br></br>
      <h1 className='text'>Total price: {totalOrderPrice}</h1>
      <br></br>
      <br></br>
      <img src="./images/1x/buyButton.png" id='homeIcon' onClick={saveOrderToArray}/>
      </div>
   
    );

  }

  return (


    <Router>
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      
    </Routes>
    </Router>

  );
}

export default App;