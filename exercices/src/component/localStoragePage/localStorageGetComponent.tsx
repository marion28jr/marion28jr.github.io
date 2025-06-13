import { type FC } from "react";
import useLocalStorage from "../../shared/service/useLocalStorage";

interface LocalStorageGetComponentPrpos {
  keyName: string;
}

/**
 * Ce composent permet d'afficher la valeur de la 'key' dans le LocalStorage
 */
const LocalStorageGetComponent: FC<LocalStorageGetComponentPrpos> = ({
  keyName,
}: LocalStorageGetComponentPrpos) => {
  const { value } = useLocalStorage(keyName);

  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">
          Component to get the key value '{keyName}'
        </h5>
        <p>
          {value === "" ? (
            <>The key value '{keyName}' is not defined</>
          ) : (
            <>
              The key value '{keyName}' is <strong>{value}</strong>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LocalStorageGetComponent;
