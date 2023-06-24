import React, { useState } from 'react';
import './UserManager.css';
const UserManager = () => {
  // Danh sách người dùng mẫu để hiển thị
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'user1',
      password: 'password1',
      email: 'user1@example.com',
      name: 'User 1',
    },
    {
      id: 2,
      username: 'user2',
      password: 'password2',
      email: 'user2@example.com',
      name: 'User 2',
    },
    // Thêm các người dùng khác tại đây
  ]);

  // Xóa người dùng khỏi danh sách
  const handleDeleteUser = id => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2 style={{ color: '#fff' }}>User Management</h2>
      <table id="customers">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Königlich Essen</td>
          <td>Philip Cramer</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon Crowther</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris spécialités</td>
          <td>Marie Bertrand</td>
          <td>France</td>
        </tr>
      </table>
    </div>
  );
};

export default UserManager;
