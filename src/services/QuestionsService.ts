import { prompt, QuestionCollection } from "inquirer";

interface IMakeQuestions {
  questions: QuestionCollection[];
}

export class QuestionService {
  async make({ questions }: IMakeQuestions) {
    return await prompt(questions);
  }
}
