// import { useState } from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import { fetchUsers } from "./Components/fetchUsers";
import Userlist from "./Components/Userlist";

function App() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    (async () => {
      const userDetails = await fetchUsers();
      console.log(userDetails, "=userDetails");
      setUserList(userDetails);
    })();
  },[]);

  return (
    <>
      <div>
        <Userlist userList={userList} setUserList={setUserList} />
      </div>
    </>
  );
}

export default App;
