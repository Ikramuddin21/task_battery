import React from "react";
import { useForm } from "react-hook-form";

const ProjectFormValue = ({ inputValue, setInputValue }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   const onSubmit = (data) => {
  //     console.log(data);
  //     reset();
  //   };

  //   const inputFields = [
  //     {
  //       name: "project_name",
  //       errMessage: "Project Name is required",
  //       placeholder: "Enter Project Name",
  //     },
  //     {
  //       name: "project_description",
  //       errMessage: "Project Description is required",
  //       placeholder: "Enter Project Description",
  //     },
  //     {
  //       name: "client",
  //       errMessage: "Client is required",
  //       placeholder: "Enter Your Client",
  //     },
  //     {
  //       name: "contractor",
  //       errMessage: "Contractor is required",
  //       placeholder: "Enter Contractor",
  //     },
  //   ];

  return (
    <div className="project_form_value">
      <h1>Project Form Value</h1>
      <form className="form">
        <input
          className="form_input"
          type="text"
          readOnly
          disabled
          value={inputValue.project_name}
        />
        <input
          className="form_input"
          type="text"
          readOnly
          disabled
          value={inputValue.project_description}
        />
        <input
          className="form_input"
          type="text"
          readOnly
          disabled
          value={inputValue.client}
        />
        <input
          className="form_input"
          type="text"
          readOnly
          disabled
          value={inputValue.contractor}
        />
        {inputValue.project_name && (
          <input
            type="reset"
            onClick={() =>
              setInputValue({
                project_name: "",
                project_description: "",
                client: "",
                contractor: "",
              })
            }
            className="form_button"
            value="Clear"
          />
        )}
      </form>
    </div>
  );
};

export default ProjectFormValue;
