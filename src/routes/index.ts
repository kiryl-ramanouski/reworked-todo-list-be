import { Router } from 'express';
import { getTodos, addTodo, editTodo, updateTodo, deleteTodo } from '../controllers/todos';

const router: Router = Router();

router.get('/todos', getTodos);

router.post('/add-todo', addTodo);

router.put('/update-todo/:id', updateTodo);

router.put('/edit-todo/:id', editTodo);

router.delete('/delete-todo/:id', deleteTodo);

export default router;
