import React from "react";
import { useForm } from "react-hook-form";

const ProjectForm = ({ setInputValue }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    setInputValue(data);
    reset();
  };

  const inputFields = [
    {
      name: "project_name",
      errMessage: "Project Name is required",
      placeholder: "Enter Project Name",
    },
    {
      name: "project_description",
      errMessage: "Project Description is required",
      placeholder: "Enter Project Description",
    },
    {
      name: "client",
      errMessage: "Client is required",
      placeholder: "Enter Your Client",
    },
    {
      name: "contractor",
      errMessage: "Contractor is required",
      placeholder: "Enter Contractor",
    },
  ];

  return (
    <div className="project_form">
      <h1>Project Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {inputFields.map(
          ({ name = "", errMessage = "", placeholder }, index) => (
            <input
              key={index}
              className="form_input"
              type="text"
              placeholder={placeholder}
              {...register(name, {
                required: true,
              })}
              aria-invalid={errors[name] ? "true" : "false"}
            />
          )
        )}
        // {errors[name](<p role="alert">{errors[name].message}</p>)}
        <input type="submit" className="form_button" />
      </form>
    </div>
  );
};

export default ProjectForm;
