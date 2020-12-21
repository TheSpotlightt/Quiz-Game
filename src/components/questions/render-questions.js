import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { 
    Title, 
    Button, 
    Wrapper, 
    Select, 
    Option, 
    Paragraph, 
    AnswerButton, 
    FinishButton,
    QuestionsWrapper,
    Header
} from './styles';

export default function RenderQuestions (props) {
    const [questions, getQuestions] = useState([]);
    const questionsArray = [questions];
    const categoryID = props.categoryID;

    const [option, getOptions] = useState([]);

    const [start, setStart] = useState(false);
    const [finishGame, setFinishGame] = useState(false);

    let itemsArray = localStorage.getItem('value') ? JSON.parse(localStorage.getItem('value')) : [];    
    localStorage.setItem('value', JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem('value'));

    useEffect(() => {
        (
        async () => {
            await axios.get(`https://opentdb.com/api.php?amount=15&category=${categoryID}&difficulty=${option}&type=multiple`)
            .then(data => data.data)
            .then(res => {
            getQuestions(res)
            })
            .catch(err => console.log(err))
        }
        )()
    }, [categoryID, option])

    const getOptionValue = (e) => {
        let value = Array.from(e.target.selectedOptions, options => options.value);
        getOptions(value);
    }

    const startGame = () => {
        setStart(true)
    }

    const endGame = () => {
        setFinishGame(true)
        setTimeout(() => {
            localStorage.clear('value')
        }, 2000);
    }
    
    const getCorrectAnswer = (e) => {
        itemsArray.push(e);
        localStorage.setItem('value', JSON.stringify(itemsArray));
    }

    const finishedGame = () => {
        if(finishGame) {
            return (
                <>
                    <Paragraph> You answered {data.length} right questions </Paragraph>
                    <Link to='/'>
                        <Button onClick={() => localStorage.clear('value')}> Back Home </Button>
                    </Link>
                </>
            )
        } else {
            return (
                <div>
                    {questionsArray.map((index, key) => (
                        <div key={key}>
                            <Header>
                                <Link to='/'>
                                    <button onClick={() => localStorage.clear('value')} >Exit</button>
                                </Link>
                                <Title> {index.results[0].category} </Title>
                            </Header>
                            {
                                index.results && (
                                index.results.map((result, key )=> (
                                    <QuestionsWrapper key={key}>
                                        <Paragraph>
                                            {result.question}
                                        </Paragraph>
                                            <AnswerButton onClick={(e) => getCorrectAnswer(e.target.value)} value={result.correct_answer}> {result.correct_answer} </AnswerButton>
                                        {
                                            result.incorrect_answers.map((res, key) => (
                                                <div key={key}>
                                                    <AnswerButton value={res}> {res} </AnswerButton>
                                                </div>
                                            ))
                                        }
                                    </QuestionsWrapper>
                                ))
                                )
                            }
                        </div>
                    ))}
                    <FinishButton onClick={endGame}>Finish</FinishButton> 
                </div>
            )
        }
    }

    
    const gameFunction = () => {
        if(start) {
            return (
                <div>
                    {finishedGame()}
                </div>
            )
        } else {
            return (
                <div>
                    <Title>Select Difficulty</Title>
                    <Wrapper>
                        <Select onChange={getOptionValue}>
                            <Option value=''>Choose</Option>
                            <Option value='easy'>Easy</Option>
                            <Option value='medium'>Medium</Option>
                            <Option value='hard'>Hard</Option>
                        </Select>
                        <Button onClick={startGame}>Start</Button>
                    </Wrapper>
                </div>
            )
        }
    }

    return (
        <div>
            {gameFunction()}
        </div>
    )
}