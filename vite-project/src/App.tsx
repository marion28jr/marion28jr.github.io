import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageQuiz from "./component/pages/PageQuiz/PageQuiz";
import PageResultat from "./component/pages/PageResultat/PageResultat";
import { QuestionsContext } from "./shared/utils/context";
import { Question } from "./shared/models/questions";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PageQuiz />}></Route>
          <Route path="/resultat" element={<PageResultat />}></Route>
        </Routes>
      </HashRouter>
    </QuestionsContext.Provider>
  );
}

export default App;
