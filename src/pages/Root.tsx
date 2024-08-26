import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full h-[100lvh] p-12">
      <nav className="flex gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Root;
