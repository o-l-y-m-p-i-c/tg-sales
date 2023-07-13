import { useEffect, useState } from "react";


function App() {

  let [counter, setCounter] = useState(Number(0))

  console.log(window.Telegram.WebApp)



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

  useEffect(() => {
    init()
  })

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
      <button onClick={handleClick}>
        Click tribble
      </button>
    </>
  );
}

export default App;
