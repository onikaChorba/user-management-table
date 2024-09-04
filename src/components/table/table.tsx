import './table.styles.scss'
import { IUser } from '../../types';

export default function CustomTable({ users, search }: { users: IUser[], search: string }) {
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
              <td className="table__row"> {user.username}</td>
              <td className="table__row"> {user.email}</td>
              <td className="table__row"> {user.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
