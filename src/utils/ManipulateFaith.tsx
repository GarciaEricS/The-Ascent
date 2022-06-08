/** Interface describing a way to look at and manipulate faith.
 * Passed from App component to other components. */
 export default interface ManipulateFaith {
    faith: number;
    setFaith: React.Dispatch<React.SetStateAction<number>>;
    FPS: number;
    setFPS: React.Dispatch<React.SetStateAction<number>>;
    FPC: number;
    setFPC: React.Dispatch<React.SetStateAction<number>>;
    churchName: string;
    setChurchName: React.Dispatch<React.SetStateAction<string>>;
  }