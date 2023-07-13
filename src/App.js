import { useEffect, useState } from "react";
import './cafe.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/index';
import { CategoriePage } from "./pages/CategoriePage";
import { CartPage } from "./pages/CartPage";
import { ProductListPage } from "./pages/ProductListPage";
import { useNavigate } from 'react-router-dom';



function App() {

  let [counter, setCounter] = useState(Number(0))
  const [navigationLength, setNavigationLength] = useState(0);



  const location = useLocation();
  let navigate = useNavigate();


  // eslint-disable-next-line
  useEffect(() => { init() }, [])

  const handleGoBack = () => {
    if (
      navigationLength > 0
    ) {
      window.Telegram.WebApp.BackButton.show();
      navigate(-1);
      setNavigationLength(prevLength => prevLength - 1);
    } else {
      window.Telegram.WebApp.BackButton.hide();
      navigate('/Categories');
    }
  };

  const handleGoForward = (e) => {
    let currentPage = location.pathname.split('/')
    currentPage = currentPage.length >= 1 ? currentPage[1] : 'Categories'

    if (currentPage !== e.currentTarget.getAttribute('to')) {
      navigate(e.currentTarget.getAttribute('to'));
      setNavigationLength(prevLength => prevLength + 1);
      window.Telegram.WebApp.BackButton.show();
    }
  };


  function init() {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.MainButton.setParams({
      is_visible: true,
      text: 'VIEW ORDER',
      color: '#31b545'
    }).hideProgress();
    // window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.MainButton.onClick(close)

  }

  useEffect(() => {

    window.addEventListener('Telegram.WebApp.BackButton', handleGoBack);

    return () => {
      window.removeEventListener('Telegram.WebApp.BackButton', handleGoBack);
    };
    // eslint-disable-next-line
  }, []);


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
          <li to="Categories" onClick={handleGoForward}>Categories</li>
          <li to="ProductListPage" onClick={handleGoForward}>ProductListPage</li>
          <li to="Cart" onClick={handleGoForward}>Cart</li>
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
      {navigationLength > 0 && <button onClick={handleGoBack}>back</button>}

      hello
      <p>{counter}</p>
      <button onClick={handleClick}>
        Click tribble
      </button>
    </>
  );
}

export default App;
