import React, { useEffect, useState } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UserTable from "./components/UserTable";
import axios from "axios";
import { UserType2 } from "./@types/user";

function App() {
  const [users, setUsers] = useState<UserType2[] | null>(null);
  const [usersData, setUsersData] = useState<UserType2[] | null | undefined>(
    null
  );
  // const keywordRef = useRef<HTMLInputElement>(null);

  const keywordChanged = (e: any) => {
    const keyword: string = e.target.value.toLowerCase();

    const userArray = users?.filter((user) => {
      const fn: string = user.firstName.toLowerCase();
      const ln: string = user.lastName.toLowerCase();
      const un: string = user.username.toLowerCase();
      const ph: string = user.phone.toLowerCase().trim().replaceAll(" ", "");
      const em: string = user.email.toLowerCase();

      return (
        fn.includes(keyword) ||
        ln.includes(keyword) ||
        un.includes(keyword) ||
        ph.includes(keyword) ||
        em.includes(keyword)
      );
    });
    setUsersData(userArray);
  };

  useEffect(() => {
    const baseURL = "https://dummyjson.com/users";
    const getData = async () => {
      const response = await axios.get(baseURL);

      console.log(response.data.users);
      setUsers(response.data.users);
      setUsersData(response.data.users);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header text-center">
        <h1 className="">Search and Sort User list</h1>
        <div className="mt-4 mx-5 d-flex flex-column align-items-center  pb-2 ">
          <Form>
            {/* <Form.Label className="">Enter the keyword</Form.Label> */}
            <Form.Control
              type="text"
              style={{ width: "50vw" }}
              className="text-center"
              placeholder="type here what do you want search"
              // ref={keywordRef}
              onChange={(e) => keywordChanged(e)}
            />
          </Form>
          <div>
            <Button className="px-4 py-1 m-2 mt-3 mx-3">Sort by name</Button>
            <Button className="px-4 py-1 m-2 mt-3 mx-3">Sort by ID</Button>
          </div>
        </div>
      </header>
      <main>
        <UserTable users={usersData} />
      </main>
    </div>
  );
}

export default App;
