/**
 * Add your actions here
 */
const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const AddAuthor = () => {
  return {
    type: ADD_AUTHOR
  };
};

export const DeleteAuthor = authorID => {
  return {
    type: DELETE_AUTHOR,
    payload: authorID
  };
};
