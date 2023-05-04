import { useState } from 'react';
import './App.css';
import Question from './Question';
import { quizQuestions } from './Questions';

function App() {
  // const [acertos, setAcertos] = useState(null);
  const [NextIndexQuiz, setNextIndexQuiz] = useState(0);

  return (
    <div className="App">
      <h1>Brain Train</h1>

      {quizQuestions.map(
        ({ question, options, correctAnswer, pontos }, index) =>
          index === NextIndexQuiz && (
            <Question
              key={index}
              question={question}
              options={options}
              correctAnswer={correctAnswer}
              pontos={pontos}
              index={index}
              setNextIndexQuiz={setNextIndexQuiz}
              NextIndexQuiz={NextIndexQuiz}
            />
          ),
      )}
      <button
        onClick={() =>
          NextIndexQuiz < quizQuestions.length - 1
            ? setNextIndexQuiz(NextIndexQuiz + 1)
            : setNextIndexQuiz(0)
        }
      >
        Próxima {NextIndexQuiz}
      </button>
    </div>
  );
}

export default App;
