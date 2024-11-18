import './App.css';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';
import { memo } from 'react';

// Main App Component
function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

// Counter Component
function Counter() {
  const count = useRecoilValue(counterAtom);

  return (
    <div>
      <div>Current Count: {count}</div>
      <Buttons />
    </div>
  );
}

// Buttons Component with Memoization
const Buttons = memo(function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 1);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
});

export default App;
