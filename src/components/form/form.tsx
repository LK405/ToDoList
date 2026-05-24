import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.scss';
import { useMenuStore } from '../../store/menuStore';
import { useTaskStore } from '../../store/taskStore';
import { useGoalStore } from '../../store/goalStore';

type FormTaskAndGoalProps = {
    onAdd?: () => void;
};

function FormTaskAndGoal({ onAdd }: FormTaskAndGoalProps) {
    const isActiveInMenu = useMenuStore((state) => state.menu.active);
    const addTask = useTaskStore((state) => state.addTask);
    const addGoal = useGoalStore((state) => state.addGoal);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [duedate, setDuedate] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim() || !description.trim() || !duedate.trim()) {
            return;
        }

        const itemData = {
            name,
            description,
            duedate
        };

        if (isActiveInMenu === 'tasks') {
            await addTask(itemData as any);
        } else {
            await addGoal(itemData as any);
        }

        setName('');
        setDescription('');
        setDuedate('');

        if (onAdd) {
            onAdd();
        }
    };

    return (
        <div className='space form-margin'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label> 
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control 
                        type="date" 
                        value={duedate} 
                        onChange={(e) => setDuedate(e.target.value)} 
                    />
                </Form.Group>

                <Button type="submit" variant="light">
                    {isActiveInMenu === 'tasks' ? 'Add Task' : 'Add Goal'}
                </Button>
            </Form>
        </div>
    );
}

export default FormTaskAndGoal;