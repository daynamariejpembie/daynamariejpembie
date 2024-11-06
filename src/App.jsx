import './App.css';
import Carousel  from './components/Carousel/Carousel';
import { Accordion } from './components/Accordion/Accordion';
import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {
  return (
    <div className="flex flex-col">
      <div className="header-component">
        <Header />
      </div>
      <Body />
    </div>
  )
}

export default App;
