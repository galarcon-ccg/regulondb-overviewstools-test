import React from "react";
import { DropDown } from "./ui-components/ui_components";

export default function Acordion({ id, nameGroup = "", graphics = [] }) {
  return (
    <div>
      <DropDown
        label={nameGroup}
        id={id}
        isDisplay={true}
        styleButton={{ width: "100%" }}
        styleBox={{ position: "inherit", background: "white" }}
      >
        {graphics.map((graphic) => {
          return (
            <div key={graphic.id} style={{ paddingLeft: "2%" }}>
              <a
                href={`/overviews/${graphic.id}`}
                id={graphic.id}
                style={{ width: "100%" }}
              >
                {graphic.title}
              </a>
            </div>
          );
        })}
      </DropDown>
    </div>
  );
}
