import React, { useEffect, useState, ChangeEvent } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState, AppDispatch } from './store';
import { fetchUsers } from "./store/userSlice";
import CustomTable from './components/table/table';
import CustomInput from './components/input/input';

const MyApp: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [search, setSearch] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className='wrapper'>
      <CustomInput search={search} onChange={handleSearchChange} />
      <CustomTable users={users} search={search} />
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <MyApp />
  </Provider>
);

export default AppWrapper;
