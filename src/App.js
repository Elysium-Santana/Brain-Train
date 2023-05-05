import { useEffect, useState } from 'react';
import './App.css';
import Question from './Question';
import { quizQuestions } from './Questions';

function App() {
  const [filter, setFilter] = useState(null);
  const [NextIndexQuiz, setNextIndexQuiz] = useState(0);

  useEffect(() => {
    let quizfilter = quizQuestions.filter((item) => item.pontos > -1);
    setFilter([...quizfilter]);
  }, []);

  function restart() {
    setNextIndexQuiz(0);
    let quizfilter = quizQuestions.filter(
      (item) => item.pontos < 0 || item.repeat > 0,
    );
    setFilter([...quizfilter]);

    filter.length < 1 && setFilter(null);
  }

  return (
    <div className="App">
      <h1>Brain Train</h1>

      {filter &&
        filter.map(
          ({ question, options, correctAnswer, pontos, id, repeat }, index) =>
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
                restart={restart}
                filter={filter}
                id={id}
                repeat={repeat}
              />
            ),
        )}
      <button
        onClick={() =>
          NextIndexQuiz < filter.length - 1
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
