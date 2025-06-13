import { useState, type FC } from "react";
import useFetchUsers from "./useFetchUsers";
import useFetchPosts from "./useFetchPosts";
import type { Post, User } from "../../shared/modal/user";
import AutoFilterDropdown from "../../shared/component/autoFilterDropdown/autoFilterDropdown";

/**
 * Ce composant permet d'afficher l'exercice 3
 */
const AutoFilterDropdownPage: FC = () => {
  /**
   * Récupérer la liste des utilisateurs
   */
  const { users } = useFetchUsers();
  /**
   * Récupérer la liste des message d'un utilisateur
   */
  const { posts, fetchPostsByUser } = useFetchPosts();
  /**
   * L'utilisateur sélectionné
   */
  const [currantUser, setCurrantUser] = useState<User>();
  /**
   * Le message sélectionné
   */
  const [currantPost, setCurrantPost] = useState<Post>();

  /**
   * Permet de mettre à jour l'utilisateur selectionné
   * @param user l'utilisateur
   */
  const userChange = (user: User): void => {
    setCurrantUser(user);
    setCurrantPost(undefined);
    if (user) {
      fetchPostsByUser(user.id);
    }
  };

  /**
   * Permet de mettre à jour le message selectionné
   * @param user le message
   */
  const postChange = (post: Post): void => {
    setCurrantPost(post);
  };

  return (
    <div className="mt-4">
      <h3>
        EXERCISE #3 - Create a generic auto-filter dropdown component to filter
        any kind of data
      </h3>
      <div className="row align-self-stretch pt-4">
        <div className="col-6">
          <h4>Select a user and a post</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="user-input" className="form-label">
                User
              </label>
              <AutoFilterDropdown
                name="user-input"
                options={users}
                valueChange={userChange}
                optionLabel="name"
                optionId="id"
                placeholder="Enter user name"
              />
            </div>
            {currantUser !== undefined && (
              <div className="mb-3">
                <label htmlFor="post-input" className="form-label">
                  Post
                </label>
                <AutoFilterDropdown
                  name="post-input"
                  key={currantUser.id}
                  options={posts}
                  valueChange={postChange}
                  optionLabel="title"
                  optionId="id"
                  placeholder="Enter title name"
                />
              </div>
            )}
          </form>
        </div>

        {currantUser && currantPost && (
          <div className="col-6">
            <h4>Resultat</h4>
            <p>
              The user selects is <strong>{currantUser.name}</strong>
            </p>
            <span>
              Post :
              <ul>
                <li>Title : {currantPost.title}</li>
                <li>Body : {currantPost.body}</li>
              </ul>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoFilterDropdownPage;
