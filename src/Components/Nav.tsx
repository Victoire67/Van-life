import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="flex place-content-between p-4 bg-[#FFF7ED]">
      <Link to={"/"} className="font-bold text-3xl">
        {" "}
        #NavLife
      </Link>
      <ul className="flex place-content-between gap-4">
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/vans"}>Vans</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
