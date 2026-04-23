import { NavLink } from "react-router-dom";

function DashboardNav() {
  return (
    <div className="flex gap-8 text-md px-4">
      <NavLink end className={({isActive})=> isActive ? "underline font-bold text-red-500" : ""} to="">Dashboard</NavLink>
      <NavLink className={({isActive})=> isActive ? "underline font-bold text-red-500" : ""} to="income">Income</NavLink>
      <NavLink className={({isActive})=> isActive ? "underline font-bold text-red-500" : ""} to="reviews">Reviews</NavLink>
    </div>
  );
}
export default DashboardNav;
