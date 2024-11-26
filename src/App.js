import React, { useState } from "react";
import Layout from "./components/Layout";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";

const App = () => {
  const [page, setPage] = useState("users");
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState(["Admin", "User"]);

  return (
    <Layout setPage={setPage}>
      {page === "users" ? (
        <UserManagement users={users} setUsers={setUsers} roles={roles} />
      ) : (
        <RoleManagement roles={roles} setRoles={setRoles} />
      )}
    </Layout>
  );
};

export default App;
