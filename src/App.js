import { useEffect, useState } from "react";
import './cafe.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/index';
import { CategoriePage } from "./pages/CategoriePage";
import { CartPage } from "./pages/CartPage";
import { ProductListPage } from "./pages/ProductListPage";
import { useNavigate } from 'react-router-dom';
import { BackButton, MainButton, useThemeParams } from '@vkruglikov/react-telegram-web-app';
import { AnimatePresence } from 'framer-motion'





function App() {
  // eslint-disable-next-line
  const [colorScheme, themeParams] = useThemeParams();

  let [counter, setCounter] = useState(Number(0))
  const [navigationLength, setNavigationLength] = useState(0);
  // eslint-disable-next-line
  const [mainButtonSettings, setMainButtonSettings] = useState({
    text: "View order",
    show: true,
    color: '#63C470',
    textColor: '#FFFFFF'
  })


  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.setProperty('bg_color', themeParams.bg_color);
    document.documentElement.style.setProperty('text_color', themeParams.text_color);
    document.documentElement.style.setProperty('button_color', themeParams.button_color);

    alert(JSON.stringify(themeParams));

    // eslint-disable-next-line
  }, [])
  // eslint-disable-next-line
  useEffect(() => { init() }, [])

  function init() {
    window.Telegram.WebApp.ready();
  }

  const handleClick = () => {
    setCounter(++counter)
    window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
  }

  const handleGoForward = (e) => {
    let currentPage = location.pathname.split('/')
    currentPage = currentPage.length >= 1 ? currentPage[1] : 'Categories'

    if (currentPage !== e.currentTarget.getAttribute('to')) {
      navigate(e.currentTarget.getAttribute('to'));
      setNavigationLength(prevLength => prevLength + 1);
    }
  };

  const handleGoBack = () => {
    if (
      navigationLength > 0
    ) {
      navigate(-1);
      setNavigationLength(prevLength => prevLength - 1);
    } else {
      navigate('/Categories');
    }
  };


  const switchMainButtonClick = () => {
    switch (mainButtonSettings.text) {
      case "View order": {
        window.Telegram.WebApp.close()
        break;
      }
      default: {
        alert("No event for button")
        // window.Telegram.WebApp.close()
      }
    }
  }

  return (
    <>
      {navigationLength > 0 && <BackButton onClick={handleGoBack} />}
      {mainButtonSettings.show && <MainButton text={mainButtonSettings.text} progress="" textColor={mainButtonSettings.textColor} color={mainButtonSettings.color} onClick={switchMainButtonClick} />}

      <header>
        <ul>
          <li style={{ color: 'var(--text-color)' }} to="Categories" onClick={handleGoForward}>Categories</li>
          <li style={{ color: 'var(--text-color)' }} to="ProductListPage" onClick={handleGoForward}>ProductListPage</li>
          <li style={{ color: 'var(--text-color)' }} to="Cart" onClick={handleGoForward}>Cart</li>
        </ul>
      </header>
      {navigationLength > 0 && <button onClick={handleGoBack}>back</button>}
      <p>
        hello
      </p>

      {/* {themeParams !== undefined ? JSON.parse(themeParams).toString() : ''} */}

      <p>{counter}</p>
      <button onClick={handleClick}>
        Click tribble
      </button>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<CategoriePage props={{ navigate }} />} />
          <Route path="/Product" element={<ProductPage props={{ navigate }} />} />
          <Route path="/ProductListPage" element={<ProductListPage props={{ navigate }} />} />
          <Route path="/Categories" element={<CategoriePage ops={{ navigate }} />} />
          <Route path="/Cart" element={<CartPage props={{ navigate }} />} />
          <Route path="*" element={<CategoriePage props={{ navigate }} />} />
        </Routes>
      </AnimatePresence>


    </>
  );
}

export default App;
