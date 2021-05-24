
import './App.css';
import Articl from "./components/Articl";

function App() {
  return (
    <div className="App">
      <Articl
        title={'新・日本一わかりやすいReact入門'}
        content={'今日のトピックはpropsについて'}
      />
      <Articl
        title={'新・日本一わかりやすいReact入門2'}
        content={'今日のトピックはpropsについて2'}
      />
      <Articl
        title={'新・日本一わかりやすいReact入門3'}
        content={'今日のトピックはpropsについて3'}
      />
    </div>
  );
}

export default App;
