import { useState } from "react";
import Table from "../Components/Table";
import { userColumns, userRows } from "../data";
import "./styles/Users.scss";
import Modal from "../Components/Modal";

function Users() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Users">
      <div className="title">
        <h1 className="">Users</h1>
        <button onClick={() => setIsOpen(true)}>Add New User</button>
      </div>
      <div className="table">
        <Table userRows={userRows} userColumns={userColumns} />
      </div>
      {isOpen && <Modal slug="Users" columns={userColumns} setIsOpen = {setIsOpen} />}
    </div>
  );
}

export default Users;
