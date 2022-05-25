import {ManipulateFaith} from "./App";

/** Describes a class for an item. Other items inherit from this class. */
abstract class ItemClass {
    itemName = ""
    static baseCost = 0;
    static multiplier = 1.05;
    static img = "";
    static numberOwned = 0;
    effect = (manipulate: ManipulateFaith) => {};
  }

class Pointer {
    itemName = "Pointer";
    effect(manipulate: ManipulateFaith) {
        manipulate.setFaith(manipulate.faith + 5);
        console.log("here")
    }
}

const allItems: ItemClass[] = [new Pointer()];

export {allItems, ItemClass}
  