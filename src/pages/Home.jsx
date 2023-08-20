import React, { useState } from "react";
import "../css/Home.css";
import ProjectForm from "../components/Home/ProjectForm";
import ProjectFormValue from "../components/Home/ProjectFormValue";
import CSVFile from "../components/Home/CSVFile";

const Home = ({ setAllInputValue }) => {
  const [inputValue, setInputValue] = useState({
    project_name: "",
    project_description: "",
    client: "",
    contractor: "",
  });

  return (
    <div className="home">
      <div
        className={`${
          !!inputValue.project_name ? "project_form_value_container" : ""
        }`}
      >
        <ProjectForm
          setInputValue={setInputValue}
          setAllInputValue={setAllInputValue}
        />

        {!!inputValue.project_name && (
          <ProjectFormValue
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        )}
      </div>

      <CSVFile setAllInputValue={setAllInputValue} />
    </div>
  );
};

export default Home;
