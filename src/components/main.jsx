import React, { useState } from "react";
import "./main.css";
import { Sidebar } from "./Sidebar";
import { Mid } from "./Mid";
import { Card } from "./Card";
import { Img } from "./Img";
import { Linea } from "./Linea";
import { Lineb } from "./Lineb";
import { Linec } from "./Linec";
import { Outer1 } from "./Outer1";
import {Outer2}from "./Outer2";
import {Outer3}from "./Outer3";

export const Main = () => {
  const [type, setType] = useState("light");
  return (
    <>
      <Mid type={type}>
        <Sidebar type={type} >
          <img id="pai"  src="https://www.iconpacks.net/icons/1/free-icon-chart-671.png"/>
          <img id="seting" src="https://www.iconpacks.net/icons/2/free-icon-settings-5850.png"/>
          <img id="copy" src="https://img.icons8.com/color/2x/copy.png"/>
        </Sidebar>
        <h2 style={{ "margin-left": "-50%", color: "rgb(222,128,87)" }}>
          My Dashboard{" "}
        </h2>
        <label class="switch">
          <input
            onClick={() => {
              setType(type === "light" ? "dark" : "light");
            }}
            type="checkbox"
          />
          <span class="slider round"></span>
        </label>
        <Card type={type}>
          <span style={{ "margin-left": "-50%", color: "rgb(222,128,87)" }}>
            Active user
          </span>
          <span
            style={{
              margin: "10px",
              "margin-right": "-50%",
              color: "rgb(222,128,87)",
            }}
          >
            May 2022
          </span>
          <div className="section">
            <Img>
              <img
                style={{ width: "100%" }}
                src="https://freesvg.org/img/1649146996pirate-with-a-sword.png"
              />
              <span style={{ color: "rgb(222,128,87)" }}>Nrupul bengaluru</span>
            </Img>
          </div>
          <Outer1>
            <Linea />
          </Outer1>
          <div className="section">
            <Img>
              <img
                style={{ width: "100%" }}
                src="https://freesvg.org/img/1649146996pirate-with-a-sword.png"
              />
              <span style={{ color: "rgb(222,128,87)" }}>
                Nikesh Darjeeling
              </span>
            </Img>
          </div>
          <Outer2>
            <Lineb />
          </Outer2>
          <div className="section">
            <Img>
              <img
                style={{ width: "100%" }}
                src="https://freesvg.org/img/1649146996pirate-with-a-sword.png"
              />
              <span style={{ color: "rgb(222,128,87)" }}>Bhaichang Nepal</span>
            </Img>
          </div>
          <Outer3>
            <Linec />
          </Outer3>
        </Card>
      </Mid>
    </>
  );
};
