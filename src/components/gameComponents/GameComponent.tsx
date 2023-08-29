import React, { useState } from "react";
// Components
import QuestionCard from '../questionCard/QuestionCard';
import Button from '../Button';
import Start from './Start'
// Types
import { QuestionsState } from '../../types/quiz';

import useWindowSize from '../../hook/useWindowSize';

type Props = {
    questions: QuestionsState;
    totalQuestions: number;
};

const GameComponent = ({ questions, totalQuestions }: Props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [rule, setRule] = useState(false);
    const [start, setStart] = useState(false);
    const [end, setEnd] = useState(false);
    const size = useWindowSize();

    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;


    const handleOnAnswerClick = (answer: string, currentQuestionIndex: number) => {
        // If user has already answered, do nothing
        if (isQuestionAnswered) return;
        // Check answer against correct answer
        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
        // Add score if answer is correct
        if (isCorrect) setScore(prev => prev + 5);
        // Save the answer in the object for user answers
        setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
    };

    const handleChangeQuestion = (step: number) => {
        const newQuestionIndex = currentQuestionIndex + step;
        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
        setCurrentQuestionIndex(newQuestionIndex);
    };
    console.log(size);

    return (
        <div className={`text-black max-w-[800px] container mx-auto ${end ? '' : 'h-[90vh]' }flex flex-col justify-center`}>
            {start && (
                <div className="bg-local flex flex-col text-center aspect-[756/1042] justify-end w-full "
                    style={{
                        backgroundImage: "url(/image/game/3_game.jpg)",
                        backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className={`text-white p-4`}>
                        <p className=' font-bold text-[20px]'>得分: {score}</p>
                        <p className=' font-bold text-[16px] pb-4'>
                            當前第 {currentQuestionIndex + 1} 題  共 {totalQuestions} 題
                        </p>
                        <div className="max-w-[50vw] mx-auto">
                        <QuestionCard
                            currentQuestionIndex={currentQuestionIndex}
                            question={questions[currentQuestionIndex].question}
                            answers={questions[currentQuestionIndex].answers}
                            userAnswer={userAnswers[currentQuestionIndex]}
                            correctAnswer={questions[currentQuestionIndex].correct_answer}
                            onClick={handleOnAnswerClick}
                        />
                        </div>
                        <div className='flex justify-center justify-even mt-5 gap-6'>
                            <Button text='上一題' onClick={() => handleChangeQuestion(-1)} />
                            <Button
                                text={currentQuestionIndex === totalQuestions - 1 ? '結束' : '下一題'}
                                onClick={currentQuestionIndex === totalQuestions - 1 ? () => {
                                    setEnd(true)
                                    setStart(false)
                                } : () => handleChangeQuestion(1)}
                            />
                        </div>
                    </div>
                </div>
            )
            }
            {
                !rule && (
                    <div className="bg-local flex flex-col text-center aspect-[756/1042] justify-end w-full "
                        style={{
                            backgroundImage: "url(/image/game/1_game.jpg)",
                            backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                        }}
                    >
                        <a href="/" className="absolute top-[30vw] right-[1vw] w-20">
                            <img src="/image/game/button/back_button.png"></img>
                        </a>
                        <div className="flex flex-col justify-end items-center max-w-[150px] mx-auto"
                            onClick={() => setRule(true)}
                        >
                            <img src='/image/game/button/rule_button.png' />
                        </div>
                    </div>
                )
            }
            {
                rule && !start && !end && (
                    <div className="bg-local flex flex-col text-center aspect-[756/1042] justify-end w-full "
                        style={{
                            backgroundImage: "url(/image/game/2_game.jpg)",
                            backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                        }}
                    >
                        <a href="/" className="absolute top-[30vw] right-[1vw] w-20">
                            <img src="/image/game/button/back_button.png"></img>
                        </a>
                        <div className="flex flex-col justify-end items-center max-w-[150px] mx-auto"
                            onClick={() => setStart(true)}
                        >
                            <img src='/image/game/button/start_button.png' />
                        </div>
                    </div>
                )
            }
            {
                end && (
                    <div className="bg-local flex flex-col text-center aspect-[756/2480] justify-end w-full "
                        style={{
                            backgroundImage: `url(/image/game/${score}.jpg)`,
                            backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                        }}
                    >
                        <a href="/" className="absolute top-[30vw] right-[1vw] w-20">
                            <img src="/image/game/button/back_button.png"></img>
                        </a>
                    </div>
                )
            }

        </div >
    );
};

export default GameComponent