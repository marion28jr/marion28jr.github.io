import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageQuiz from "./feature/pages/PageQuiz/PageQuiz";
import PageResultat from "./feature/pages/PageResultat/PageResultat";
import { useState } from "react";
import { QuestionsContext } from "./utils/context";
import { Question } from "./utils/datas";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageQuiz />}></Route>
          <Route path="/resultat" element={<PageResultat />}></Route>
        </Routes>
      </BrowserRouter>
    </QuestionsContext.Provider>
  );
}

export default App;
