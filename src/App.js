import { useEffect, useState } from "react";
import './cafe.css'

function App() {

  let [counter, setCounter] = useState(Number(0))
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
    window.Telegram.WebApp.BackButton.onClick(close)
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
      hello
      <p>{counter}</p>
      <button onClick={handleClick}>
        Click tribble
      </button>
    </>
  );
}

export default App;
