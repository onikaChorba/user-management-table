import { setUsers } from "./userSlice";
import { Dispatch } from "redux";
import { IUser } from "../types";

export const fetchUsers = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: IUser[] = await response.json();
    dispatch(setUsers(data));
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
};
