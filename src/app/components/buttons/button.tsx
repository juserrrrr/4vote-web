interface ButtonProps {
    texto: string;
    variante: "principal" | "secundario" | "terciario";
}

function Butao({ texto, }: ButtonProps) {
    return (
        <div>
            <button >
                {texto}
            </button>
        </div>
    );
}

export default Butao;