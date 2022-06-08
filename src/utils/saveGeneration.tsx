import * as items from '../utils/items';
import ManipulateFaith from './ManipulateFaith';

/** An individual save. Holds a faith value, FPS, FPC, and the
 * total amount of items.
 */
 class SaveFile {
    faithTools: ManipulateFaith;
    itemAmounts: {[name:string]: number};
    

    constructor(
        faithTools: ManipulateFaith,
        itemAmounts: {[name:string]: number},
        ) {
            this.faithTools = faithTools;
            this.itemAmounts = itemAmounts;
            
    }
}

/** Returns a save file object with a number of faith, faith per second,
 * faith per click, and given number of items amounts generated with the 
 * generateItemAmounts functon in items.tsx. */
function createSaveFile(
    faithTools: ManipulateFaith,
    itemAmounts: {[name:string]: number},
    ) {
        return new SaveFile(faithTools, itemAmounts);
    }

/** Loads a save file, using the tools in ManipulateFaith to set all
 * necessary values, and sets the items to have the correct value
 * of amount owned.
 */
function loadSave(
    save: SaveFile, 
    faithTools: ManipulateFaith
    ) {
    faithTools.setFaith((faith) => save.faithTools.faith)
    faithTools.setFPS((FPS) => save.faithTools.FPS)
    faithTools.setFPC((FPC) => save.faithTools.FPC)
    faithTools.setChurchName((churchName) => save.faithTools.churchName)

    for (var itemName in save.itemAmounts) {
        const currItem = items.allItemsDict[itemName];
        currItem.numberOwned = save.itemAmounts[itemName];
    }
    return [save.faithTools.faith, save.faithTools.FPS, save.faithTools.FPC, save.faithTools.churchName]
}

export { createSaveFile, SaveFile, loadSave };