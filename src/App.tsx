import { useRef, useState } from 'react';
import data from './assets/db/db.json';
import Data from './assets/interfaces/Data';
import handleSelectorChange from './assets/functions/handleSelectorChange';
import './App.css';

function App() {
  const SelectorsRef = useRef<HTMLDivElement>(null);
  const [selector, setSelector] = useState<string>(data[0].name || '');
  const [selectors, setSelectors] = useState<Data[]>(data);

  return (
    <div className='App'>
      <h1>Select Your Friend</h1>
      <div
        className='selector'
        onClick={() => SelectorsRef.current?.classList.toggle('hidden')}
      >
        {selector}
      </div>
      <div className='selectors' ref={SelectorsRef}>
        {selectors.map(({ id, name }, index) => (
          <div
            className='item'
            id={id}
            key={index}
            onClick={(e) =>
              handleSelectorChange({ e, setSelector, data, SelectorsRef })
            }
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
