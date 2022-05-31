import { nextTick } from 'process';
import { useEffect, useState } from 'react';
import './App.css';
import * as items from './items';

const NUM_TICKS = 100;

/** Interface describing a way to look at and manipulate faith.
 * Passed from App component to other components. */
export interface ManipulateFaith {
  faith: number;
  setFaith: React.Dispatch<React.SetStateAction<number>>;
  FPS: number;
  setFPS: React.Dispatch<React.SetStateAction<number>>;
  FPC: number;
  setFPC: React.Dispatch<React.SetStateAction<number>>;
}

/** Component for the whole app. Displays Church and Items. */
function App() {
  const [faith, setFaith] = useState(0);
  const [FPS, setFPS] = useState(0);
  const [FPC, setFPC] = useState(1);

  const faithTools: ManipulateFaith = {
    faith, setFaith, 
    FPS, setFPS, 
    FPC, setFPC
  };

  return (
    <div className="App">
      <Church faithTools={faithTools}/>
      <ItemContainer faithTools={faithTools} />
    </div>
  );
}

/** Functional component for the Church. Displays the church, amount of faith,
 *  the name, and contains the logic for clicking on these. Arguments include
 *  ways to manipulate faith. */
function Church({faithTools}: {faithTools: ManipulateFaith}) {

  useEffect(() => {
    let interval = setInterval(() => tick(), 1000 / NUM_TICKS);
    return () => clearInterval(interval)
    }, 
    [faithTools.faith]
  )

  /** Increases the faith counter based on FPS. */
  function tick() {
    faithTools.setFaith(faith => faith + faithTools.FPS / NUM_TICKS)
  }

  /** Happens on click of the church. Increases faith based on FPC. */
  function onClick() {
    faithTools.setFaith(faith => faith + faithTools.FPC)
  }

  return (
    <div className="Church-container">
      <div>{Math.floor(faithTools.faith) + " Faith"}</div>

      <img
        className="church-img" 
        src={process.env.PUBLIC_URL + "/church.png"}
        alt=""
        onClick={onClick}
      />

      <div>{"Placeholder" + " church"}</div>

      <div>{faithTools.FPS + " Faith per Second"}</div>

      <div>{faithTools.FPC + " Faith per Click"}</div>

    </div>
  );
}

function ItemContainer({faithTools}: {faithTools: ManipulateFaith}) {
  return (
    <div className="Item-Container">
      {items.allItems.map(item => 
        <Item key="{item}" item={item} faithTools={faithTools}/>
      )}
    </div>
  )
}

/** Component for an Item, such as a Pointer */
function Item({item, faithTools}: 
              {item: items.ItemClass, faithTools: ManipulateFaith}) {
  // const {price, setPrice} = useState(item.baseCost);
  return (
    <div>
      <button 
      className="Item-container"
      onClick={() => item.onClick(faithTools)}
      >
      {item.itemName + " " + item.currCost()}
      </button>
    </div>
    
    
  );
}

export default App;