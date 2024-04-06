/**
=========================================================
* Team Stellar React - v2.2.0
=========================================================

* Product Page: https://www.azeemlab.com/product/material-dashboard-react
* Copyright 2023 AzeemLab (https://www.azeemlab.com)

Coded by www.azeemlab.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Team Stellar React base styles
import borders from "assets/theme/base/borders";

const { borderRadius } = borders;

const avatar = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "auto",
    },
  },
};

export default avatar;
