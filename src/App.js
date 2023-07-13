
import React, { useState, useEffect } from 'react';
import './cafe.css'
import { createContext } from 'react';


const IContext = createContext({})



function App() {
  const [IState, setIState] = useState({
    canPay: true,
    modeOrder: true,
    totalPrice: 29,
    apiUrl: '',
    userId: '',
    userHash: '',
    debug: false,
    order_data: [],
    comment: '',
    price: 0
  })
  let [counter, setCounter] = useState({
    number: 0
  })



  // const init = () => {

  //   window.Telegram.WebView.onEvent('theme_changed', setThemeClass);
  //   setThemeClass();
  //   window.Telegram.WebApp.ready();
  //   window.Telegram.WebApp.MainButton.setParams({
  //     is_visible: !!IState.canPay,
  //     text: 'VIEW ORDER',
  //     color: '#31b545'
  //   }).hideProgress();
  //   window.Telegram.WebApp.BackButton.show();
  //   window.Telegram.WebApp.BackButton.onClick(window.Telegram.WebApp.close())
  //   window.Telegram.WebApp.MainButton.onClick(window.Telegram.WebApp.close())
  //   // Telegram.WebApp.BackButton.hide();
  //   // setIState({ ...IState, apiUrl: "\/cafe\/api", userId: 0, userHash: null, debug: true })

  // }


  function setThemeClass() {
    document.documentElement.className = window.Telegram.WebApp.colorScheme;
  }

  const handleClick = (e) => {
    setCounter({ ...counter, number: ++counter.number })
    // window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
  }



  useEffect(() => {
    // init()
  }, [])

  return (
    <IContext.Provider value={{ IState, setIState }}>
      <div className="App">
        Hi all
        <p>
          {counter.number}
        </p>
        <button onClick={handleClick}>
          Test click
        </button>
      </div>

    </IContext.Provider>



  );
}


export default App;
