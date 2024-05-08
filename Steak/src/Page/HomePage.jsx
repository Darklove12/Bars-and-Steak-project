import React, { useEffect, useState } from "react";
import Navbar from "../UI/Navrbar";
import Container from "../UI/Container";
import Footer from '../UI/Footer'

// import Team from "../Team";
const HomePage = () => {
  const [serverData, setServerData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((server) => server.json())
      .then((data) => {
        setServerData(data.message);
      });
  }, []);

  return (
    <>
      <Navbar />
     <Container/>
     <Footer/>
    </>
  );
};

export default HomePage;
