// import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChooseTheme from './Components/Pages/ChooseTheme';
import Home from './Components/Pages/Home';
// import { quizQuestions } from './Quenpxstions';

function App() {
  // const [quizFiltered, setFilter] = useState(null);
  // const [NextIndexQuiz, setNextIndexQuiz] = useState(0);

  // useEffect(() => {
  //   let filter = quizQuestions.filter((item) => item.poits > -1);
  //   setFilter([...filter]);
  // }, []);

  // function restart() {
  //   setNextIndexQuiz(0);
  //   let quizfilter = quizQuestions.filter(
  //     (item) => item.poits < 0 || item.repeat > 0,
  //   );
  //   setFilter([...quizfilter]);

  //   quizFiltered.length < 1 && setFilter(null);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChooseTheme/:type/*" element={<ChooseTheme />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//   return (
//     <div className="App">
//       <h1>Brain Train</h1>

//       {quizFiltered &&
//         quizFiltered.map(
//           ({ question, options, correctAnswer, poits, id, repeat }, index) =>
//             index === NextIndexQuiz && (
//               <Question
//                 key={index}
//                 question={question}
//                 options={options}
//                 correctAnswer={correctAnswer}
//                 poits={poits}
//                 index={index}
//                 setNextIndexQuiz={setNextIndexQuiz}
//                 NextIndexQuiz={NextIndexQuiz}
//                 restart={restart}
//                 quizFiltered={quizFiltered}
//                 id={id}
//                 repeat={repeat}
//               />
//             ),
//         )}
//       <button
//         onClick={() =>
//           NextIndexQuiz < quizFiltered.length - 1
//             ? setNextIndexQuiz(NextIndexQuiz + 1)
//             : setNextIndexQuiz(0)
//         }
//       >
//         Próxima {NextIndexQuiz}
//       </button>
//     </div>
//   );
// }

// export default App;
