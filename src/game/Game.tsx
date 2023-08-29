import React from "react";
import AppBar from "../components/appbar/AppBar";
import GameComponent from '../components/gameComponents/GameComponent'
import { shuffleArray } from '../utils/arrayUtils';
import { Question } from "../types/quiz";

const getQuestions = () => {
    const data = {
        response_code: 0,
        results: [
            {
                question: '理財書籍怎麼挑選?',
                correct_answer: '適合自己的',
                incorrect_answers: ['名氣大的', '我又沒時間看書']
            },
            {
                question: '關於投資，正確的是?',
                correct_answer: '建立賠錢心理準備',
                incorrect_answers: ['小額嘗試', '就是買股票']
            },
            {
                question: '關於退休，正確的是?',
                correct_answer: '了解需求，全面規劃',
                incorrect_answers: ['只存ETF', '政府退休金']
            },
            {
                question: '有了小孩，怎麼理財?',
                correct_answer: '考慮到大學學費，適度省錢',
                incorrect_answers: ['什麼都用最好，小孩是寶', '靠政府的育兒津貼']
            },
            {
                question: '關於ETF，正確的是?',
                correct_answer: '要仔細檢視',
                incorrect_answers: ['安全零風險', '不會賠錢']
            }
        ]
    };
    console.log(data);

    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }));
};

const Game = () => {
    const questions = getQuestions();

    return (
        <div>
            <AppBar game={true}/>
        <div className="bg-[#B3D9D0] flex text-center justify-center items-center -mt-3">
            <GameComponent questions={questions} totalQuestions={5}/>
        </div>
        </div>
    )
}

export default Game