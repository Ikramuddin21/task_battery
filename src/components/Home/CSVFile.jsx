import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Papa from "papaparse";
import { FaUpload } from "react-icons/fa";

const CSVFile = ({ setAllInputValue }) => {
  const [csvData, setCsvData] = useState([]);
  const [csvMinMax, setCsvMinMax] = useState({});

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const submitData = data.max_x ? data : csvMinMax;
    setAllInputValue((prev) => ({ ...prev, ...submitData }));
    reset();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setCsvData(results.data);
      },
    });
  };

  // get csv file minimum and maximum value
  const getCsvMinMaxValue = () => {
    let minMaxValue = {
      min_x: Infinity,
      max_x: -Infinity,
      min_y: Infinity,
      max_y: -Infinity,
      min_z: Infinity,
      max_z: -Infinity,
    };

    if (csvData.length) {
      csvData.forEach((item) => {
        // Find minimum x value
        if (item?.X < minMaxValue.min_x) minMaxValue.min_x = item?.X;

        // Find maximum x value
        if (item?.X > minMaxValue.max_x) minMaxValue.max_x = item?.X;

        // Find minimum y value
        if (item?.Y < minMaxValue.min_y) minMaxValue.min_y = item?.Y;

        // Find maximum y value
        if (item?.Y > minMaxValue.max_y) minMaxValue.max_y = item?.Y;

        // Find minimum z value
        if (item?.Z < minMaxValue.min_z) minMaxValue.min_z = item?.Z;

        // Find maximum z value
        if (item?.Z > minMaxValue.max_z) minMaxValue.max_z = item?.Z;
      });
      setCsvMinMax(minMaxValue);
    }
  };

  useEffect(() => {
    getCsvMinMaxValue();
  }, [csvData.length]);

  // input fields data
  const csv_inputFields = [
    {
      name: "max_x",
      errMessage: "Max X is required",
      placeholder: "Max X",
      value: csvMinMax.max_x ?? "",
    },
    {
      name: "min_x",
      errMessage: "Min X is required",
      placeholder: "Min X",
      value: csvMinMax.min_x ?? "",
    },
    {
      name: "max_y",
      errMessage: "Max Y is required",
      placeholder: "Max Y",
      value: csvMinMax.max_y ?? "",
    },
    {
      name: "min_y",
      errMessage: "Min Y is required",
      placeholder: "Min Y",
      value: csvMinMax.min_y ?? "",
    },
    {
      name: "max_z",
      errMessage: "Max Z is required",
      placeholder: "Max Z",
      value: csvMinMax.max_z ?? "",
    },
    {
      name: "min_z",
      errMessage: "Min Z is required",
      placeholder: "Min Z",
      value: csvMinMax.min_z ?? "",
    },
  ];

  return (
    <div className="csv_form">
      <h1>CSV File to input</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="teacherFormImg" className="csv_file_upload_label">
          Upload <FaUpload />
        </label>
        <input
          type="file"
          accept=".csv"
          hidden
          id="teacherFormImg"
          className="form_button"
          onChange={handleFileUpload}
        />

        {csv_inputFields.map(
          (
            { name = "", errMessage = "", placeholder = "", value = "" },
            index
          ) => (
            <div key={`${index}-csv`} className="csv_file_input_field_area">
              <label htmlFor={name}>{placeholder}</label>
              <input
                className="form_input"
                id={name}
                type="number"
                placeholder={placeholder}
                defaultValue={value ?? ""}
                {...register(name, {
                  required: csvMinMax?.max_x ? false : errMessage ?? false,
                  min: csvMinMax?.min_x ? false : "500",
                  max: csvMinMax?.max_x ? false : "50000",
                })}
                aria-invalid={errors[name] ? "true" : "false"}
              />
              {errors[name] && !csvMinMax?.max_x && (
                <p role="alert" className="form_err">
                  {errors[name].message}
                </p>
              )}
              {errors[name]?.type === "max" && !csvMinMax?.max_x && (
                <p role="alert" className="form_err">
                  Maximum value is 50000
                </p>
              )}
              {errors[name]?.type === "min" && !csvMinMax?.min_x && (
                <p role="alert" className="form_err">
                  Minimum value is 500
                </p>
              )}
            </div>
          )
        )}
        <input type="submit" className="form_button" />
        {csvMinMax.min_x && (
          <input
            type="reset"
            onClick={() => {
              setCsvData([]);
              setCsvMinMax({});
              reset();
            }}
            className="form_button"
            value="Clear"
          />
        )}
      </form>
    </div>
  );
};

export default CSVFile;
