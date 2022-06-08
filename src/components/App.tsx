import ManipulateFaith from '../utils/ManipulateFaith';
import { useState, useEffect } from 'react';
import '../styles/App.css';
import Church from './Church';
import ItemContainer from './ItemContainer'
import * as saveGeneration from '../utils/saveGeneration';
import TopBar from './TopBar';

/** Component for the whole app. Displays Church and Items. */
function App() {

  /** Handles loading save on applications startup. */
  useEffect(() => {
    const saveString = localStorage.getItem('save');
    if (saveString !== null) {
      const save: saveGeneration.SaveFile = JSON.parse(saveString);
      saveGeneration.loadSave(save, faithTools);
    }
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [])
  
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
      <TopBar faithTools={faithTools} />
      <Church faithTools={faithTools} name={"hello"}/>
      <ItemContainer faithTools={faithTools} />
    </div>
  );
}

export default App;