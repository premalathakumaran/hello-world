///tsx , ts, jsx, js

import { useEffect, useState } from "react";
interface User {
  name: string;
  email: string;
  website: string;
}
const UserTable = () => {
  console.log("im from user table");

  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("user", data);
    setUserList(data);
  };
  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "cadetblue",
      }}
    >
      <div>
        <h2>HTML Table </h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Website</th>
          </tr>

          {userList.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UserTable;
