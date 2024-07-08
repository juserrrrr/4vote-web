import React from 'react';

interface CheckboxProps {
  texto: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function toggleChecked(checked: boolean, setChecked: React.Dispatch<React.SetStateAction<boolean>>) {
  setChecked(!checked);
}

const CheckboxButton: React.FC<CheckboxProps> = ({ texto, checked, setChecked }) => {
  const stateCheckbox = () => toggleChecked(checked, setChecked);

  return (
    <label className="flex items-center border-[none] bg-none p-0 cursor-pointer outline-[none]">
      <input
        type="checkbox"
        checked={checked}
        onChange={stateCheckbox}
        className="rounded-md border-2 border-blue-900 w-5 h-5 cursor-pointer bg-white mr-1.5 appearance-none flex justify-center items-center relative checked:bg-blue-900 checked:before:content-['✔'] checked:before:text-white checked:before:text-lg checked:before:absolute checked:before:opacity-0 checked:before:scale-50 checked:before:animate-checkBoxAnimation"
      />
      <span className="text-[#052a76] text-[14px] font-bold">{texto}</span>
    </label>
  );
};

export default CheckboxButton;
