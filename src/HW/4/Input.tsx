import { ChangeEvent } from "react";

type InputPropsType = {
  currentText: string;
  setCurrentText: React.Dispatch<React.SetStateAction<string>>;
};

export const Input = ({ currentText, setCurrentText }: InputPropsType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value);
  };

  return (
    <input
      id={"hw04-input"}
      type='text'
      value={currentText}
      onChange={onChangeHandler}
    />
  );
};
