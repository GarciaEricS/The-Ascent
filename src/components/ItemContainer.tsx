import ManipulateFaith from '../utils/ManipulateFaith';
import '../styles/Item-Container.css';
import * as items from '../utils/items';

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
    return (
      <div>
        <button 
            className="Item-container"
            onClick={() => item.onClick(faithTools)}
        >
            {item.itemName + " " + item.currCost()}
        </button>
      </div>
    );
  }

export default ItemContainer;