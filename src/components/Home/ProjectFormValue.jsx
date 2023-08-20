import React from "react";

const ProjectFormValue = ({ inputValue, setInputValue, setAllInputValue }) => {
  return (
    <div className="project_form_value">
      <h1>Project Form Value</h1>

      <form className="form">
        {Object.values(inputValue).map(
          (item, index) =>
            !!item && (
              <input
                key={index}
                className="form_input"
                type="text"
                readOnly
                disabled
                value={item}
              />
            )
        )}

        {Object.values(inputValue)[0] && (
          <input
            type="reset"
            onClick={() => {
              setInputValue({
                project_name: "",
                project_description: "",
                client: "",
                contractor: "",
              });
            }}
            className="form_button"
            value="Clear"
          />
        )}
      </form>
    </div>
  );
};

export default ProjectFormValue;
