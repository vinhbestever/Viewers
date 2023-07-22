import React, { useEffect, useState } from 'react';
import './UserManager.css';
import MonaiLabelClient from '../../../../../monai-label/src/services/MonaiLabelClient';
const UserManager = () => {
  // Danh sách người dùng mẫu để hiển thị
  const client = new MonaiLabelClient('http://127.0.0.1:8000');
  const [users, setUsers] = useState([]);

  // Xóa người dùng khỏi danh sách
  const handleDeleteUser = async id => {
    await client.delete_user(id);
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  const fetchUsers = async () => {
    const response = await client.list_users();

    if (response.status === 200) setUsers(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
    // if (res) setUsers(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 style={{ color: '#fff' }}>User Management</h2>
      <table id="customers">
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Edit</th>
        </tr>
        {users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.full_name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    handleDeleteUser(user.id);
                  }}
                >
                  Delete{' '}
                </a>
                |
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    handleDeleteUser(user.id);
                  }}
                >
                  {' '}
                  Edit
                </a>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UserManager;
