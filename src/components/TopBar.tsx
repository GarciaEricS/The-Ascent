import ManipulateFaith from '../utils/ManipulateFaith';
import Save from './Save';
import '../styles/TopBar.css';

function TopBar({faithTools}: {faithTools: ManipulateFaith}) {
    return (
        <div className='Top-Bar'>
            <div className='Inside-Text'>Test</div> 
            <Save faithTools={faithTools}/>
            
        </div>
    )
}

export default TopBar;