import React, { useEffect } from "react";

import useData from "./useData";

const Home = () => {
  const { data, getData } = useData();
  useEffect(() => {
    async function onPageLoad() {
      await getData();
    }
    onPageLoad();
  }, []);

  return <div>Home</div>;
};
export default Home;
