import React from "react";

function Question(props){
    const [hide,setHide]=React.useState("question");
    const [show,setShow]=React.useState("hide");
    const [backCard, SetBackCard]=React.useState("hide")
    const [nameIcon, SetNameIcon]=React.useState("play-outline");
    const [nameClass,SetNameClass]= React.useState("");
    const [questClass,setQuestClass]=React.useState("questionColor");
    const [count,setCount]=React.useState(0); // ver dps
 
    console.log(props.countType);
    // console.log(props);

    function questSelected(){
        if(count==0){
        setHide("hide");
        setShow("card");
        setCount(count+1);
    }   
    }

    function cardBack(){    
        setCount(count+1);
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
        props.setCountQuest(props.countQuest+1);
        console.log(props.countType);
        props.setCountType([...props.countType,"close-circle"]);
        
    }
    function almostForget(){
        SetNameIcon("help-circle");
        setHide("question");
        setShow("hide");
        SetBackCard("hide");
        SetNameClass("my hydrated iconOrange");
        setQuestClass("riskRed iconOrange");
        props.setCountQuest(props.countQuest+1);
        props.setCountType([...props.countType,"help-circle"]);
    }
    function remember(){
        SetNameIcon("chevron-down-circle");
        setHide("question");
        setShow("hide");
        SetBackCard("hide");
        SetNameClass("my hydrated iconGreen");
        setQuestClass("riskRed iconGreen");
        props.setCountQuest(props.countQuest+1);
        props.setCountType([...props.countType,"chevron-down-circle"]);
    }

    return(
    <>
    <div className={hide} key={props.index}><h2 className={questClass}>Pergunta {props.index +1}</h2><ion-icon onClick={questSelected} name={nameIcon} class={nameClass}></ion-icon></div>
    <div className={show} ><h3>{props.quest}</h3><img className="iconArrowuCurve" src="./img/icon.svg" onClick={cardBack}/></div> 
    <div className={backCard} ><h3>{props.response}</h3>
        <div className="response">
         <div className="red" onClick={forget}><h4>Não Lembrei</h4></div> <div className="orange" onClick={almostForget}><h4>Quase não <br/> lembrei</h4></div> <div className="green" onClick={remember}><h4>Zap!</h4></div>
        </div>
    </div> 
    </>
    )
}
export default Question;