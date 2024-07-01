import styles from './modal.module.css';
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
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.h2}>{text}</h2>
        <div className={styles.modalFilho}>
          <Filters />
        </div>
        <div className={styles.comfirmacao}>
          <div className={styles.modalButton}>
            <button
              className="text-[#F44] font-opensans text-[15px] font-bold leading-normal"
              onClick={onClose}
            >
              SAIR
            </button>
            <button onClick={onClose}>
              <span className={styles.textButton}>
                <Button
                  texto="Aplicar"
                  variant="rounded"
                  textColor="primaria"
                  bgColor="terciaria"
                  className={styles.button}
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
