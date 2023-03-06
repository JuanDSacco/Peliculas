import '../../css/itemList.css'
import Item from '../Item/Item';

const ItemList = ({data}) => {
    return(
        <div className='containerItemList'>
            <Item data={data}/>
        </div>
    )
}

export default ItemList;