import React, { useEffect, useState } from "react";

import Nav from "@/components/nav";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { generateNewNumber } from "@/store/slices/generated-number";

import HomeSkeleton from "./skeleton";

const Home: React.FC = () => {
  const [initialLoadCompleted, setInitialLoadCompleted] = useState(false);
  const { generatedNumber } = useAppSelector((state) => state.generatedNumberState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(generateNewNumber());
  }, []);

  useEffect(() => {
    if (generatedNumber > 0) {
      setInitialLoadCompleted(true);
    }
  }, [generatedNumber]);

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      {initialLoadCompleted ? (
        <>
          <h1 style={{ marginBottom: "1rem" }}>Home</h1>
          <p>Generated number: {generatedNumber}</p>
          <Nav />
        </>
      ) : (
        <HomeSkeleton />
      )}
    </div>
  );
};

export default Home;
