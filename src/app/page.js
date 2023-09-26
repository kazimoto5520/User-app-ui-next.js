import Navbar from "../../components/Navbar";
import Head from "next/head";
import UserList from "../../components/UserList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>User Management System</title>
      </Head>

      <Navbar />

      <main>
        <UserList />
      </main>
    </div>
  );
}
