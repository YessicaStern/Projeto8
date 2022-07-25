import { useState,React } from "react";

import Start from "./Start";
import Questions from "./Questions";
import Concluded from "./Concluded";



function Contents(){


    return (
    <div><Start/>
    <Questions/>
    <Concluded/>
    </div>);

}

export default Contents;