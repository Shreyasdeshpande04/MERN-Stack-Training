import React, { useEffect, useState } from 'react';
import { getAllUsers } from './Applayout/getAllUsers';

function Home() {
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      console.log('Users from API:', res.data); // Debug API response
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Dynamic Users Table
      </h1>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '600px',
          }}
        >
          <thead style={{ backgroundColor: '#f0f0f0' }}>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Username</th>
              <th style={thStyle}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user._id} // Use MongoDB _id as key
                  style={{
                    borderBottom: '1px solid #ccc',
                    textAlign: 'left',
                  }}
                >
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>{user.username || 'N/A'}</td>
                  <td style={tdStyle}>{user.phone || 'N/A'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '10px' }}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: '10px',
  borderBottom: '2px solid #ccc',
  textAlign: 'left',
};

const tdStyle = {
  padding: '10px',
};

export default Home;
