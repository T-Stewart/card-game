import React from 'react'
import './Game.css'
import Deck from '../Cards/Deck'
import Deal from '../Images/deal.png'
import cardBack from '../Images/card-back.png'
import '../Drag/Board/Board.css'
import Board from '../Drag/Board/Board'
import Card from '../Drag/Card/Card'




export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
        randomDeck: [],
        index: 0,
        currentScore: [],
        addScore: [],
        suit: [],
        cardId: [],
        wastePile: false,
        newCard: false,
        cardPosition: { position: 'relative'},
        dealCardPlacement: ['#card-spot1','#card-spot2','#card-spot3','#card-spot4','#card-spot5','#card-spot6','#card-spot7','#card-spot8','#card-spot9','#card-spot10'],
        cardPlacement: ['#card-spot11','#card-spot12','#card-spot13','#card-spot14','#card-spot15','#card-spot16','#card-spot17','#card-spot18','#card-spot19','#card-spot20','#card-spot21','#card-spot22','#card-spot23','#card-spot24','#card-spot25','#card-spot26','#card-spot27','#card-spot28','#card-spot29','#card-spot30','#card-spot31','#card-spot32','#card-spot33','#card-spot34','#card-spot35','#card-spot36','#card-spot37','#card-spot38','#card-spot39','#card-spot40','#card-spot41','#card-spot42','#card-spot43','#card-spot44','#card-spot45','#card-spot46','#card-spot47','#card-spot48','#card-spot49','#card-spot50','#card-spot51','#card-spot52'],
        randomNumber: []
      }  
   };

   dropEvent = () => {
       document
            .querySelector('#waste-pile')
            .addEventListener("drop", this.wastePile, this.addScore)
   };
   wastePile = () => {
      this.setState({
         wastePile: true,
         newCard: false
         });
   };
    
   newCard = () => {
      this.setState({newCard: true})
         if(this.state.index + 1 === 42) {
            this.setState({
               index: 0
            });
         }else {
            this.setState({
               index: this.state.index + 1
            });
         };
         
   };

   

   displayCard = () => {
      const deckRest = this.state.randomDeck.slice(10,52);
        
         if(this.state.newCard === true){
            return(
               <Card className="draggable"  draggable>
                   <img 
                     src={deckRest[this.state.index]}  
                     alt="" 
                     className="cards" 
                     id={this.state.cardPlacement[this.state.index]}/>
               </Card> 
               );
         };         
   };

   addScore = () => {
      this.newCard()

          this.setState({
             currentScore: this.state.currentScore+ this.state.addScore[this.state.index+1]
          }) 
   }


         
   randomDeck = () => {  
      const tenDeck = [];
      const scoreStart = [];
      const suitStart = [];
      const idStart = [];

         for( let i = 0; i < 52; i++ ){
            let randomIndex = Deck[Math.floor(Math.random()* 52)];  ;
            tenDeck.push([randomIndex.image]);
            scoreStart.push(randomIndex.score);
            suitStart.push(randomIndex.suit);
            idStart.push(randomIndex.id)
      }; 
      
      const add = (a, b) => a + b
      this.setState({currentScore: scoreStart.slice(0,10).reduce(add)})
      this.setState({addScore: scoreStart.slice(10,52)})
      this.setState({randomDeck: tenDeck}) 
      this.setState({suit: suitStart})   
      this.setState({cardId: idStart})
    };

    render() {
       
        return (
            <div className="card-table">
                 <div className="container" id="top-container">
                    {/* <button onClick={this.addScore}>ADDSCORE</button> */}
                     <Board className="board" >
                    <div id="new-card" >{this.displayCard()} </div>
                      </Board>
                    <div id="pick-up">
                        <img src={cardBack} onClick={this.addScore} alt=""/>
                    </div>
                     <img onClick={this.randomDeck} src={Deal} alt=""/> 
                     <Board className="board"   >
                        <div id="waste-pile" onDragEnter={this.dropEvent} ></div>   
                    </Board>
                    <div >
                        <h1 className="score">{this.state.currentScore}</h1>
                        </div>
                    </div>
                    <div className="board">
                        <Board className="board" id="put-down"></Board>
                        <Board className="board" id="put-down"></Board>
                        <Board className="board" id="put-down"></Board>
                </div>
                <Board className="board" id="middle-container">
                   <Card className="draggable"  draggable  >
                      <img className="cards" id="card-spot1" src={this.state.randomDeck[0]} alt=""/>
                   </Card>
                   <Card className="draggable" draggable >
                      <img className="cards" id="card-spot2"  src={this.state.randomDeck[1]} alt=""/>
                   </Card>
                   <Card className="draggable"  draggable >
                      <img className="cards" id="card-spot3"  src={this.state.randomDeck[2]} alt=""/>
                   </Card>
                   <Card className="draggable"  draggable >
                      <img className="cards" id="card-spot4"  src={this.state.randomDeck[3]} alt=""/>
                   </Card>
                   <Card className="draggable"  draggable >
                      <img className="cards" id="card-spot5"  src={this.state.randomDeck[4]} alt=""/>
                   </Card>
                   <Card className="draggable"  draggable >
                      <img className="cards" id="card-spot6"  src={this.state.randomDeck[5]} alt=""/>
                   </Card>
                   <Card className="draggable"   draggable >
                      <img className="cards" id="card-spot7"  src={this.state.randomDeck[6]} alt=""/>
                   </Card>
                   <Card className="draggable"  draggable >
                      <img className="cards" id="card-spot8" src={this.state.randomDeck[7]} alt=""/>
                   </Card>
                   <Card className="draggable"  draggable >
                      <img className="cards" id="card-spot9"  src={this.state.randomDeck[8]} alt=""/>
                   </Card>
                   <Card className="draggable"  draggable >
                      <img className="cards" id="card-spot10"  src={this.state.randomDeck[9]} alt=""/>
                   </Card>
                </Board>   
        </div>
        )
    }

    
}
