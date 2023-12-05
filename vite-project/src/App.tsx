import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageQuiz from "./feature/pages/PageQuiz/PageQuiz";
import PageResultat from "./feature/pages/PageResultat/PageResultat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageQuiz />}></Route>
        <Route path="/resultat" element={<PageResultat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
