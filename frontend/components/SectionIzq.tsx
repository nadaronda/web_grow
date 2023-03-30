import React from "react";

export const fondo_1 = {
    backgroundImage: `url("/fondo_flor.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    with: "100%",

    display: "flex",
    flexDirection: "",

};
export const fondo_2 = {
    backgroundImage: `url("/raw.png")`,

};
export const fondo_3 = {
    backgroundImage: `url("tienda.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    with: "100%",
};


export const SectionIzq: React.FC<{ children: any; variant: any; }> = ({
    children,
    variant,
}) => {
    let estilo;
    if (variant == "fondo1") {
        estilo = fondo_1;
    } else if (variant == "fondo2") {
        estilo = fondo_2;
    } else if (variant == "fondo3") {
        estilo = fondo_3;
    }

    return (
        //TODO: Meter emotion y mezclar estilos
        <div className="f">
            <section style={estilo}>
                <div className="bg-gradient-to-r from-rosa to-azul w-[50%]">{children}</div>
            </section>

        </div>
    );
};