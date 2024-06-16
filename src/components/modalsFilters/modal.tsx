import styles from './Modal.module.css';
import Checkbox from './checkbox';

interface ModalProps {
  variante: 'ordenar' | 'filtrar';
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, variante }) => {
  const filters = variante === 'filtrar' ? filter : order;
  const text = variante === 'filtrar' ? 'Filtros:' : 'Ordenar por:';

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.h2}>{text}</h2>
        <div className={styles.modalFilho}>{filters}</div>
        <div className={styles.comfirmacao}>
          <div className={styles.modalButton}>
            <button
              className={styles.button}
              onClick={onClose}
            >
              <span className={styles.textButton}>Aplicar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const filter = (
  <>
    <div>
      <Checkbox texto="Criadas por mim" />
    </div>
    <div>
      <Checkbox texto="Que participo" />
    </div>
    <div>
      <Checkbox texto="Arquivadas" />
    </div>
    <div>
      <Checkbox texto="Encerradas" />
    </div>
  </>
);

const order = (
  <>
    <div>
      <Checkbox texto="Mais recente primeiro" />
    </div>
    <div>
      <Checkbox texto="Mais antiga primeiro" />
    </div>
  </>
);

export default Modal;
