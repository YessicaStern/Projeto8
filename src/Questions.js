import React from "react";
import Question from "./Question";

function Questions({countQuest,setCountQuest, countType,setCountType}){
      const question=[{number:11, quest:"O que é JSX? 1111", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:22, quest:"O que é JSX? 2222", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:33, quest:"O que é JSX? 3333", response: "Uma extensão de linguagem do JavaScript", fixed:false},
            {number:44, quest:"O que é JSX? 4444", response: "Uma extensão de linguagem do JavaScript", fixed:false}];

            question.sort(comparador);
            function comparador() { 
	return Math.random() - 0.5; 
}
      
    return( 
     <div className="questions">
          <div className="top"><img src="./img/logo.png" className="smallLogo"/> <h1>ZapRecall</h1></div>
         {question.map((itens,index)=>(<Question countType={countType} setCountType={setCountType} countQuest={countQuest} setCountQuest={setCountQuest} quest={itens.quest} number={itens.number} fixed={itens.fixed} response={itens.response} index={index} />))}
     </div>
    )
}
export default Questions;