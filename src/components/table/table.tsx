import React, { useState, useEffect } from 'react';
import './table.styles.scss';
import { IUser } from '../../types';

export default function CustomTable({ users, search }: { users: IUser[], search: string }) {

  const [tableData, setTableData] = useState<IUser[]>(users);

  useEffect(() => {
    setTableData(users);
  }, [users]);

  const [newRow, setNewRow] = useState<IUser>({
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const handleAddRow = () => {
    setTableData([...tableData, newRow]);
    setNewRow({
      id: Date.now(),
      name: '',
      username: '',
      email: '',
      phone: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <th className="table__column">Name</th>
            <th className="table__column">User name</th>
            <th className="table__column">Email</th>
            <th className="table__column">Phone Number</th>
          </tr>
          <tr className='table__row-line'>
            <td className="table__row">
              <input
                className="table__input"
                type="text"
                name="name"
                value={newRow.name}
                onChange={handleInputChange}
                placeholder="Enter name"
              />
            </td>
            <td className="table__row">
              <input
                className="table__input"
                type="text"
                name="username"
                value={newRow.username}
                onChange={handleInputChange}
                placeholder="Enter username"
              />
            </td>
            <td className="table__row">
              <input
                className="table__input"
                type="email"
                name="email"
                value={newRow.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </td>
            <td className="table__row">
              <input
                className="table__input"
                type="tel"
                name="phone"
                value={newRow.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="table__button-cell">
              <button className='button' onClick={handleAddRow}>Add Row +</button>
            </td>
          </tr>
          {tableData && tableData
            .filter((user) => {
              const lowerCaseSearch = search.toLowerCase();
              return (
                user.name.toLowerCase().includes(lowerCaseSearch) ||
                user.username.toLowerCase().includes(lowerCaseSearch) ||
                user.email.toLowerCase().includes(lowerCaseSearch) ||
                user.phone.toLowerCase().includes(lowerCaseSearch)
              );
            })
            .map((user, index) => (
              <tr key={index}>
                <td className="table__row">{user.name}</td>
                <td className="table__row">{user.username}</td>
                <td className="table__row">{user.email}</td>
                <td className="table__row">{user.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
