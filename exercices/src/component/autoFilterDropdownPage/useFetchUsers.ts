import { useEffect, useState } from "react";
import { handleFetchResponse } from "../../shared/utils/fetch";
import type { User } from "../../shared/modal/user";

/**
 * Hook pour récupérer la liste des utilisateurs
 */
const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(handleFetchResponse)
      .then((data: User[]) => {
        setUsers(data);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  return { users };
};

export default useFetchUsers;
