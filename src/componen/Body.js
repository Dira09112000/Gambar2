import "../css/Body.css";
import { FcSearch } from "react-icons/fc";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdExpandMore, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { BsShop } from "react-icons/bs";
import { FaOptinMonster } from "react-icons/fa";
import { MdOutlineLocalPolice } from "react-icons/md";
import React from "react";
import Revenue from "./grafik/Revenue";
import Taskdone from "./grafik/Taskdone";
import Visitors from "./grafik/Visitors";
import { borderRadius } from "@mui/system";

const Body = () => {
  return (
    <div className="all">
      <div className="container-body">
        {/* HEADER */}
        <header>
          <div>
            <div style={{ fontWeight: "bold", fontSize: "30px" }}>
              Dashboard
            </div>
            <div style={{ color: "#8C96AD" }}>Hello Cuong, Wellcome back</div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ paddingRight: "15px" }}>
              <FcSearch />
            </div>
            <div style={{ color: "#9EA8BB" }}>
              <form>
                <label>
                  <input
                    type="text"
                    placeholder="Search anything...."
                    style={{ borderStyle: "none" }}
                  />
                </label>
              </form>
            </div>
          </div>
        </header>

        {/* SECTION 1 */}
        <div className="body">
          <div className="card1-sesi1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 20px 0px 20px",
              }}
            >
              <div>Revenue</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#F6EFFF",
                  width: "70px",
                  height: "25px",
                  borderRadius: "10px",
                  color: "#9786DF",
                }}
              >
                <div
                  style={{
                    borderRadius: "90px 90px 90px 90px",
                    width: "20px",
                    height: "20px",
                    background: "purple",
                    color: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <MdExpandMore />
                </div>
                +0.8%
              </div>
              <div className="week">this week</div>
              <div className="week">Last Week</div>
            </div>
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <Revenue />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                paddingRight: "20px",
                fontFamily: "formula",
              }}
            >
              <div style={{ display: "flex" }}>
                <div className="kotak-kecil"></div>
                <div style={{ paddingLeft: "5px" }}>New</div>
              </div>
              <div style={{ display: "flex", paddingLeft: "10px" }}>
                <div className="kotak-kecil"></div>
                <div style={{ paddingLeft: "5px" }}>Overdue</div>
              </div>
            </div>
          </div>

          <div style={{ justifyContent: "space-evenly" }}>
            <div
              className="card2-sesi1"
              style={{
                background: "#F6FFFF",
              }}
            >
              <div style={{ padding: "20px" }}>
                <div>
                  <Taskdone />
                </div>
                <div>85%</div>
                <div>Task done</div>
              </div>
            </div>
            <br />
            <div
              className="card2-sesi1"
              style={{
                background: "#FFF3DF",
              }}
            >
              <div style={{ padding: "20px" }}>
                <div>
                  <Taskdone />
                </div>
                <div>58%</div>
                <div>Team activities</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="body">
          <div>
            <div className="card1-sesi2">
              <div style={{ padding: "20px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: "30px" }}>Visitors</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#FFF4F2",
                        width: "70px",
                        borderRadius: "20px",
                        color: "#FA8B8B",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "90px 90px 90px 90px",
                          width: "20px",
                          height: "20px",
                          background: "orange",
                          color: "white",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <MdExpandMore />
                      </div>
                      -0,7%
                    </div>
                  </div>
                  <div>
                    <FiMoreHorizontal />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingTop: "5px",
                  }}
                >
                  <div style={{ paddingRight: "10px" }}>This Week</div>
                  <div>
                    <MdExpandMore />
                  </div>
                </div>
                <div style={{ paddingBottom: "100px" }}>
                  <Visitors />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    borderRadius: "10px",
                    background: "#F6EFFF",
                  }}
                >
                  <div style={{ paddingLeft: "10px" }}>
                    <FcInfo />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ color: "purple", paddingRight: "5px" }}>
                      26%
                    </div>
                    <div>New visitors from USA</div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="card3-sesi2">
              <div style={{ padding: "20px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: "30px" }}>Income</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#F6EFFF",
                        width: "70px",
                        borderRadius: "20px",
                        color: "purple",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "90px 90px 90px 90px",
                          width: "20px",
                          height: "20px",
                          background: "purple",
                          color: "white",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <MdOutlineKeyboardArrowUp />
                      </div>
                      <div>-0,7%</div>
                    </div>
                  </div>
                  <div>
                    <MdExpandMore />
                  </div>
                </div>
                <div>
                  <Revenue />
                </div>
              </div>
            </div>
          </div>
          <div className="card2-sesi2">
            <div style={{ padding: "20px", fontSize: "12px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "20px",
                }}
              >
                <div>Featured Projects</div>
                <div>
                  <FiMoreHorizontal />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "blue",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <BsShop />
                </div>
                <div>
                  <div>Auto Insurance</div>
                  <div>24,140 Projects</div>
                </div>
                <div>Marketing</div>
                <div>$450.0</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "purple",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <FaOptinMonster />
                </div>
                <div>
                  <div>DKP Finance Projects</div>
                  <div>24,140 Projects</div>
                </div>
                <div>Finance</div>
                <div>$610.0</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "orange",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <MdOutlineLocalPolice />
                </div>
                <div>
                  <div>ADQ Marketing Projects</div>
                  <div>500+ Projects</div>
                </div>
                <div>Finance</div>
                <div>$450.0</div>
              </div>
              <div style={{ paddingTop: "100px" }}>
                <div
                  style={{
                    width: "400px",
                    height: "200px",
                    background: "purple",
                    borderRadius: "20px",
                  }}
                >
                  <div style={{ padding: "20px", color: "white" }}>
                    <h3>Discover all projects</h3>
                    <div style={{ paddingBottom: "30px" }}>
                      Make more money with Maxoo
                    </div>
                    <div
                      style={{
                        width: "200px",
                        height: "40px",
                        background: "white",
                        color: "purple",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "20px",
                        display: "flex",
                        cursor: "default",
                      }}
                    >
                      Show all projects
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
        </div>
      </div>
    </div>
  );
};

export default Body;
