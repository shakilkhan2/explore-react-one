import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
          <h2>User: {users.length}</h2>
          {
              users.map(user => {
                  console.log(user.name);
                 return <li>{user.name}</li>
              })
          }
    </>
  );
}
