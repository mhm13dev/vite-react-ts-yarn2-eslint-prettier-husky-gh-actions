import React from "react";

import Nav from "@/components/nav";

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Home</h1>

      <Nav />
    </div>
  );
};

export default Home;
