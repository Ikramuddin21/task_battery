import React, { useState } from "react";
import "../css/Home.css";
import ProjectForm from "../components/Home/ProjectForm";
import ProjectFormValue from "../components/Home/ProjectFormValue";
import CSVFile from "../components/Home/CSVFile";

const Home = () => {
  const [inputValue, setInputValue] = useState({
    project_name: "",
    project_description: "",
    client: "",
    contractor: "",
  });
  console.log("inputValue", inputValue);

  return (
    <div className="home">
      <ProjectForm setInputValue={setInputValue} />
      <ProjectFormValue inputValue={inputValue} setInputValue={setInputValue} />
      <CSVFile />
    </div>
  );
};

export default Home;
