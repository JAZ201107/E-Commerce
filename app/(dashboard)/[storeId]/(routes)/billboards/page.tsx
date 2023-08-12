import React, { FC } from "react";
import BillboardClient from "./components/BillboardClient";

interface BillboardProps {}

const Billboard: FC<BillboardProps> = ({}) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default Billboard;
