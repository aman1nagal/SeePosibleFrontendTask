import React, { ReactNode, useEffect, useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import useTokenCheck from "./CustomHook";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const hasToken = useTokenCheck("token");
  return (
    <>
      <div className="flex h-screen w-full overflow-y-hidden bg-white">
        {hasToken ? <Sidebar /> : <></>}
        <div
          className={`   ${
            hasToken ? "md:pb-28 mxl:pb-0 ml-64 py-6 px-4 sm:px-6 lg:px-8" : ""
          } w-full h-full`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
