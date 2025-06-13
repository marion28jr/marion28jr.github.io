import type { FC } from "react";
import LocalStorageUpdateComponent from "./localStorageUpdateComponent";
import LocalStorageGetComponent from "./localStorageGetComponent";
import LocalStorageRemoveComponent from "./localStorageRemoveComponent";

/**
 * Ce composant permet d'afficher l'exercice 1
 */
const LocalStoragePage: FC = () => {
  const name = "name";
  const age = "age";
  return (
    <div className="mt-4">
      <h3>
        EXERCISE #1 - Create a generic localStorage handler usable by React
        function component
      </h3>
      <div className="my-4">
        <h4 className="mb-3">
          Update the key '{name}' in the React application
        </h4>
        <div className="row align-self-stretch">
          <div className="col-4">
            <LocalStorageGetComponent keyName={name} />
          </div>
          <div className="col-4">
            <LocalStorageUpdateComponent keyName={name} />
          </div>
          <div className="col-4">
            <LocalStorageRemoveComponent keyName={name} />
          </div>
        </div>
      </div>
      <div className="mt-6 mb-4">
        <h4 className="mb-3">
          Update the key '{age}' outside the React application
        </h4>
        <LocalStorageGetComponent keyName={age} />
      </div>
    </div>
  );
};

export default LocalStoragePage;
