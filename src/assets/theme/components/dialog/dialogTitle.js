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
import typography from "assets/theme/base/typography";

// Team Stellar React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

const dialogTitle = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
