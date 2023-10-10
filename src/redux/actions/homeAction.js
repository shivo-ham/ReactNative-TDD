import * as types from "../actionType";
import database from "@react-native-firebase/database";
export const getUsers = () => {
  return (dispatch) => {
    try {
      dispatch(userInit());
      database()
        .ref("/user")
        .once("value")
        .then((snapshot) => {
          dispatch(userSuccess(snapshot.val()));
        });
    } catch (error) {
      dispatch(userInit());
    }
  };
};

export const getCategories = () => {
  return (dispatch) => {
    try {
      database()
        .ref("/categories")
        .once("value")
        .then((snapshot) => {
          dispatch(setCategories(snapshot.val()));
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const userInit = (data) => {
  return { type: types.USER_DATA, data };
};
export const userSuccess = (data) => {
  return { type: types.USER_DATA_SUCCESS, data };
};

export const setCategories = (data) => {
  return { type: types.CATEGORIE_DATA_SUCCESS, data };
};
