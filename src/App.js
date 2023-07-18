import { useEffect, useState } from "react";
import './cafe.css'
import { Routes, Route, Link } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/index';
import { CategoriePage } from "./pages/CategoriePage";
import { CartPage } from "./pages/CartPage";
import { ProductListPage } from "./pages/ProductListPage";
import { useNavigate } from 'react-router-dom';
import { MainButton, useThemeParams } from '@vkruglikov/react-telegram-web-app';
import { AnimatePresence } from 'framer-motion'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CartReducer from './reducers/cart';
import ApplicationReducer from './reducers/app';
import { Header } from "./components/Header";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'



const reducer = combineReducers({
  CartReducer, ApplicationReducer
})

const store = createStore(
  reducer, /* preloadedState, */
  composeWithDevTools(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // eslint-disable-next-line
  const [colorScheme, themeParams] = useThemeParams();

  // let [counter, setCounter] = useState(Number(0))
  // const [navigationLength, setNavigationLength] = useState(0);
  // eslint-disable-next-line
  const [mainButtonSettings, setMainButtonSettings] = useState({
    text: "View order",
    show: true,
    color: '#63C470',
    textColor: '#FFFFFF'
  })


  // const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.setProperty('--bg_color', themeParams.bg_color);
    document.documentElement.style.setProperty('--text_color', themeParams.text_color);
    document.documentElement.style.setProperty('--button_color', themeParams.button_color);

    // alert(JSON.stringify(themeParams));

    // eslint-disable-next-line
  }, [])
  // eslint-disable-next-line
  useEffect(() => { init() }, [])

  function init() {
    window.Telegram.WebApp.ready();
  }

  // const handleClick = () => {
  //   setCounter(++counter)
  //   window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
  // }




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
    <Provider store={store}>
      {/* {navigationLength > 0 && <BackButton onClick={handleGoBack} />} */}
      {mainButtonSettings.show && <MainButton text={mainButtonSettings.text} progress="" textColor={mainButtonSettings.textColor} color={mainButtonSettings.color} onClick={switchMainButtonClick} />}

      <Header />
      {/* <header>
        <ul>
          <li style={{ color: 'var(--text-color)' }} to="Categories" onClick={handleGoForward}>Categories</li>
          <li style={{ color: 'var(--text-color)' }} to="ProductList" onClick={handleGoForward}>ProductListPage</li>
          <li style={{ color: 'var(--text-color)' }} to="Cart" onClick={handleGoForward}>Cart</li>
        </ul>
      </header> */}

      <main>


        <AnimatePresence>
          <Routes>
            <Route path="/" element={<CategoriePage props={{ navigate }} />} />
            <Route path="/Product/:id" element={<ProductPage props={{ navigate }} />} />
            <Route path="/ProductList" element={<ProductListPage props={{ navigate }} />} />
            <Route path="/Categories" element={<CategoriePage ops={{ navigate }} />} />
            <Route path="/Cart" element={<CartPage props={{ navigate }} />} />
            <Route path="*" element={<CategoriePage props={{ navigate }} />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer>
        <div className="footer container">
          <p>By continuing to this site, you agree to our terms and conditions. <Link to="#">TelegramSales.com</Link> (SIA Silver Spoon) is not responsible for any content published above. In case of dispute, please contact seller</p>
          <ul>
            <li><Link to="#">Privacy policy</Link></li>
            <li><Link to="#">Terms and Conditions</Link></li>
            <li><Link to="#">Made with TelegramSales.com</Link></li>
          </ul>
        </div>

      </footer>

    </Provider>
  );
}

export default App;
