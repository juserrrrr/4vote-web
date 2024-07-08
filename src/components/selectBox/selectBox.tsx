import React, { useState, useEffect, useRef } from 'react';

//Essa função é responsável por criar a caixa de seleção
//O singleSelect seleciona apenas uma opção

interface Option {
  label: string;
  value: string;
}

//option - são as opções
//selectedValue - contém o valor da opção que está atualmente selecionada no componente dropdown.
// onChange - é uma função de callback que é chamada sempre que o usuário seleciona uma nova opção no dropdown
interface SingleSelectProps {
  options: Option[];
  selectedValue: string;
  onChange: (selected: string) => void;
}

const SingleSelect: React.FC<SingleSelectProps> = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleSelect = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative inline-block w-64"
    >
      <button
        type="button"
        onClick={toggleSelect}
        className="w-full h-10 mt-1 px-4 py-2 text-left bg-white border-2 border-solid border-blue-950 rounded-lg shadow focus:outline-none font-bold text-blue-950"
      >
        {selectedValue ? options.find((option) => option.value === selectedValue)?.label : 'Tipo de Acesso'}
      </button>
      {isOpen && (
        <ul className="absolute left-0 w-full mt-1 overflow-auto bg-white border rounded shadow max-h-60 top-full z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${selectedValue === option.value ? 'bg-gray-200' : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SingleSelect;
