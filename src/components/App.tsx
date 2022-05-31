import ManipulateFaith from '../utils/ManipulateFaith';
import { useEffect, useState } from 'react';
import '../styles/App.css';
import Church from './Church';
import ItemContainer from './ItemContainer'

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

export default App;