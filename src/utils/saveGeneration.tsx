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
    churchName: string;

    constructor(
        faith: number, 
        FPS: number,
        FPC: number,
        itemAmounts: {[name:string]: number},
        churchName: string
        ) {
            this.faith = faith;
            this.FPS = FPS;
            this.FPC = FPC;
            this.itemAmounts = itemAmounts;
            this.churchName = churchName;
    }
}

/** Returns a save file object with a number of faith, faith per second,
 * faith per click, and given number of items amounts generated with the 
 * generateItemAmounts functon in items.tsx. */
function createSaveFile(
    faith: number, 
    FPS: number,
    FPC: number,
    itemAmounts: {[name:string]: number},
    churchName: string
    ) {
        return new SaveFile(faith, FPS, FPC, itemAmounts, churchName);
    }

/** Loads a save file, using the tools in ManipulateFaith to set all
 * necessary values, and sets the items to have the correct value
 * of amount owned.
 */
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