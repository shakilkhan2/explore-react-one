import { useEffect, useState } from "react";
import './User.css'

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); 4
  return (
    <>
          <h2>User: {users.length}</h2>
          {
              users.map(user => {
                  console.log(user.name);
                return (
                  <div className="user">
                    <h4>Name:{user.name}</h4>
                    <p>Email:{user.email}</p>
                  </div>
                );
              })
          }
    </>
  );
}
