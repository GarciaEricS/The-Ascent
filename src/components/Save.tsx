import ManipulateFaith from '../utils/ManipulateFaith';
import * as items from '../utils/items';
import * as saveGeneration from '../utils/saveGeneration';



function Save({faithTools}: {faithTools: ManipulateFaith}) {
    function createSave() {
        let save = saveGeneration.createSaveFile(
            faithTools.faith,
            faithTools.FPS,
            faithTools.FPC,
            items.generateItemAmounts()
        );
        localStorage.setItem('save', JSON.stringify(save));
    }

    function deleteSave() {
        localStorage.removeItem('save');
    }

    return (
        <div>
            <button onClick={createSave}>
                Save
            </button>
            <button onClick={deleteSave}>
                Delete Save
            </button>
        </div>
        
    )
}

export default Save;