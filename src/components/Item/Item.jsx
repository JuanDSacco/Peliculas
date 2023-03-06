import '../../css/item.css'
import Card from '../Card/Card';

const Item = ({data}) => {
    return(
        <>
            <Card data={data}/>
            <button className='buttonItem'>Ver más</button>
        </>
    )
}

export default Item;