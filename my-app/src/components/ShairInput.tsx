import CSS from "csstype";
import { InputHTMLAttributes, useState } from "react";
import { InputGroupProps } from "react-bootstrap";

interface IShairInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  validateFunction?: () => boolean;
  validationErrorMessage?: string;
}

export default function ShairInput(passedProps: IShairInputProps) {
  const { label, validationErrorMessage, validateFunction, ...props } =
    passedProps;
  const [isValid, setIsValid] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const inputStyles: CSS.Properties = {
    borderColor: isValid ? "black" : "red",
    borderWidth: "medium",
  };

  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    //If input is required and text box is empty
    if (e.target.value.trim().length === 0) {
      setIsValid(false);
      setShowErrorMessage(false);
      return;
    }

    //Don't want to continue if there is no validation function
    if (!validateFunction) {
      return;
    }

    //Don't want to continue if there is no validation function
    if (!validateFunction) {
      return;
    }
    //If input is valid, then remove all warnings, else display warnings
    shouldShowErrorMessage(!validateFunction());
  };

  const shouldShowErrorMessage = (value: boolean) => {
    setIsValid(!value);
    setShowErrorMessage(value);
  };

  return (
    <div className="form-outline form-white mb-4">
      {showErrorMessage && <p>{validationErrorMessage}</p>}
      <input
        onBlur={(e) => onInputBlur(e)}
        className="form-control form-control-lg"
        style={inputStyles}
        {...props}
      />
      <label className="form-label" htmlFor="typePasswordX">
        {label}
      </label>
    </div>
  );
}
