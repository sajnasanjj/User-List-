import React from "react";
import "./Userlist.css";

function Userlist({ userList, setUserList }) {
  const handleDelete = async (userId) => {
    const updatedList = await userList.filter((data) => data.id !== userId);
    console.log(updatedList, "=delete");
    setUserList(updatedList);
  };

  const refreshPage = () => {
    window.location.reload()
  }
  return (
    <div>
      {userList.length > 0 ? (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((data) => (
            <tr key={data.id}>
              <th> {data.name}</th>
              <th>{data.username}</th>
              <th>{data.website}</th>
              <th>
                {" "}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
        ):(
          <button type="button" onClick={refreshPage}>
          Refresh the Page
          </button>
      )
      }
    </div>
  );
}

export default Userlist;
