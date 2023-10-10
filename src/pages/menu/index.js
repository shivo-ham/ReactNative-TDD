import React from "react";
import { AppRoot, Header } from "../../component";

import { Strings } from "../../config/appConstants";

const Menu = () => {
  return (
    <AppRoot>
      <Header
        lable={Strings.app_Name}
        openAccount={() => {}}
        openDrawer={() => {}}
      />
    </AppRoot>
  );
};

export default Menu;
