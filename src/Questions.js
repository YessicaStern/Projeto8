import React from "react";

function Question(props){
    const [hide,setHide]=React.useState("question");
    const [show,setShow]=React.useState("hide");
    const [fix,setFix]=React.useState(props.fixed);
    const [backCard, SetBackCard]=React.useState("hide")
    // const [count,setCount]=React.useState(0);
    
    // if(count==1){
    //     setCount=0;
    //     console.log("funciona");
    // colocar pra deixar fixo aqui
    // }
    // if(fix !== props.fixed){
    //     console.log("click");
    //     console.log(count);
        
    // }  

    function questSelected(props){
        setHide("hide");
        setShow("card");
        console.log("key = "+ props.index, "id="+props.number);
        props.fixed= !fix;
        setFix(props.fixed);
        console.log(props.fixed);
        // setCount(count+1);   
    }
    function teste(){
        console.log("deu bom");
        SetBackCard("card");
        setShow("hide");
    }
    function forget(){
        console.log("não lembrei");
    }
    function almostForget(){
        console.log("quase não lemnro");
    }
    function remember(){
        console.log("lembrei");
    }

    return(
    <>
    <div className={hide} key={props.index}><h2>Pergunta {props.index +1}</h2><ion-icon onClick={questSelected} name="play-outline" className=".iconOpenQuestion"></ion-icon></div>
    <div className={show} ><h3>{props.quest}</h3><img className="iconArrowuCurve" src="./img/icon.svg" onClick={teste}/></div> 
    <div className={backCard} ><h3>{props.response}</h3>
        <div className="response">
         <div className="red" onClick={forget}><h4>Não Lembrei</h4></div> <div className="orange" onClick={almostForget}><h4>Quase não <br/> lembrei</h4></div> <div className="green" onClick={remember}><h4>Zap!</h4></div>
        </div>
    </div> 
    </>
    )
}




function Questions(){
      const question=[{number:11, quest:"O que é JSX?", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:22, quest:"O que é JSX?", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:33, quest:"O que é JSX?", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:44, quest:"O que é JSX?", response: "Uma extensão de linguagem do JavaScript", fixed:false}];
      
    return( 
     <div className="questions">
          <div className="top"><img src="./img/logo.png" className="smallLogo"/> <h1>ZapRecall</h1></div>
         {question.map((itens,index)=>(<Question quest={itens.quest} number={itens.number} fixed={itens.fixed} response={itens.response} index={index} />))}
     </div>
    )
}
export default Questions;