import * as types from "../actionType";

const initialSettings = {
  userList: [],
  categoriesList: [],
  loading: true,
  error: null
};
const homeReducer = (state = initialSettings, action) => {
  switch (action.type) {
    case types.USER_DATA:
      return {
        ...state,
        loading: true
      };
    case types.USER_DATA_SUCCESS:
      return {
        ...state,
        userList: action.data,
        loading: false
      };
    case types.CATEGORIE_DATA_SUCCESS:
      return {
        ...state,
        categoriesList: action.data
      };
  }
  return state;
};
export default homeReducer;
