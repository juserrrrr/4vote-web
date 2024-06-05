import { Variantes } from "./variantes";

interface ButtonProps {
    texto: string,
    variante: "principal" | "secundario" | "terciario",
}

function Butao({ texto, variante }: ButtonProps) {

    const ButaoVariante = Variantes[variante];
    return (
        <div>
            <button
                className={ButaoVariante.className}
            >
                {texto}
            </button>
        </div>
    );
}

export default Butao;