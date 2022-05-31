import ManipulateFaith from '../utils/ManipulateFaith';
import '../styles/Church.css';
import { useEffect } from 'react';

/** Number of miliseconds before between Faith counter increasing
 * from Faith per second. */
const NUM_TICKS = 100;

/** Functional component for the Church. Displays the church, amount of faith,
 *  the name, and contains the logic for clicking on these. Arguments include
 *  ways to manipulate faith. */
 function Church({faithTools}: {faithTools: ManipulateFaith}) {

    let churchName = 'Placeholder';
    
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
  
        <div>{churchName + " church"}</div>
  
        <div>{faithTools.FPS + " Faith per Second"}</div>
  
        <div>{faithTools.FPC + " Faith per Click"}</div>
  
      </div>
    );
  }

export default Church;