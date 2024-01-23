import React from "react";
import { SimpleWidget } from "..";

export const WidgetsGrid = () => {
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget title="Contador" subTitle="Carrito de compras" href="/dashboard/counter"/>
    </div>
  );
};
