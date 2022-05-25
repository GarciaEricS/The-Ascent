import { useState } from 'react';
import './App.css';
import * as items from './items';

/** Interface describing a way to look at and manipulate faith.
 * Passed from App component to other components. */
export interface ManipulateFaith {
  faith: number;
  setFaith: (arg: number) => void;
}




function App() {
  const [faith, setFaith] = useState(0);
  const faithTools: ManipulateFaith = {faith, setFaith};

  return (
    <div className="App">
      <Church changeFaith={faithTools}/>
      <Item item={items.allItems[0]} faithTools={faithTools} />
    </div>
  );
}

function Church({changeFaith}: {changeFaith: ManipulateFaith}) {
  return (
    <div className="Church-container">
      <div>{changeFaith.faith + " Faith"}</div>
      <img
        className="church-img" 
        src={process.env.PUBLIC_URL + "/church.png"}
        alt=""
        onClick={() => changeFaith.setFaith(changeFaith.faith + 1)}
      />
      <div>{"Placeholder" + " church"}</div>
    </div>
  );
}

function Item({item, faithTools}: 
              {item: items.ItemClass, faithTools: ManipulateFaith}) {
  return (
    <button 
    className="Item-container" 
    onClick={() => item.effect(faithTools)}>
      {item.itemName}
    </button>
    
  );
}

export default App;