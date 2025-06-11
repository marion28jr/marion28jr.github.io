import { useState, type FC } from "react";
import useFetchUsers from "./useFetchUsers";
import useFetchPosts from "./useFetchPosts";
import type { Post, User } from "../../shared/service/modal/user";
import AutoFilterDropdown from "../../shared/component/autoFilterDropdown/autoFilterDropdown";

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
   * Permet de mettre à jour l'utilisateur selectionné dans la liste
   * @param user l'utilisateur
   */
  const userChange = (user?: User) => {
    setCurrantUser(user);
    setCurrantPost(undefined);
    if (user) {
      fetchPostsByUser(user.id);
    }
  };

  /**
   * Permet de mettre à jour le message selectionné dans la liste
   * @param user le message
   */
  const postChange = (post?: Post) => {
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
              <label htmlFor="user" className="form-label">
                User
              </label>
              <AutoFilterDropdown
                options={users}
                valueChange={userChange}
                optionLabel="name"
                optionId="id"
                placeholder="Enter user name"
              />
            </div>
            {currantUser !== undefined && (
              <div className="mb-3">
                <label htmlFor="post" className="form-label">
                  Post
                </label>
                <AutoFilterDropdown
                  options={posts}
                  reset={currantPost === undefined}
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
              The user selects is <strong>{currantUser?.name}</strong>
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
