import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState, AppDispatch } from './store/index.tsx';
import { fetchUsers } from "./store/userSlice.tsx";
import { IUser } from './types/index.ts';

const MyApp: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {users && users.map((user: IUser, index: number) => (
        <div key={index}>{user.name}</div>
      ))}
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <MyApp />
  </Provider>
);

export default AppWrapper;
