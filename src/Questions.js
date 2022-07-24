import React from "react";

function Question(props){
    const [hide,setHide]=React.useState("question");
    return(
    <div class={hide}><h2>{props.itens}</h2><ion-icon onClick={()=>{setHide("hide");console.log(props.itens)}} name="play-outline" className=".iconOpenQuestion"></ion-icon></div>
    )
}

function Questions(){
      const question=["Pergunta 1","Pergunta 2","Pergunta 3","Pergunta 4"];
      
    return( 
     <div className="questions">   
          <div className="top"><img src="./img/logo.png" className="smallLogo"/> <h1>ZapRecall</h1></div>
  
         {question.map((itens)=>(<Question itens={itens}/>))}
     </div>
    )
}
export default Questions;