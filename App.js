import React, { useState } from 'react';
import './App.css';


const Quiz = () => {

  const [showAnswers, setShowAnswers] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
 //const  [selectedOptionIndex] = useState();


  const ShowAnswers = () => {
  const arr = [];
  const allchecked = [];
  let correctCount = 0;

  let form = document.getElementsByClassName('input');
  questions.map((question, index) => {
    for (let i = 0; i < form.length; i++) {
      if (form[i].checked === true) {
        allchecked.push(form[i].value)
        if (form[i].value === question.correctAnswer) {
          arr.push((form[i].value));
        }
      }
    }           
  });


  // questions.forEach((question, index) => {
  //   const selectedOptionIndex = parseInt(selectedOptionIndex[index], 10);

  //   if (!isNaN(selectedOptionIndex)) {
  //     const isCorrect = selectedOptionIndex === question.correctIndex;
  //     selectedAnswers.push({
  //       question: question.question,
  //       selectedAnswer: question.options[selectedOptionIndex],
  //       correctAnswer: question.correctAnswer,
  //       isCorrect: isCorrect
  //     });
  //   }
  // });

  const correctAnswers = [];
  arr.forEach((selectedAnswer, index) => {
    if (selectedAnswer === questions[index].correctAnswer) {
      correctAnswers.push(selectedAnswer);
    }
  });
  let correctcount = 1;
  setCount(correctcount * arr.length);
  console.log('Selected answers:', arr);
  console.log('Correct answers:', correctAnswers);
  console.log(allchecked);
  setShowAnswers(true);
};

  console.log('Total correct count:', count);

  const questions = [
    {
      question: 'What country has the highest life expectancy?',
      options: ['Rome', 'Hongkong', 'UAE', 'Singapore'],
      correctAnswer: 'Hongkong'
    },
    {
      question: 'Where would you be if you were standing on the Spanish Steps?',
      options: ['Rome', 'Hongkong', 'Brazil', 'Singapore'],
      correctAnswer: 'Rome'
    },
    {
      question: ' Which language has the more native speakers: English or Spanish?',
      options: ['English', 'Spinach', 'Both', 'None'],
      correctAnswer: 'Spinach'
    },
    {
      question: 'What is the most common surname in the United States?',
      options: ['Janes', 'Robert', 'James', 'Smith'],
      correctAnswer: 'Smith'
    },
    {
      question: 'What disease commonly spread on pirate ships?',
      options: ['Cancer', 'Malaria', 'Scurvy', 'Sinosys'],
      correctAnswer: 'Scurvy'
    },
    {
      question: ' Who was the Ancient Greek God of the Sun?',
      options: ['Capricon', 'Scorpion', 'Apollo', 'Leo'],
      correctAnswer: 'Apollo'
    },
    {
      question: ' What was the name of the crime boss who was head of the feared Chicago Outfit?',
      options: ['Al Capone', 'Al Golusab', 'Al Sandse', 'Al Ajmara'],
      correctAnswer: 'Al Capone'
    },
    {
      question: 'What year was the United Nations established?',
      options: ['1930', '1989', '1987', '1945'],
      correctAnswer: '1945'
    },
    {
      question: 'Who has won the most total Academy Awards?',
      options: ['Hogwarts', 'Walt Disney', 'Siztpra', 'St. Frances'],
      correctAnswer: 'Walt Disney'
    },
    {
      question: ' What artist has the most streams on Spotify?',
      options: ['Duke', 'Thomas', 'Silaomena', 'Drake '],
      correctAnswer: 'Drake '
    },
  ];


  const handleShowAnswers = () => {
    const selectedAnswers = [];

    const form = document.getElementsByClassName('input');
    for (let i = 0; i < form.length; i++) {
      if (form[i].checked) {
        const questionIndex = parseInt(form[i].name.replace('q', ''), 10);
        const selectedOptionIndex = parseInt(form[i].value, 10);
        selectedAnswers[questionIndex] = questions[questionIndex].options[selectedOptionIndex];
      }
    }

    let correctCount = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correctAnswer) {
        correctCount++;
      }
    }

    setCount(correctCount);
    setShowAnswers(true);
  };

  const checkAnswer = (questionIndex, selectedOptionIndex) => {
    // if (selectedOptionIndex === questions[questionIndex].correctAnswer) {
    //   return 'green'; 
    //   } else if (selectedOptionIndex !== questions[questionIndex].correctAnswer){
    //  return 'red';
    // }
    // else {
    //    return 'grey';
    // }
  };
  return (
    <div>
    <h1 className='head'>QUIZ COMPETITION</h1>
    {questions.map((question, index) => (
    <div key={index}>
    <p>
    <b>{`Q${index + 1}: ${question.question}`}</b>
    </p>
    {question.options.map((option, optionIndex) => (
    <div key={optionIndex}>
    <input
    value={option}
    type='radio'
    name={`q${index}`}
    className='input'
    />
    <label
    htmlFor={`q${index}-option${optionIndex}`}
    style={{ color: showAnswers ? checkAnswer(index, optionIndex) : 'black' }}>
    {option}
       </label>
     </div>
     ))}
         <br />
       </div>
     ))}

     <button className='submit' onClick={ShowAnswers} disabled={submitted}>
        SUBMIT
      </button>


      {showAnswers && (
        <div className='ans-Section'>
          <p>
            <b>Total Correct Answers Out of 10 is :</b> {count}
          </p>

          <div className='new'>
            <h3>Correct Answers</h3>
            {questions.map((question, index) => (
              <p style={{ color: 'green' }}>
                <b>{`Q${index + 1}: ${question.correctAnswer}`}</b>
              </p>
            ))}
          </div>

          <div className='new'>
            <h3>Selected Answer</h3>
            {selectedAnswers.map((answer, index) => (
              <p>
                <b>{`Q${index + 1}: ${answer.selectedAnswer}`}</b>
              </p>
            ))}
          </div>
        </div>
      
      )}
    </div>
  );
};

export default Quiz;
