// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

import ChildComponent from './ChildComponent';

import { useState } from 'react';

function MyComponent() {
  return <ChildComponent />;
}

function App() {
  const text = 'hellow world';

  const handleClick = () => {
    alert('test');
  };

  const listItems = [
    <MyComponent key="0" />,
    <MyComponent key="1" />,
    <MyComponent key="2" />,
  ];

  const test = [
    { content: 'neo', id: '001' },
    { content: 'jack', id: '002' },
    { content: 'wayne', id: '003' },
  ];

  const filterItems = test.filter((item) => {
    if (item.content !== 'neo') {
      return true;
    }
  });

  const [clicks, setClicks] = useState(0);
  const handleCliick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <button onClick={() => alert('test')}>test</button>
      <button onClick={handleClick}>test</button>
      <h1 style={{ backgroundColor: '#c4c4c4' }}>{text.toUpperCase()}</h1>
      <input type="text" placeholder={text} />
      <MyComponent />
      {listItems}
      {test.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.content}</h1>
          </div>
        );
      })}
      {filterItems.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.content}</h1>
          </div>
        );
      })}
      <div className={true ? 'a c' : 'b c'}>
        {false ? <h1>hello</h1> : <h1>world</h1>}
      </div>
      <div className={`c ${true ? 'a' : 'b'}`}>
        {false ? <h1>hello</h1> : <h1>world</h1>}
      </div>
      <div>{false && <h1>hello</h1>}</div>
      <div>
        <button onClick={handleCliick}>點擊次數{clicks}</button>
      </div>
    </>
  );
}

export default App;
