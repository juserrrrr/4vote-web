import React, { useCallback, useEffect, useState } from 'react';
import CheckboxButton from '../checkboxs/checkbox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const Filter: React.FC = () => {
  // const [criadasPorMimChecked, setCriadasPorMimChecked] = useState<boolean>(false);
  // const [queParticipoChecked, setQueParticipoChecked] = useState<boolean>(false);
  // const [arquivadasChecked, setArquivadasChecked] = useState<boolean>(false);
  // const [encerradasChecked, setEncerradasChecked] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const encerradaParam = searchParams.get('encerradas');
  const participoParam = searchParams.get('participo');
  const criadorParam = searchParams.get('criador');
  const arquivadaParam = searchParams.get('arquivada');
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <CheckboxButton
          texto="Criadas por mim"
          checked={criadorParam === 'true'}
          setChecked={() => {
            router.push(pathname + '?' + createQueryString('criador', criadorParam === 'true' ? 'false' : 'true'));
          }}
        />
      </div>
      <div>
        <CheckboxButton
          texto="Que participo"
          checked={participoParam === 'true'}
          setChecked={() => {
            router.push(pathname + '?' + createQueryString('participo', participoParam === 'true' ? 'false' : 'true'));
          }}
        />
      </div>
      <div>
        <CheckboxButton
          texto="Arquivadas"
          checked={arquivadaParam === 'true'}
          setChecked={() => {
            router.push(pathname + '?' + createQueryString('arquivada', arquivadaParam === 'true' ? 'false' : 'true'));
          }}
        />
      </div>
      <div>
        <CheckboxButton
          texto="Encerradas"
          checked={encerradaParam === 'true'}
          setChecked={() => {
            router.push(pathname + '?' + createQueryString('encerradas', encerradaParam === 'true' ? 'false' : 'true'));
          }}
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
