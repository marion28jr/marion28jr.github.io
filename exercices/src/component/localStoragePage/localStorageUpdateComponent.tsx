import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import useLocalStorage from "../../shared/service/useLocalStorage";

interface LocalStorageUpdateComponentPrpos {
  keyName: string;
}

/**
 * Ce composat permet de mettre à jour la valeur de la 'key' dans le LocalStorage
 */
const LocalStorageUpdateComponent: FC<LocalStorageUpdateComponentPrpos> = ({
  keyName,
}: LocalStorageUpdateComponentPrpos) => {
  const { updateStorage } = useLocalStorage(keyName);
  const [valueKey, setValueKey] = useState<string>();

  /**
   * Permet de sousmettre la formulaire qui met à jour dans le LocalStorage
   * @param event l'event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (valueKey) {
      updateStorage(valueKey);
    }
  };

  /**
   * Permet de changer la valeur de l'input
   * @param event l'event
   */
  const onChangeValueKey = (event: ChangeEvent<HTMLInputElement>): void => {
    setValueKey(event.target.value);
  };

  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">
          Component to update the key value {`'${keyName}'`}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              {`Value of the key '${keyName}':`}
            </label>
            <input
              value={valueKey ?? ""}
              onChange={onChangeValueKey}
              type="text"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update value
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocalStorageUpdateComponent;
