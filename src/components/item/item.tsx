import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

import type { task } from '../../store/taskStore' ;
import type { goal } from '../../store/goalStore';
 
import { useTaskStore } from '../../store/taskStore';
import { useGoalStore } from '../../store/goalStore';
import { useMenuStore } from '../../store/menuStore';

 
 
const { removeTask } = useTaskStore.getState();
const { removeGoal } = useGoalStore.getState();


function Item(props:task | goal) {
  const isActiveInMenu = useMenuStore((state) => state.menu.active);

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isActiveInMenu === 'tasks') {
      removeTask(props as task);
    } else {
      removeGoal(props as goal);
    }
  }



  return (
    <Card   >
       
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className = "fw-bold">
          Descripcion
        </Card.Text>
        <Card.Text >
          {props.description}
        </Card.Text>
        <Card.Text className = "fw-bold">
          Fecha de vencimiento
        </Card.Text>
        <Card.Text >
          {props.dueDate}
        </Card.Text>
        
      </Card.Body>
      <Card.Body>
       <Button variant='light' onClick={(e)=>handleRemove(e)}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;