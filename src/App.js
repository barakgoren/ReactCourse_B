import './App.css';
import Counter from './components/Counter';
import FoodsApi from './components/FoodApi';
import HwCounter from './components/HwCounter';
import HwGallery from './components/HwGallery';
import Message from './components/Message';
import Value from './components/Value';

function App() {
  return (
    <div className="container">
      <FoodsApi />
      <hr />
      <Value />
      <hr />
      <Message txt='My message' clr='red' />
      <Message txt='My message' clr='blue' />
      <hr />
      <Counter />
      <hr />
      <h1>Home work:</h1>
      <hr />
      <HwCounter />
      <hr />
      <HwGallery />
    </div>
  );
}

export default App;
