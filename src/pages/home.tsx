import Form from "@/components/Form.component";
import UserList from "@/components/UserList.component";
import { useState } from "react";
export default function Home() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <div className="bg-pink-200 min-h-screen w-screen flex flex-col items-center justify-center">
        <Form setUsers={setUsers} />
        <br />
        <UserList users={users} />
      </div>
    </>
  );
}
