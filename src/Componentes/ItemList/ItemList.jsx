import items from '../Assets/AllData'

import Items from '../Items/Items'
import  {useState} from 'react';
import Button from '../Categorias/Button';

const allCategories = ['All',  ...new Set(items.map(item =>item.category))];
console.log(allCategories)


function ItemList() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) =>{
    if (button === 'All'){
      setMenuItem(items);
      return;
    }
    const filterData = items.filter(item => item.category === button);
    setMenuItem(filterData)
  }
  return (
    <div className="App">
      <div className="title">
        <h1>Portfolio
          <span>Filter</span>
        </h1>
        
      </div>
      <Button button={buttons} filter={filter}/>
      <Items menuItem= {menuItem}/>
    </div>
  );
}

export default ItemList;
