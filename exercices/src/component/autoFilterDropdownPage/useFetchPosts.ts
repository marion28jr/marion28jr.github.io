import { useState } from "react";
import type { Post } from "../../shared/modal/user";
import { handleFetchResponse } from "../../shared/utils/fetch";

/**
 * Hook pour récupérer la liste des messages d'un utilisateur
 */
const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  /**
   * Permet de récupérer la liste des message d'un utilisateur
   * @param id l'id de l'utilisateur
   */
  const fetchPostsByUser = (id: string): void => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(handleFetchResponse)
      .then((data: Post[]) => {
        setPosts(data);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  };

  return { posts, setPosts, fetchPostsByUser };
};

export default useFetchPosts;
