import React, { useEffect, useState } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UserTable from "./components/UserTable";
import axios from "axios";
import { UserType } from "./@types/user";

function App() {
  const [users, setUsers] = useState<UserType[] | null>(null);

  useEffect(() => {
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    const getData = async () => {
      const response = await axios.get(baseURL);

      console.log(response.data);
      setUsers(response.data);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header text-center">
        <h1 className="">Search and Sort User list</h1>
        <div className="mt-4 mx-5 d-flex flex-column align-items-center border-bottom pb-2 ">
          <Form>
            {/* <Form.Label className="">Enter the keyword</Form.Label> */}
            <Form.Control
              type="text"
              style={{ width: "50vw" }}
              className="text-center"
              placeholder="type here what do you want search"
            />
          </Form>
          <div>
            <Button className="px-4 py-1 m-2 mt-3 mx-3">Sort by name</Button>
            <Button className="px-4 py-1 m-2 mt-3 mx-3">Sort by ID</Button>
          </div>
        </div>
      </header>
      <main>
        <UserTable users={users} />
      </main>
    </div>
  );
}

export default App;
