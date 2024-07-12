import { Filter, Order } from './selectCheckbox';
import Button from '../buttons/button';

interface ModalProps {
  variante: 'ordenar' | 'filtrar';
  isOpen: boolean;
  onClose: () => void;
}

const ModalFilters: React.FC<ModalProps> = ({ isOpen, onClose, variante }) => {
  const Filters = variante === 'filtrar' ? Filter : Order;
  const text = variante === 'filtrar' ? 'Filtros:' : 'Ordenar por:';

  if (!isOpen) return null;

  return (
    <div className="fixed top-[0] left-[0] right-[0] bottom-[0] bg-[rgba(0,_0,_0,_0.8)] flex items-center justify-center z-30">
      <div className="relative flex w-[280px] border-[2px] border-[solid] border-[#052a76] h-[310px] pt-[28px] pr-[10px] pb-[14px] pl-[24px] flex-col items-start gap-[38px] rounded-[7px] bg-[#fff] z-40">
        <h2 className="text-[#052a76] text-[24px] font-bold">{text}</h2>
        <div className="flex flex-col w-[180px] items-start content-start gap-[10px] flex-wrap">
          <Filters />
        </div>
        <div className="flex w-[268px] h-[45px] justify-center items-center gap-[10px] flex-shrink-0">
          <div className="absolute bottom-[14px] right-[10px] flex justify-end items-center gap-[17px] flex-[1_0_0]">
            <button
              className="text-[#F44] font-opensans text-[15px] font-bold leading-normal"
              onClick={onClose}
            >
              SAIR
            </button>
            <button onClick={onClose}>
              <span className="text-[#052a76] text-[15px] font-bold">
                <Button
                  texto="Aplicar"
                  variant="rounded"
                  textColor="primaria"
                  bgColor="terciaria"
                  className="flex justify-center items-center w-[120px] h-[37px] rounded-[7px] border-[2px] border-[solid] border-[#052a76]"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilters;
