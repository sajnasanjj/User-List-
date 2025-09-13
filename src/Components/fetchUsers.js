import axios from "axios";


export const fetchUsers = async () => {
  const response = await axios ("https://jsonplaceholder.typicode.com/users");
    console.log(response.data, "=userData response");

  return response.data;
};

