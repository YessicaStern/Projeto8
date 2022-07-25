import React  from "react";

import Start from "./Start";
import Questions from "./Questions";
import Concluded from "./Concluded";



function Contents(){
    
    const[countQuest,setCountQuest]=React.useState(0);
    const[countType,setCountType]=React.useState([]);

    return (
    <div><Start/>
    <Questions countQuest={countQuest} setCountQuest={setCountQuest} countType={countType} setCountType={setCountType}/>
    <Concluded countQuest={countQuest} countType={countType}/>
    </div>);

}

export default Contents;