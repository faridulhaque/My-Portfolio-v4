import React, { useState } from "react";

const AppBar = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <div
      className={`xl:hidden lg:hidden md:hidden sm:visible xs:visible xxs:visible h-20 bg-[#333333]`}
    ></div>
  );
};

export default AppBar;
