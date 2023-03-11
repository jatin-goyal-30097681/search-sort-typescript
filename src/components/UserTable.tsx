import React, { FC } from "react";
import { UserType, UserTableProps } from "../@types/user";

const UserTable: FC<UserTableProps> = (props) => {
  const { users } = props;
  return <div>{users?.map((ele) => ele.name)}</div>;
};

export default UserTable;
