import React, { FC } from "react";
import { Table } from "react-bootstrap";
import { UserType2, UserTableProps2 } from "../@types/user";

const UserTable: FC<UserTableProps2> = (props) => {
  const { users } = props;
  return (
    <>
      <div className="mt-2 mx-5" style={{ height: "70vh", overflow: "scroll" }}>
        <Table striped bordered hover>
          <thead>
            <tr className="py-3">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <div>{users?.map((ele) => ele.name)}</div> */}
    </>
  );
};

export default UserTable;
