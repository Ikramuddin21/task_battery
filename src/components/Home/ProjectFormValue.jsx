import React from "react";

const ProjectFormValue = ({ inputValue, setInputValue }) => {
  const inputFields = [
    {
      id: 1,
      name: "project_name",
    },
    {
      id: 2,
      name: "project_description",
    },
    {
      id: 3,
      name: "client",
    },
    {
      id: 4,
      name: "contractor",
    },
  ];
  return (
    <div className="project_form_value">
      <h1>Project Form Value</h1>
      <form className="form">
        {inputFields.map((item) => (
          <input
            key={item.id}
            className="form_input"
            type="text"
            readOnly
            disabled
            value={inputValue[item.name]}
          />
        ))}

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
