import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/Home.css";
import ProjectForm from "../components/Home/ProjectForm";
import ProjectFormValue from "../components/Home/ProjectFormValue";

const Home = () => {
  const [inputValue, setInputValue] = useState({
    project_name: "",
    project_description: "",
    client: "",
    contractor: "",
  });
  console.log("inputValue", inputValue);
  // const {
  //   register,
  //   reset,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   reset();
  // };

  // const inputFields = [
  //   {
  //     name: "project_name",
  //     errMessage: "Project Name is required",
  //     placeholder: "Enter Project Name",
  //   },
  //   {
  //     name: "project_description",
  //     errMessage: "Project Description is required",
  //     placeholder: "Enter Project Description",
  //   },
  //   {
  //     name: "client",
  //     errMessage: "Client is required",
  //     placeholder: "Enter Your Client",
  //   },
  //   {
  //     name: "contractor",
  //     errMessage: "Contractor is required",
  //     placeholder: "Enter Contractor",
  //   },
  // ];

  return (
    <div className="home">
      <ProjectForm setInputValue={setInputValue} />

      <ProjectFormValue inputValue={inputValue} setInputValue={setInputValue} />

      {/* <h1>First Step Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="first_form">
        {inputFields.map(
          ({ name = "", errMessage = "", placeholder }, index) => (
            <input
              key={index}
              className="firts_form_input"
              type="text"
              placeholder={placeholder}
              {...register(name, {
                required: true,
              })}
              aria-invalid={errors[name] ? "true" : "false"}
            />
            // errors[name] && <p role="alert">{errors[name].message}</p>
          )
        )}
        <input type="submit" className="firts_form_button" />
      </form> */}
    </div>
  );
};

export default Home;
