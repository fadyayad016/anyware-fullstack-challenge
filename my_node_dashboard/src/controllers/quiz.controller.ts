import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { QuizService } from '../services/quiz.service';

export class QuizController {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const quizService = container.resolve(QuizService);
      const quizzes = await quizService.getAll();
      res.json(quizzes);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const quizService = container.resolve(QuizService);
      const newQuiz = await quizService.create(req.body);
      res.status(201).json(newQuiz);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const quizService = container.resolve(QuizService);
      const updatedQuiz = await quizService.update(req.params.id, req.body);
      res.json(updatedQuiz);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const quizService = container.resolve(QuizService);
      await quizService.delete(req.params.id);
      res.json({ message: 'Quiz deleted successfully.' });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}