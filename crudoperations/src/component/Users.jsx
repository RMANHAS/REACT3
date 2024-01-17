import React, { useEffect } from "react";
import Layouts from "./layout/Layouts";
import axios from "axios";
import { deleteUser, getUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  async function getData() {
    try {
      const { data } = await axios.get(`http://localhost:3030/users`);
      console.log(data);
      dispatch(getUser(data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    
    getData();
    
  },[]);
  //getData()

  //delete function

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3030/users/${id}`);
      dispatch(deleteUser());
    } catch (error) {}
  }

  return (
    <Layouts>
      <table className="table table-border">
        <thead>
          <tr>
            <th scope="col">s.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">city</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            const { id, name, city, email } = user;
            return (
              <>
                <tr key={id}>
                  <th>{i += 1}</th>
                  <th>{name}</th>
                  <th>{email}</th>
                  <th>{city}</th>
                  <td>
                    <Link className="btn btn-success mx-3" to={`/update/${id}`}>
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        window.confirm("are you sure ?") && handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </Layouts>
  );
}

export default Users;
