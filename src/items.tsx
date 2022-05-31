import {ManipulateFaith} from "./App";

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
            console.log("doubled" + faithTools.FPC)
        }
    }
}

const allItems: ItemClass[] = [new Pointer()];

export {allItems, ItemClass}
  