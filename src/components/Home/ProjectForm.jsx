import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { project_form_inputFields } from "../../helper";

const ProjectForm = ({ setInputValue }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleProjectFormValue = (data) => {
    // console.log(data);
    setInputValue(data);
    reset();
  };

  return (
    <div className="project_form">
      <h1>Project Form</h1>
      <form onSubmit={handleSubmit(handleProjectFormValue)} className="form">
        {project_form_inputFields.map(
          ({ name = "", errMessage = "", placeholder }, index) => (
            <Fragment key={`${index}-project`}>
              <input
                className="form_input"
                type="text"
                placeholder={placeholder}
                {...register(name, {
                  required: errMessage ?? false,
                })}
                aria-invalid={errors[name] ? "true" : "false"}
              />
              {errors[name] && (
                <p role="alert" className="form_err">
                  {errors[name].message}
                </p>
              )}
            </Fragment>
          )
        )}
        <input type="submit" className="form_button" />
      </form>
    </div>
  );
};

export default ProjectForm;
