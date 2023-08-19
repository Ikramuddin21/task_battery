import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Papa from "papaparse";

const CSVFile = () => {
  const [csvData, setCsvData] = useState([]);
  const [csvMinMax, setCsvMinMax] = useState({});

  console.log("csv minmax", csvMinMax);
  console.log("csv data", csvData);

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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setCsvData(results.data);
      },
    });
  };

  const getCsvMinMaxValue = () => {
    let minMaxValue = {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity,
      minZ: Infinity,
      maxZ: -Infinity,
    };

    if (csvData.length) {
      csvData.forEach((item) => {
        // Find minimum x value
        if (item?.X < minMaxValue.minX) minMaxValue.minX = item?.X;

        // Find maximum x value
        if (item?.X > minMaxValue.maxX) minMaxValue.maxX = item?.X;

        // Find minimum y value
        if (item?.Y < minMaxValue.minY) minMaxValue.minY = item?.Y;

        // Find maximum y value
        if (item?.Y > minMaxValue.maxY) minMaxValue.maxY = item?.Y;

        // Find minimum z value
        if (item?.Z < minMaxValue.minZ) minMaxValue.minZ = item?.Z;

        // Find maximum z value
        if (item?.Z > minMaxValue.maxZ) minMaxValue.maxZ = item?.Z;
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
      value: csvMinMax.maxX ?? null,
    },
    {
      name: "min_x",
      errMessage: "Min X is required",
      placeholder: "Min X",
      value: csvMinMax.minX ?? null,
    },
    {
      name: "max_y",
      errMessage: "Max Y is required",
      placeholder: "Max Y",
      value: csvMinMax.maxY ?? null,
    },
    {
      name: "min_y",
      errMessage: "Min Y is required",
      placeholder: "Min Y",
      value: csvMinMax.minY ?? null,
    },
    {
      name: "max_z",
      errMessage: "Max Z is required",
      placeholder: "Max Z",
      value: csvMinMax.maxZ ?? null,
    },
    {
      name: "min_Z",
      errMessage: "Min Z is required",
      placeholder: "Min Z",
      value: csvMinMax.minZ ?? null,
    },
  ];

  return (
    <div className="csv_form">
      <h1>CSV File to input</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="teacherFormImg" className="csv_file_upload_label">
          Upload
        </label>
        <input
          type="file"
          accept=".csv"
          hidden
          id="teacherFormImg"
          className="form_button"
          // value="File Upload"
          onChange={handleFileUpload}
        />

        {csv_inputFields.map(
          (
            { name = "", errMessage = "", placeholder = "", value = null },
            index
          ) => (
            <div key={`${index}-csv`} className="csv_file_input_field_area">
              <label htmlFor={name}>{placeholder}</label>
              <input
                className="form_input"
                id="form_input"
                type="number"
                placeholder={placeholder}
                value={value}
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
            </div>
          )
        )}
      </form>
    </div>
  );
};

export default CSVFile;
