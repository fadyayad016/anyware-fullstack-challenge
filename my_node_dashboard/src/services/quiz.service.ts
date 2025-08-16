import { injectable } from 'tsyringe';
import QuizModel from '../models/quiz.model';

interface IQuiz {
  type: string;
  title: string;
  course: string;
  topic: string;
  date: string;
}

@injectable()
export class QuizService {
  async getAll() {
    return QuizModel.find();
  }

  async create(data: IQuiz) {
    const newQuiz = new QuizModel(data);
    return newQuiz.save();
  }

  async update(id: string, data: Partial<IQuiz>) {
    return QuizModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return QuizModel.findByIdAndDelete(id);
  }
}