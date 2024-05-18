import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ResponsibilityItem({ item }) {
  const pieceId = uuidv4();

  return <li>{item}</li>;
}

export default ResponsibilityItem;
