import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
      {/* <a href="/dashboard">Go to Dashboard</a> */}
    </>
  );
}
