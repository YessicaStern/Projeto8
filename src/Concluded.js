import React from "react";


function Concluded({countQuest,countType}){
    let message;
    let image;
    let title;
    let classeButton="hide";
    function Reload(){
        window.location.reload();
    }
    if(countType.length===4){
     
        if(countType.includes("close-circle")){
            image="./img/sad.png";
            title= "Putz...";
            message=`Ainda faltam alguns...Mas não desanime!`;
            classeButton="button";
        }else{message=`Você não esqueceu de nenhum flashcard!`;
            image="./img/party.png";
            title= "Parabéns";
            classeButton="button";
        }
    }
    return(
        <div className="concluded">
            <div className="title"><img src={image}/> <h6>{title}</h6></div>
            <h2>{countQuest}/4 CONCLUÍDOS</h2> 
        <div><h5>{message}</h5>
             <div className="icons">{countType.map((type)=>{return (<ion-icon name={type}></ion-icon>);})} </div>
             <div className={classeButton} onClick={Reload}><h5>REINICIAR RECALL</h5></div>
        </div> 
        </div>
    )
}

export default Concluded;