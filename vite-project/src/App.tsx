import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageQuiz from "./component/pages/PageQuiz/PageQuiz";
import PageResultat from "./component/pages/PageResultat/PageResultat";
import { QuestionsContext } from "./shared/utils/context";
import { Question } from "./shared/models/questions";
import { PATH_HOME, PATH_RESULTAT } from "./shared/utils/path";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <div className="container mt-4">
      <QuestionsContext.Provider value={{ questions, setQuestions }}>
        <HashRouter>
          <Routes>
            <Route path={PATH_HOME} element={<PageQuiz />}></Route>
            <Route path={PATH_RESULTAT} element={<PageResultat />}></Route>
          </Routes>
        </HashRouter>
      </QuestionsContext.Provider>
    </div>
  );
}

export default App;
