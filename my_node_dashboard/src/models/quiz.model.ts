import { Schema, model } from 'mongoose';

const quizSchema = new Schema({
  type: { type: String, required: true }, 
  title: { type: String, required: true },
  course: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: String, required: true },
}, {
  timestamps: true,
});

const QuizModel = model('Quiz', quizSchema);

export default QuizModel;