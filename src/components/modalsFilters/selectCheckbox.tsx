import React, { useState } from 'react';
import CheckboxButton from './checkbox';

export const Filter: React.FC = () => {
  const [criadasPorMimChecked, setCriadasPorMimChecked] = useState<boolean>(false);
  const [queParticipoChecked, setQueParticipoChecked] = useState<boolean>(false);
  const [arquivadasChecked, setArquivadasChecked] = useState<boolean>(false);
  const [encerradasChecked, setEncerradasChecked] = useState<boolean>(false);

  return (
    <>
      <div>
        <CheckboxButton
          texto="Criadas por mim"
          checked={criadasPorMimChecked}
          setChecked={setCriadasPorMimChecked}
        />
      </div>
      <div>
        <CheckboxButton
          texto="Que participo"
          checked={queParticipoChecked}
          setChecked={setQueParticipoChecked}
        />
      </div>
      <div>
        <CheckboxButton
          texto="Arquivadas"
          checked={arquivadasChecked}
          setChecked={setArquivadasChecked}
        />
      </div>
      <div>
        <CheckboxButton
          texto="Encerradas"
          checked={encerradasChecked}
          setChecked={setEncerradasChecked}
        />
      </div>
    </>
  );
};

export const Order: React.FC = () => {
  const [maisRecentePrimeiroChecked, setMaisRecentePrimeiroChecked] = useState<boolean>(false);
  const [maisAntigaPrimeiroChecked, setMaisAntigaPrimeiroChecked] = useState<boolean>(false);

  return (
    <>
      <div>
        <CheckboxButton
          texto="Mais recente primeiro"
          checked={maisRecentePrimeiroChecked}
          setChecked={setMaisRecentePrimeiroChecked}
        />
      </div>
      <div>
        <CheckboxButton
          texto="Mais antiga primeiro"
          checked={maisAntigaPrimeiroChecked}
          setChecked={setMaisAntigaPrimeiroChecked}
        />
      </div>
    </>
  );
};
