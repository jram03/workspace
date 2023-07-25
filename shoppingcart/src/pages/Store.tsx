import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'
import {Row,Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
export function Store(){
    const params = useParams();
    console.log(params.category)
    const items = storeItems.filter(i => i.category === params.category)
    return((params.category === undefined)?<>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map(item=>(
            <Col key={item.id}><StoreItem {...item} /></Col>
        ))}
        
    </Row>
    </>:<>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className='g-3'>
        {items.map(item=>(
            <Col key={item.id}><StoreItem {...item} /></Col>
        ))}
        
    </Row>
    </>)
}