import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DrinkListItem = (props) => {
    const { drink } = props;
    return(
            <Col sm='3'>
            <Card body className='text-center'>
                <img src={drink.strDrinkThumb} width='250px' alt='a cocktail'/>
                <h3>{drink.strDrink}</h3>
                <Link to={`/drinks/${drink.idDrink}`} className='view'>
                    <Button>View Details</Button>
                </Link>
            </Card>
            </Col>
        
    ) 
}
export default DrinkListItem;