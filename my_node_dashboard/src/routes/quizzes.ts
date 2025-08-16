import { Router } from 'express';
import { QuizController } from '../controllers/quiz.controller';

const router = Router();
const quizController = new QuizController();

router.get('/', (req, res) => quizController.getAll(req, res));
router.post('/', (req, res) => quizController.create(req, res));
router.put('/:id', (req, res) => quizController.update(req, res));
router.delete('/:id', (req, res) => quizController.delete(req, res));

export default router;