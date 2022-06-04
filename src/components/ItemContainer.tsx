import ManipulateFaith from '../utils/ManipulateFaith';
import '../styles/Items.css';
import * as items from '../utils/items';
import { useState } from 'react';

/** Contains all item components. */
function ItemContainer({faithTools}: {faithTools: ManipulateFaith}) {
    return (
      <div className="Item-Container">
        {items.allItemsArray.map(item => 
          <Item key="{item}" item={item} faithTools={faithTools}/>
        )}
      </div>
    )
  }
  
  /** Component for an Item, such as a Pointer */
  function Item({item, faithTools}:
                {item: items.ItemClass, faithTools: ManipulateFaith}) {
    const [display, setDisplay] = useState(false)
    return (
      <div>
        <div
            className="Item"
            onClick={() => item.onClick(faithTools)}
            onMouseEnter={() => setDisplay(true)}
            onMouseLeave={() => setDisplay(false)}
        >
            {item.itemName + " " + Math.floor(item.currCost())}
        </div>
        <ItemDescription item={item} display={display}/>
      </div>
    );
  }

  function ItemDescription({item, display}:
    {item: items.ItemClass, display: boolean}) {
      if (!display) {
        return <></>
    }
    return (
      <div>Description</div>
    )
  }
export default ItemContainer;