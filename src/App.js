import { useEffect } from "react";


function App() {

  console.log(window.Telegram.WebApp)



  const init = () => {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.MainButton.setParams({
      is_visible: !!IState.canPay,
      text: 'VIEW ORDER',
      color: '#31b545'
    }).hideProgress();
    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.BackButton.onClick(close)
    window.Telegram.WebApp.MainButton.onClick(close)

  }

  useEffect(() => {
    init()
  }, [])

  function close() {
    window.Telegram.WebApp.close()
  }

  return (
    <>
      hello

    </>
  );
}

export default App;
