// Helpers
import { getBGColor } from './helpers';

type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  onClick: (answer: string, currentQuestionIndex: number) => void;
};

const QuestionCard: React.FC<Props> = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  onClick,
  correctAnswer
}) => {
  return (
    <div>
      <p className='text-[20px] max-w-[400px]' dangerouslySetInnerHTML={{ __html: question }} />
      <div className='flex flex-col items-center'>
        {answers.map(answer => (
          <div
            key={answer}
            onClick={() => onClick(answer, currentQuestionIndex)}
            className={`${getBGColor(
              userAnswer,
              correctAnswer,
              answer
            )} cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full my-2 rounded-[15px] 
            active:bg-gray-300 active:delay-0 hover:scale-105 transition duration-300 delay-100`}
          >
            <span className='truncate' dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
