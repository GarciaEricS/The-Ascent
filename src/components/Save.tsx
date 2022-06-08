import ManipulateFaith from '../utils/ManipulateFaith';
import * as items from '../utils/items';
import * as saveGeneration from '../utils/saveGeneration';
import '../styles/TopBar.css';

/** Functional component for the save buttons. Includes behavior when the
 * buttons are clicked. */
function Save({faithTools}: {faithTools: ManipulateFaith}, churchName: string) {
    /** Function for what occurs on click of the save button.
     * Generates a save and saves the save into local storage. */
    function createSave() {
        let save = saveGeneration.createSaveFile(
            faithTools.faith,
            faithTools.FPS,
            faithTools.FPC,
            items.generateItemAmounts(),
            churchName
        );
        localStorage.setItem('save', JSON.stringify(save));
    }

    function deleteSave() {
        localStorage.removeItem('save');
    }

    return (
        <div className='Save-Container'>
            <button onClick={createSave} className='save-button'>
                Save
            </button>
            <button onClick={deleteSave} className='save-button'>
                Delete Save
            </button>
        </div>
        
    )
}

export default Save;