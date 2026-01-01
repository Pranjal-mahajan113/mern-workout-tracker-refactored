import React from "react";
import Records from "../Componets/Records/Records";
import Form from "../Componets/Form/Form";

const Home = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-8 px-4 grid md:grid-cols-2 gap-6">
        <Records />
        <Form />
      </div>
    </>
  );
};

export default Home;
