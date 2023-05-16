import { Link } from "react-router-dom";

function Nav() {
  return (
    <div style={{display: "flex", gap: 8, position:"sticky", padding: 10}}>
      <Link to={"/home"}>Home</Link>
      <Link to={"/notice"}>Notice</Link>
      <Link to={"/profile"}>Profile</Link>
    </div>
  );
}

export default Nav;
