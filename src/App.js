import { useEffect, useState } from 'react';
import './App.css';
import Question from './Question';
import { quizQuestions } from './Questions';

function App() {
  const [filtro, setFiltro] = useState(null);
  const [NextIndexQuiz, setNextIndexQuiz] = useState(0);

  useEffect(() => {
    let filter = quizQuestions.filter((item) => item.pontos > -1);
    setFiltro([...filter]);
  }, []);

  function restart() {
    setNextIndexQuiz(0);
    let filter = quizQuestions.filter((item) => item.pontos < 0);
    setFiltro([...filter]);
    filtro.length < 1 && setFiltro(null);

    console.log(filtro);
  }

  return (
    <div className="App">
      <h1>Brain Train</h1>

      {filtro &&
        filtro.map(
          ({ question, options, correctAnswer, pontos, id }, index) =>
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
                filtro={filtro}
                id={id}
              />
            ),
        )}
      <button
        onClick={() =>
          NextIndexQuiz < filtro.length - 1
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
