import ManipulateFaith from '../utils/ManipulateFaith';
import '../styles/Church.css';
import { useEffect, useState } from 'react';

/** Number of miliseconds before between Faith counter increasing
 * from Faith per second. */
const NUM_TICKS = 100;

/** Functional component for the Church. Displays the church, amount of faith,
 *  the name, and contains the logic for clicking on these. Arguments include
 *  ways to manipulate faith. */
 function Church({faithTools, name}: {faithTools: ManipulateFaith, name: string}) {

    let [editMode, setEditMode] = useState(false);
    
    useEffect(() => {
      let interval = setInterval(() => tick(), 1000 / NUM_TICKS);
      return () => clearInterval(interval)
      }
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
  
        <ChurchName 
          churchName={faithTools.churchName} 
          setChurchName={faithTools.setChurchName} 
          editMode={editMode} 
          setEditMode={setEditMode}
        />
  
        <div>{faithTools.FPS + " Faith per Second"}</div>
  
        <div>{faithTools.FPC + " Faith per Click"}</div>
  
      </div>
    );
  }

function ChurchName({churchName, setChurchName, editMode, setEditMode}: 
  {
  churchName: string, 
  setChurchName: React.Dispatch<React.SetStateAction<string>>, 
  editMode: boolean
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
  }) {

  function handleKey(event: any) {
    if (event.target.value !== "") {
      setChurchName((churchName) => event.target.value);
    }
    if (event.key === "Enter") {
      setEditMode((editMode) => false)
    } 
  }

  if (editMode) {
    return (
      <input 
        type='text' 
        onKeyDown={handleKey} 
        autoComplete="off"
        autoFocus
      />
    )
  }

  return (
    <div onClick={() => setEditMode((editMode) => true)}>{churchName + " church"}</div>
  )
}

export default Church;