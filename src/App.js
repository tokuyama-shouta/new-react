
import './App.css';
import Articl from "./components/Articl";

// const testScope = () => {
//   if(scope === 'function') {
//     var functionScope = "関数スコープ内ならどこからでも参照できます"
//   }else if (scope === 'block') {
//     let blockScope = "ブロックスコープ内でしか参照できません"
//   }
//   console.log(functionScope);
// }
// testScope('function');

let mutableText = 'let変更前';
mutableText = 'let変更後';
console.log(mutableText);

const immutableText = 'const変更前';
console.log(immutableText);

const mutableArray = [1,2,3];
mutableArray.push(4)
console.log(mutableArray);

const mutableObject = {id: 'hoge', value: 'fuga'}
mutableObject['name'] = 'bar';
console.log(mutableObject);

function nameFunc(message) {
  console.log(message);
  
}
const arrowFunc = (message) => {
  console.log(message);
}
const oneLineArrowFunc = (message) => console.log(message);

nameFunc('これは名前付き関数です');
arrowFunc('これはアロー関数です');
oneLineArrowFunc('これは一行で書いたアロー関数です');



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
