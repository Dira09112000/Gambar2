import Body from "../componen/Body";
import SideBarKanan from "../componen/SideBarKanan";
import { ChakraProvider } from "@chakra-ui/react";
import Sidenav from "../componen/SideBarKiri";
const Dashboard = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Sidenav />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            paddingLeft: "300px",
          }}
        >
          <ChakraProvider>
            <div>
              <Body />
            </div>
          </ChakraProvider>
        </div>
        <div>
          <ChakraProvider>
            <SideBarKanan />
          </ChakraProvider>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
