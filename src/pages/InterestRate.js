import * as React from "react";
import Info from "../components/Info";
import formulaImgTasa from '../img/tasaInteres.PNG'
import formulaImgSimple from '../img/simple.PNG'
import formulaImgComp from '../img/compuesto.PNG'


const InterestRate = () => {
    let formulaDescriptionTasa = [
        "i(%) = Tasa de insterés expresado en porcentaje",
        "I = Interés",
        "P = Monto Inicial",
        "n = Número de periodos de tiempo"
    ]
    let formulaDescriptionSimple = [
        "I = Interés",
        "P = Monto Inicial",
        "i = Tasa de insterés",
        "n = Número de periodos de tiempo"
    ]
    return (
        <div className="App">

            <h2>Tasa de Interés</h2>
            <Info
                title="Tasa de interés"
                paragraph="Es el interes generado en una unidad de tiempo expresado en porcentaje. Las unidades de tiempo por lo general son expresadas por el perido de un año (anual), auque tambien se lo pude expresar mensualmente, trimestral, diariamente, etc. "
                formulaImg={formulaImgTasa}
                descriptionFormula={formulaDescriptionTasa}
            />
            <h2>Tipos Interés</h2>
            <Info
                title="Interés simple"
                paragraph="Es el que se optiene cuando los interés producidos duarante el tiempo que dura un prestamo, se deben unicamenta al capital inicial. Cuando se utilza el interez simple, los interese son únicamente en función del capital inicial, el número de periodos y la tasa de interés."
                formulaImg={formulaImgSimple}
                descriptionFormula={formulaDescriptionSimple}
            />
            <br/>
             <Info
                title="Interés Compuesto"
                paragraph="Es el interés generado tanto por el monto inicial como por el interés de los periodos anteriores, es decir aparte del interés del monto inicial, los intereses también generan intereses. Estaa es una práctica adoptada por el sistema finaciero de bancos y cooperaticas."
                formulaImg={formulaImgComp}
                descriptionFormula={formulaDescriptionSimple}
            />

        </div>
    )
}

export default InterestRate;