import ManipulateFaith from './ManipulateFaith'

/** Items are represented through a singleton object which holds information about
 * the name of the object, its description, a cost multiplier, the base cost, a way
 * to calculate the current cost, an image for the object, the number owned, and its
 * behavior on click. These items are accessed through the instantiated objects in the
 * arrays and dictionaries below.
 */

/** Describes a class for an item. Other items inherit from this class. */
abstract class ItemClass {
    itemName = "";
    description = "";
    multiplier = 1.05;
    baseCost = 0;
    currCost = () => this.baseCost * this.multiplier ** this.numberOwned;
    img = "";
    numberOwned = 0;
    onClick = (faithTools: ManipulateFaith) => {
        if (faithTools.faith >= this.currCost()) {
            faithTools.setFaith(faith => faith - this.currCost())
            this.numberOwned += 1;
            this.effect(faithTools);
        }
    }
    effect = (faithTools: ManipulateFaith) => {};
  }

  
class Pointer extends ItemClass{
    itemName = "Pointer";
    description = "The basic item. Gives you Faith equal to one click"
    + " and increases FPS by 1. For every 25 bought, Faith per click doubles."
    baseCost = 10;
    img = ""
    effect = (faithTools: ManipulateFaith) => {
        faithTools.setFaith(faith => faith + faithTools.FPC);
        faithTools.setFPS(FPS => FPS + 1);
        if (this.numberOwned % 25 === 0) {
            faithTools.setFPC((FPC) => FPC * 2);
        }
    }
}

class Deacon extends ItemClass{
    itemName = "Deacon";
    description = "Make a new deacon friend. Adds 10 faith per deacon. "
    + "At 100 deacons, multiply current faith by 10."
    baseCost = 300;
    img = ""
    effect = (faithTools: ManipulateFaith) => {
        faithTools.setFaith(faith => faith + faithTools.FPC);
        faithTools.setFPS(FPS => FPS + 10);
        if (this.numberOwned === 100) {
            faithTools.setFaith((faith) => faith * 10);
        }
    }
}

/** Helper functions for item classes. */

/** Generates a dictionary of item names and the corresponding amounts.
 * Used in save generation. */
function generateItemAmounts() {
    function generateItemAmountsFromArray(allItemsArray: ItemClass[]) {
        let itemAmountsDict: {[name:string]: number} = {};
        allItemsArray.forEach((item) => {
            itemAmountsDict[item.itemName] = item.numberOwned;
        })
        console.log(itemAmountsDict)
        return itemAmountsDict;
    }
    return generateItemAmountsFromArray(allItemsArray);
}

/** An array of all instantiated item objects. Used for iterating through
 *  all objects and generally accessing the instantiated objects. */
const allItemsArray: ItemClass[] = [new Pointer(), new Deacon()];

/** A dictionary mapping item names to the corresponding object
 * represented an item. Used to link together object names to the object
 * to create a link between corresponding objects persistently.
 */
let allItemsDict: {[name:string]: ItemClass} = {};

allItemsArray.forEach((item) => {
    allItemsDict[item.itemName] = item;
})

export {allItemsArray, allItemsDict, ItemClass, generateItemAmounts}
  