import { useEffect, useState } from "react";
import './cafe.css'
import { Routes, Route, Link } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/index';
import { CategoriePage } from "./pages/CategoriePage";
import { CartPage } from "./pages/CartPage";
import { ProductListPage } from "./pages/ProductListPage";
import { useNavigate } from 'react-router-dom';


function App() {

  let [counter, setCounter] = useState(Number(0))
  let navigate = useNavigate();

  console.log(navigate)

  // eslint-disable-next-line
  useEffect(() => { init() }, [])


  function init() {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.MainButton.setParams({
      is_visible: true,
      text: 'VIEW ORDER',
      color: '#31b545'
    }).hideProgress();
    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.BackButton.onClick(navigate.length > 2 ? () => navigate(-1) : window.Telegram.WebApp.BackButton.hide())
    window.Telegram.WebApp.MainButton.onClick(close)

  }




  function close() {
    window.Telegram.WebApp.close()
  }



  const handleClick = () => {
    setCounter(++counter)
    window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
  }




  return (
    <>
      <header>
        <ul>
          <li><Link to="Categories">Categories</Link></li>
          <li><Link to="ProductListPage">ProductListPage</Link></li>
          <li><Link to="Cart">Cart</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<CategoriePage props={{ navigate }} />} />
        <Route path="/Product" element={<ProductPage props={{ navigate }} />} />
        <Route path="/ProductListPage" element={<ProductListPage props={{ navigate }} />} />
        <Route path="/Categories" element={<CategoriePage ops={{ navigate }} />} />
        <Route path="/Cart" element={<CartPage props={{ navigate }} />} />
        <Route path="*" element={<CategoriePage props={{ navigate }} />} />
      </Routes>

      hello
      <p>{counter}</p>
      <button onClick={handleClick}>
        Click tribble
      </button>
    </>
  );
}

export default App;
