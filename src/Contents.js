import React  from "react";

import Start from "./Start";
import Questions from "./Questions";
import Concluded from "./Concluded";



function Contents(){
    
    const[countQuest,setCountQuest]=React.useState(0);

    return (
    <div><Start/>
    <Questions countQuest={countQuest} setCountQuest={setCountQuest}/>
    <Concluded/>
    </div>);

}

export default Contents;