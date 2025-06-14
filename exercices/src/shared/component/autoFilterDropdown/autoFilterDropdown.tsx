import { useMemo, useRef, useState, type ChangeEvent } from "react";
import "./autoFilterDropdown.css";

interface AutoFilterDropdownProps<T extends object> {
  /**
   * Les options de la liste déroulante
   */
  options: T[];
  /**
   * La propriété de l'objet à afficher dans la liste déroulante
   */
  optionLabel: keyof T;
  /**
   * La propriété de l'objet pour id
   */
  optionId: keyof T;
  /**
   * Le placeholder de l'input de saisi
   */
  placeholder?: string;
  /**
   * Permet de mettre à jour la valeur sélectionnée dans le composant parent
   */
  valueChange: (value: T) => void;
  /**
   * le nom de l'input
   */
  name: string;
}

/**
 * Ce composant permet de faire une liste déroulante avec de l'auto-compression
 */
const AutoFilterDropdown = <T extends object>(
  props: AutoFilterDropdownProps<T>
) => {
  const { options, optionLabel, optionId, placeholder, valueChange, name } =
    props;
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>();

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Filtre les options en fonction de la saisie
   */
  const autoFilterOptions = useMemo<T[]>(
    () =>
      options.filter((option: T) =>
        new RegExp(valueInput ?? "", "i").test(option[optionLabel] as string)
      ),
    [valueInput, options, optionLabel]
  );

  /**
   * Changer la valeur de l'input de saisi
   * @param event l'event
   */
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValueInput(event.target.value);
  };

  /**
   * Permet de séléctionner une option
   * @param event l'event
   * @param option l'option
   */
  const onClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    option: T
  ): void => {
    event.preventDefault();
    valueChange(option);
    setValueInput(option[optionLabel] as string);
    setShowOptions(false);
  };

  return (
    <div>
      <input
        ref={inputRef}
        id={name}
        name={name}
        className="form-control autoFilterDropdown-input"
        value={valueInput ?? ""}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={(): void => {
          setShowOptions(true);
        }}
      />
      {showOptions && (
        <div
          className="autoFilterDropdown-container"
          style={{ width: inputRef.current?.getBoundingClientRect().width }}
        >
          {autoFilterOptions.map((option: T) => (
            <button
              key={option[optionId] as string}
              className="autoFilterDropdown-option py-1"
              style={{ width: inputRef.current?.getBoundingClientRect().width }}
              onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
                onClick(event, option);
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: (option[optionLabel] as string).replace(
                    new RegExp(valueInput ?? "", "gi"),
                    (value: string) => `<strong>${value}</strong>`
                  ),
                }}
              />
            </button>
          ))}
        </div>
      )}
      {autoFilterOptions.length === 0 && showOptions && (
        <div className="autoFilterDropdown-option">No datas</div>
      )}
    </div>
  );
};

export default AutoFilterDropdown;
