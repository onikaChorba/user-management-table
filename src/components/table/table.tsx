import React from 'react';
import './table.styles.scss'
import { IUsers } from '../../types';

export default function CustomTable({ users }: IUsers) {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th className="table__column">Name</th>
          <th className="table__column">User name</th>
          <th className="table__column"> Email</th>
          <th className="table__column"> Phone Number</th>
        </tr>
        {users && users
          .map((user, index) => (
            <tr key={index}>
              <td className="table__row">{user.name}</td>
              <td className="table__row"> {user.username}</td>
              <td className="table__row"> {user.email}</td>
              <td className="table__row"> {user.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
