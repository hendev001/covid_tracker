import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";
function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setUsers(users);
    console.log(res);
  };
  useEffect(() => {
    //console.log(url);
    fetchUsers();
  }, []);
  return (
    <>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}></a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;
