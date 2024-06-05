const butaoPrimario = {
    className: "flex w-[222px] h-[56px] px-[34px] justify-center items-center gap-[-2px] shrink-0 rounded-7px bg-corPrincipal",
    azulEscuro: {
        backgroundColor: "bg-corPrincipal",
        color: "text-white",
    },
    azulClaro: {
        backgroundColor: "bg-corSecundaria",
        color: "text-white",
    },
    branco: {
        backgroundColor: "bg-white",
        color: "text-corPrincipal",
    },
}

const butaoSecundario = {
    className: "flex w-[222px] h-[56px] px-[34px] justify-center items-center gap-[-2px] shrink-0 rounded-28px bg-corPrincipal",
    azulEscuro: {
        backgroundColor: "bg-corPrincipal",
        color: "text-white",
    },
    azulClaro: {
        backgroundColor: "bg-corSecundaria",
        color: "text-white",
    },
    branco: {
        backgroundColor: "bg-white",
        color: "text-corPrincipal",
    },
}

const butaoTerciario = {
    className: "flex w-[222px] h-[56px] px-[34px] justify-center items-center gap-[-2px] shrink-0 rounded-7px border-2 border-corPrincipal",
    azulEscuro: {
        backgroundColor: "bg-corPrincipal",
        color: "text-white",
    },
    azulClaro: {
        backgroundColor: "bg-corSecundaria",
        color: "text-white",
    },
    branco: {
        backgroundColor: "bg-white",
        color: "text-corPrincipal",
    },
}

export const Variantes = {
    principal: butaoPrimario,
    secundario: butaoSecundario,
    terciario: butaoTerciario,
}