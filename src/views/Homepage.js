import React from "react";
import Banner from "../components/Banner";
import CryptosTable from "../components/CryptosTable";
import { loadFull } from "tsparticles";
import { options } from "../config/utilities";
import Particles from "react-tsparticles";

const Homepage = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
      <Particles id="tsparticles" init={particlesInit} options={options} />
      <Banner />
      <CryptosTable />
    </>
  );
};

export default Homepage;
