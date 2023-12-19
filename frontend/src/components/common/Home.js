import { useState, useEffect } from "react";
import Register from "./Register";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Welcome to Campus Canteen Portal");
  }, [name]);

  return <div style={{ textAlign: "center" }}>{name} - Canteen Portal</div>;
  //<Register />;
};

export default Home;