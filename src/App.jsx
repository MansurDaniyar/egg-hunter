import { useState } from "react";
import eggImage from "../public/egg.png"; // Добавьте изображение яйца в папку src и импортируйте его

function App() {
  const [clickCount, setClickCount] = useState(0); // Счетчик кликов
  const targetClicks = 10; // Количество кликов для перехода по ссылке
  const url = "https://a9fm.github.io/lightshot"; // Ссылка для перехода

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Если достигнуто нужное количество кликов, открыть ссылку
    if (newCount === targetClicks) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="app">
      <h1>Кликер-приложение</h1>
      <p>Кликов: {clickCount}</p>
      <img
        src={eggImage}
        alt="Egg Button"
        className="egg-button"
        onClick={handleClick}
      />
      <p>Нажми {targetClicks} раз на яйцо, чтобы открыть секретную ссылку!</p>
    </div>
  );
}

export default App