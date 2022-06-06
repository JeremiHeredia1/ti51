import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sumamulti from "./componentes/calcuSuyMul";
import {Calculator} from "./componentes/celyfah";
import Formulario from "./componentes/formulario";

import {Menu} from "./componentes/menu";

export default function Main(){
    return(
        <Router>
            <Routes>
                <Route extract path='/' element={<Menu />} />
                <Route extract path='/calcuFayCel' element={<Calculator />} />
                <Route extract path='/sumamult' element={<Sumamulti/>}/>
                <Route extract path='/formulario' element={<Formulario/>}/>
            </Routes>
        </Router>
    )

}