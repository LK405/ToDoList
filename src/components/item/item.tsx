import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import { useMenuStore } from '../../store/menuStore';
import { useTaskStore } from '../../store/taskStore';
import { useGoalStore } from '../../store/goalStore';

type ItemProps = {
    _id: string;
    name: string;
    description: string;
    duedate: string;
};

function Item({ _id, name, description, duedate }: ItemProps) {
    const isActiveInMenu = useMenuStore((state) => state.menu.active);
    const removeTask = useTaskStore((state) => state.removeTask);
    const removeGoal = useGoalStore((state) => state.removeGoal);

    const handleDelete = async () => {
        if (isActiveInMenu === 'tasks') {
            await removeTask({ _id, name, description, duedate });
        } else {
            await removeGoal({ _id, name, description, duedate });
        }
    };

    const formatDate = (dateStr: string) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString('es-GT', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            timeZone: 'UTC'
        });
    };

    return (
        <Card className="mb-3 item-card p-3">
            <Card.Body>
                <Card.Title className="text-center fw-bold">{name}</Card.Title>
                <div className="text-center my-2">
                    <span className="text-muted small d-block">Descripción</span>
                    <Card.Text>{description}</Card.Text>
                </div>
                <div className="text-center my-2">
                    <span className="text-muted small d-block">Fecha de vencimiento</span>
                    <Card.Text>{formatDate(duedate)}</Card.Text>
                </div>
                <div className="text-center mt-3">
                    <Button variant="danger" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Item;