import Body from "../componen/Body";
import SideBarKanan from "../componen/SideBarKanan";
function Dashboard() {
  return (
    <>
      <div style={{display:"flex", width:"100%",justifyContent:"space-between"}}>
        <div><Body /></div>
        <div><SideBarKanan/></div>
      </div>
    </>
  );
}

export default Dashboard;
