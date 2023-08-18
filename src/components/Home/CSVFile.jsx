import React from "react";
import { useForm } from "react-hook-form";

const CSVFile = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const inputFields = [
    {
      name: "max_x",
      errMessage: "Max X is required",
      placeholder: "Max X",
    },
    {
      name: "min_x",
      errMessage: "Min X is required",
      placeholder: "Min X",
    },
    {
      name: "max_y",
      errMessage: "Max Y is required",
      placeholder: "Max Y",
    },
    {
      name: "min_y",
      errMessage: "Min Y is required",
      placeholder: "Min Y",
    },
    {
      name: "max_z",
      errMessage: "Max Z is required",
      placeholder: "Max Z",
    },
    {
      name: "min_Z",
      errMessage: "Min Z is required",
      placeholder: "Min Z",
    },
  ];

  return (
    <div className="csv_form">
      <h1>CSV File to input</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input type="submit" className="form_button" value="File Upload" />
        {inputFields.map(
          ({ name = "", errMessage = "", placeholder }, index) => (
            <>
              <input
                key={`${index}-csv`}
                className="form_input"
                type="number"
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
            </>
          )
        )}
      </form>
    </div>
  );
};

export default CSVFile;
