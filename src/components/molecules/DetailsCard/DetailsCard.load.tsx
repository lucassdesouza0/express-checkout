import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Card, Details } from "./DetailsCard.styles";

const DetailsCard = () => {
  return (
    <Card>
      <Skeleton width={100} height={100} />
      <Details>
        <Skeleton />

        <Skeleton />
      </Details>
    </Card>
  );
};

export default DetailsCard;
