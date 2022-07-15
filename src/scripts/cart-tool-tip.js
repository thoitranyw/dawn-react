import React from "react";
import ReactDOM from "react-dom";
import { CartToolTip } from "./components/CartToolTip";

const rootEl = document.getElementById("react-cart-tool-tip");

rootEl && ReactDOM.render(rootEl, <CartToolTip />);
