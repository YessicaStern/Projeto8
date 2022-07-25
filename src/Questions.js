import React from "react";

function Question(props){
    const [hide,setHide]=React.useState("question");
    const [show,setShow]=React.useState("hide");
    // const [fix,setFix]=React.useState(props.fixed);
    const [backCard, SetBackCard]=React.useState("hide")
    const [nameIcon, SetNameIcon]=React.useState("play-outline");
    const [nameClass,SetNameClass]= React.useState("")
    const [questClass,setQuestClass]=React.useState("questionColor")
    const [count,setCount]=React.useState(0);
    
    console.log("props count =="+ props.countQuest);
    
    // if(fix !== props.fixed){
    //     console.log("click");
    //     console.log(count);
        
    // }  

    function questSelected(){
        if(count==0){
        setHide("hide");
        setShow("card");
        console.log("key = "+ props.index, "id="+props.number, props);
        //console.log(props.countQuest);
        // props.fixed= !fix;
        // setFix(props.fixed);
        // console.log(props.fixed);
         setCount(count+1);} 
    }
    function teste(){
        setCount(count+1);
        console.log("deu bom");
        SetBackCard("card");
        setShow("hide");
    }
    function forget(){
        SetNameIcon("close-circle");
        setHide("question");
        setShow("hide");
        SetBackCard("hide");
        SetNameClass("my hydrated iconRed");
        setQuestClass("riskRed iconRed");
    }
    function almostForget(){
        SetNameIcon("help-circle");
        setHide("question");
        setShow("hide");
        SetBackCard("hide");
        SetNameClass("my hydrated iconOrange");
        setQuestClass("riskRed iconOrange");
    }
    function remember(){
        SetNameIcon("chevron-down-circle");
        setHide("question");
        setShow("hide");
        SetBackCard("hide");
        SetNameClass("my hydrated iconGreen");
        setQuestClass("riskRed iconGreen");
    }

    return(
    <>
    <div className={hide} key={props.index}><h2 className={questClass}>Pergunta {props.index +1}</h2><ion-icon onClick={questSelected} name={nameIcon} class={nameClass}></ion-icon></div>
    <div className={show} ><h3>{props.quest}</h3><img className="iconArrowuCurve" src="./img/icon.svg" onClick={teste}/></div> 
    <div className={backCard} ><h3>{props.response}</h3>
        <div className="response">
         <div className="red" onClick={forget}><h4>Não Lembrei</h4></div> <div className="orange" onClick={almostForget}><h4>Quase não <br/> lembrei</h4></div> <div className="green" onClick={remember}><h4>Zap!</h4></div>
        </div>
    </div> 
    </>
    )
}




function Questions({countQuest,setCountQuest}){
      const question=[{number:11, quest:"O que é JSX?", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:22, quest:"O que é JSX?", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:33, quest:"O que é JSX?", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:44, quest:"O que é JSX?", response: "Uma extensão de linguagem do JavaScript", fixed:false}];
      console.log(countQuest);
    return( 
     <div className="questions">
          <div className="top"><img src="./img/logo.png" className="smallLogo"/> <h1>ZapRecall</h1></div>
         {question.map((itens,index)=>(<Question countQuest={countQuest} setCountQuest={setCountQuest} quest={itens.quest} number={itens.number} fixed={itens.fixed} response={itens.response} index={index} />))}
     </div>
    )
}
export default Questions;