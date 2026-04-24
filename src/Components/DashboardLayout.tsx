import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNavigation";
function DashboardLayout() {
  return (
    <>
      <DashboardNav />
      <Outlet />
    </>
  );
}
export default DashboardLayout;
