import { ITodo } from './../types/todo';
import { model, Schema } from 'mongoose';

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema);

// minlength и maxlength: задают минимальную и максимальную длину для строк
// match: строка должна соответствовать регулярному выражению
