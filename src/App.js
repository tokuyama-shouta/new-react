
import './App.css';
import Articl from "./components/Articl";
import TextInput from "./components/TextInput";
import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";

// const testScope = () => {
//   if(scope === 'function') {
//     var functionScope = "関数スコープ内ならどこからでも参照できます"
//   }else if (scope === 'block') {
//     let blockScope = "ブロックスコープ内でしか参照できません"
//   }
//   console.log(functionScope);
// }
// testScope('function');

// let mutableText = 'let変更前';
// mutableText = 'let変更後';
// console.log(mutableText);

// const immutableText = 'const変更前';
// console.log(immutableText);

// const mutableArray = [1,2,3];
// mutableArray.push(4)
// console.log(mutableArray);

// const mutableObject = {id: 'hoge', value: 'fuga'}
// mutableObject['name'] = 'bar';
// console.log(mutableObject);

// function nameFunc(message) {
//   console.log(message);
  
// }
// const arrowFunc = (message) => {
//   console.log(message);
// }
// const oneLineArrowFunc = (message) => console.log(message);

// nameFunc('これは名前付き関数です');
// arrowFunc('これはアロー関数です');
// oneLineArrowFunc('これは一行で書いたアロー関数です');

// const array = [1,2,4,8];
// const resultArray = array.map(x => x * 2)
// console.log(resultArray);

// const obj = {
//   "hoge":{text: "fuga"},
//   "foo":{text: "bar"},
//   "fiz":{text: "buzz"},
// };

// const objectArray = Object.Keys(object).map(key => {
//   const value = object[key]
//   value['id'] = key
//   console.log(value)
//   return value
// })
// console.log(objectArray);

// const objectArray = [
//   {id: 'hoge', text: 'fuga'},
//   {id: 'foo', text: 'bar'},
//   {id: 'fiz', text: 'buzz'}
// ];

// const result = objectArray.filter(object => {
//   return object.id === 'hoge'
// });
// console.log(resule[0].text);

// for (let j = 0; j < 5; j++ ){
//   sum = 0;
//   console.time(`Typed for`);
//   for (let i = 0; i < len; i=(i+1)|0){
//     sum += arr[i];
//   }
//   console.timeEnd(`Typed for`);
//   console.log(sum);
// )
// wgit 
//非同期処理
//即時関数
//aa
//gazou&previw
//コーディング規約
//文字列操作
//seikihyougenn1 
//seikihyougen2
//web API
//webApiとは
//aaaa
//アーキテクチャスタイル"



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
     <TextInput/>
     <Counter/>
     <ToggleButton/>
    </div>

  );
}

export default App;
