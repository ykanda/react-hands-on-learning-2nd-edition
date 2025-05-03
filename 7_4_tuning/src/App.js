import './App.css';
import React, { useState, useCallback, memo } from 'react';



const Cat = memo(
  ({ name, meow = f => f }) => {
    console.log(`rendering ${name}`);
    return <p onClick={() => meow(name)}>{name}</p>
  },
  (prevProps, nextProps) => prevProps.name === nextProps.name
)



function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);

  // memoize the meow function
  const meow = useCallback(name => console.log(`${name} has meowed`), []);

  return (
    <>
      {cats.map((name, i) => (
        <Cat key={i} name={name} meow={meow} />
      ))}
      <button onClick={() => setCats([...cats, prompt('New Cat Name')])}>
        Add Cat
      </button>
    </>
  );
}

export default App;
