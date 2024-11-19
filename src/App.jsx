// import './App.css';
// import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
// import { counterAtom } from './store/atoms/counter';
// import { memo } from 'react';
import { useRecoilValue } from "recoil";
import { evenSelector } from './store/atoms/counter';
// ... existing code ...
// // Main App Component
// function App() {
//   return (
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   );
// }

// // Counter Component
// function Counter() {
//   const count = useRecoilValue(counterAtom);

//   return (
//     <div>
//       <div>Current Count: {count}</div>
//       <Buttons />
//     </div>
//   );
// }

// // Buttons Component with Memoization
// const Buttons = memo(function Buttons() {
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount((c) => c + 1);
//   }

//   function decrease() {
//     setCount((c) => c - 1);
//   }

//   return (
//     <div>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   );
// });

// export default App;



  // ------------ selector in react js code with full explanation -----------

// ... existing code ...

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  return (
    <div>
      {isEven ? "even" : "odd"}
    </div>
  );
//   function increase(){
//     setCount(c=>c+2)
//   }
}


export default IsEven;  // Export the component
