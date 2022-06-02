import * as items from '../utils/items';
import ManipulateFaith from './ManipulateFaith';

/** An individual save. Holds a faith value, FPS, FPC, and the
 * total amount of items.
 */
 class SaveFile {
    faith: number;
    FPS: number;
    FPC: number;
    itemAmounts: {[name:string]: number};

    constructor(
        faith: number, 
        FPS: number,
        FPC: number,
        itemAmounts: {[name:string]: number}
        ) {
            this.faith = faith;
            this.FPS = FPS;
            this.FPC = FPC;
            this.itemAmounts = itemAmounts;
    }
}

function createSaveFile(
    faith: number, 
    FPS: number,
    FPC: number,
    itemAmounts: {[name:string]: number}
    ) {
        return new SaveFile(faith, FPS, FPC, itemAmounts);
    }

function loadSave(
    save: SaveFile, 
    faithTools: ManipulateFaith
    ) {
    faithTools.setFaith((faith) => save.faith)
    faithTools.setFPS((FPS) => save.FPS)
    faithTools.setFPC((FPC) => save.FPC)
    for (var itemName in save.itemAmounts) {
        const currItem = items.allItemsDict[itemName];
        currItem.numberOwned = save.itemAmounts[itemName];
    }
    return [save.faith, save.FPS, save.FPC]
}

export { createSaveFile, SaveFile, loadSave };