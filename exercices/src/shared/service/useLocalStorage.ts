import { useCallback, useEffect, useState } from "react";

/**
 * Ce hook permet de faire la gestion du localStorage
 * @param key la clé du localStorage
 * @returns
 * - value : la valeur de la clé
 * - updateStorage : la fonction de mise à jour de la clé
 */
const useLocalStorage = (key: string) => {
  /**
   * La valeur de la key
   */
  const [value, setValue] = useState(() => {
    return window.localStorage.getItem(key) ?? "";
  });

  /**
   * Permet de mettre à jour la valeur dans le hook
   */
  const updateValue = useCallback(() => {
    setValue(window.localStorage.getItem(key) ?? "");
  }, [key]);

  /**
   * Permet de mettre à jour la valeur dans le localStorage
   * @param newValue la nouvelle valaur
   */
  const updateStorage = useCallback(
    (newValue: string) => {
      localStorage.setItem(key, newValue);
      window.dispatchEvent(new Event("storage"));
    },
    [key]
  );

  const removeKey = () => {
    window.localStorage.removeItem(key);
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    window.addEventListener("storage", updateValue);
    return () => {
      window.removeEventListener("storage", updateValue);
    };
  }, [updateValue]);

  return { value, updateStorage, removeKey };
};

export default useLocalStorage;
