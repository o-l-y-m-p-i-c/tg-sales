import { useEffect } from "react";
import './cafe.css'
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';
import { AnimatePresence } from 'framer-motion'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CartReducer from './reducers/cart';
import ApplicationReducer from './reducers/app';
import { Header } from "./components/Header";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Footer } from "./components/Footer";
import { MainButtonContainer } from "./components/MainButtonContainer";
import { Routing } from "./router";




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


  useEffect(() => {
    document.documentElement.style.setProperty('--bg_color', themeParams.bg_color);
    document.documentElement.style.setProperty('--text_color', themeParams.text_color);
    document.documentElement.style.setProperty('--button_color', themeParams.button_color);
    // eslint-disable-next-line
  }, [])
  // eslint-disable-next-line
  useEffect(() => { init() }, [])

  function init() {
    // navigate('/Categories')
    // window.Telegram.WebApp.ready();
  }






  return (
    <Provider store={store}>
      {/* {navigationLength > 0 && <BackButton onClick={handleGoBack} />} */}
      {/* {mainButtonSettings.show && <MainButton text={mainButtonSettings.text} progress="" textColor={mainButtonSettings.textColor} color={mainButtonSettings.color} onClick={switchMainButtonClick} />} */}
      <Header />
      <MainButtonContainer />
      <main>
        <AnimatePresence>
          <Routing />
          {/* <Routes>
            <Route path="*" element={<CategoriePage />} />
            <Route path="/" element={<CategoriePage />} />
            <Route path="/Product/:category/:id" element={<ProductPage />} />
            <Route path="/ProductList" element={<ProductListPage />} />
            <Route path="/ProductList/:id" element={<ProductListPage />} />
            <Route path="/Categories" element={<CategoriePage />} />
            <Route path="/Categories/:id" element={<CategoriePage />} />
            <Route path="/Cart" element={<CartPage />} />

          </Routes> */}
        </AnimatePresence>

      </main>

      <Footer />
    </Provider>
  );
}

export default App;
