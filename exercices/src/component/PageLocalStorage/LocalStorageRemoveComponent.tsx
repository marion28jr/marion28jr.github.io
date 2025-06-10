import { type FC } from "react";
import useLocalStorage from "../../shared/service/useLocalStorage";

interface LocalStorageRemoveComponentPrpos {
  keyName: string;
}

/**
 * Ce composat permet de supprimer la 'key' dans le LocalStorage
 */
const LocalStorageRemoveComponent: FC<LocalStorageRemoveComponentPrpos> = ({
  keyName,
}: LocalStorageRemoveComponentPrpos) => {
  const { removeKey } = useLocalStorage(keyName);

  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">
          Component to remove the key {`'${keyName}'`}
        </h5>

        <button className="btn btn-primary" onClick={() => removeKey()}>
          Remove key
        </button>
      </div>
    </div>
  );
};

export default LocalStorageRemoveComponent;
