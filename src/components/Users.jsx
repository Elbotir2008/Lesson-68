import axios from "axios";
import React, { useEffect } from "react";

const Users = () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetchUsers();
  });
  async function fetchUsers() {
    try {
      let res = await axios.get(url);
      let data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return <div>Users</div>;
};

export default Users;
