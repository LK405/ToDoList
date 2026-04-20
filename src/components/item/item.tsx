import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
 
function Item() {
  return (
    <Card  >
       
      <Card.Body>
        <Card.Title>Meta 1</Card.Title>
        <Card.Text className = "fw-bold">
          Descripcion
        </Card.Text>
        <Card.Text >
          Descripcion 1
        </Card.Text>
        <Card.Text className = "fw-bold">
          Fecha de vencimiento
        </Card.Text>
        <Card.Text >
          15/05/26
        </Card.Text>
        
      </Card.Body>
      <Card.Body>
       <Button variant="light">Light</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;