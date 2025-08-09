import React from "react";
import Titulo from "@/components/IU/Titulo";
import { GridStream } from "./gridStream/GridStream";
export const Streams = () => {
  return (
    <>
      <section className="bg-zinc-900  p-8  flex  flex-col items-center justify-center">
        <Titulo>STREAM</Titulo>
        <GridStream/>
      </section>
    </>
  );
};
