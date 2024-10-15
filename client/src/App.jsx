import "./App.css";
import { useState, useEffect } from "react";

const { VITE_API_URL: API_URL } = import.meta.env;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) {
          throw new Error("Data fetching error");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
        alert("An error occured");
      }
    }
    loadUsers();
  }, []);

  return (
    <>
      <h1>Fullstack Demo</h1>
      <h2>
        Showing data from <code>{API_URL}</code>
      </h2>
      <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            {name} | {email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
