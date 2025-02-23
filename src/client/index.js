import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 注水（因为服务器生成的没有事件，是干瘪的），hydrateRoot只会生成虚拟DOM。
ReactDOM.hydrateRoot(document.getElementById("root"), <App />)