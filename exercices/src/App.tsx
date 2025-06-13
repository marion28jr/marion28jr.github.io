import { useState, type FC, type JSX } from "react";
import LocalStoragePage from "./component/localStoragePage/localStoragePage";
import DialogPage from "./component/dialogPage/dialogPage";
import AutoFilterDropdownPage from "./component/autoFilterDropdownPage/autoFilterDropdownPage";

interface Tab {
  key: string;
  title: string;
  contents: JSX.Element;
}

const exercisesTab: Tab[] = [
  { key: "1", title: "Exercise 1", contents: <LocalStoragePage /> },
  { key: "2", title: "Exercise 2", contents: <DialogPage /> },
  { key: "3", title: "Exercise 3", contents: <AutoFilterDropdownPage /> },
];

const App: FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("1");

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">React Level 3 Certification Exam</h1>
        </div>
        <div className="col-12 mt-4">
          <nav>
            <div className="nav nav-tabs" role="tablist">
              {exercisesTab.map((exerciseTab: Tab) => (
                <button
                  key={exerciseTab.key}
                  className={`nav-link ${
                    currentTab === exerciseTab.key ? "active" : ""
                  }`}
                  id={`nav-ex${exerciseTab.key}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-ex${exerciseTab.key}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-ex${exerciseTab.key}`}
                  aria-selected={currentTab === exerciseTab.key}
                  onClick={(): void => {
                    setCurrentTab(exerciseTab.key);
                  }}
                >
                  {exerciseTab.title}
                </button>
              ))}
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            {exercisesTab.map((exerciseTab: Tab) => (
              <div
                key={exerciseTab.key}
                className={`tab-pane fade ${
                  currentTab === exerciseTab.key ? "show active" : ""
                } mt-2`}
                id={`nav-ex${exerciseTab.key}`}
                role="tabpanel"
                aria-labelledby={`nav-ex${exerciseTab.key}-tab`}
              >
                {exerciseTab.contents}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
