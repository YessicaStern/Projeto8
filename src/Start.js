import React from "react";

function Start(){
    const [hideStart,setHideStart]=React.useState("start");
    
    return (
    <div className={hideStart}>
        <img src="./img/logo.png" className="logoStart"/>
        <h1>ZapRecall</h1>
        <button className="buttonStart" onClick={()=>{setHideStart("hide")}}><h2>Iniciar Recall!</h2></button>
    </div>)
    
}

export default Start;