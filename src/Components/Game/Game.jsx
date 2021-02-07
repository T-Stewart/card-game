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
        index: 0,
        wastePile: false,
        newCard: false,
        cardPosition: { position: 'relative'},
        deal: false,
        score: 0
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

      addScore = () => {
      this.newCard()

          this.setState({
             score: this.state.score+ this.state.addScore[this.state.index+1]
          }) 
   }

   score = () => {
      let scoreStart = [];
       for( let i=0; i<10; i++){
          scoreStart.push(Deck[i].score) 
         };
         if(this.state.deal === true){
            return(
               <div>
                  <h1 className="score">
                     {scoreStart.reduce((a,b) => a+b, 0)}
                  </h1>
               </div>
            );
         };
   };

   displayCard = () => {
      let newCards = Deck.slice(10,52)

        
         
         if (this.state.newCard === true) {   
            console.log(newCards[this.state.index].suit)             
            return(
               <Card className="draggable" draggable >
                  <img  className="cards"  key={newCards[this.state.index].suit} src={newCards[this.state.index].image} value={newCards[this.state.index].score} id={`card-spot${this.state.index}`}alt=""/>
               </Card>
                           
               )
         }
      
         

      
   }
      
         
      
      


   deal = () => {
     this.setState({deal: true})
   }; 

    render() {
   
        return (
            <div className="card-table">
                 <div className="container" id="top-container">
                    {/* <button onClick={this.addScore}>ADDSCORE</button> */}
                     <Board className="board" >
                    <div id="new-card" >
                       {this.displayCard()}
                    </div>
                      </Board>
                    <div id="pick-up">
                        <img src={cardBack} onClick={this.newCard} alt=""/>
                    </div>
                     <img onClick={this.deal} src={Deal} alt=""/> 
                     <Board className="board"   >
                        <div id="waste-pile" onDragEnter={this.dropEvent} ></div>   
                    </Board>
                    <div >
                       {this.score()}
                        </div>
                    </div>
                    <div className="board">
                        <Board className="board" id="put-down"></Board>
                        <Board className="board" id="put-down"></Board>
                        <Board className="board" id="put-down"></Board>
                </div>
                <Board className="board" id="middle-container">
                   {
                      Deck.slice(0,10).map(({suit, image, score}, index) => {
                         if (this.state.deal === true) {
                            
                         return(
                            <Board className="board" id="card-container">
                            <Card className="draggable" draggable>
                               <img  className="cards" key={suit} src={image} value={score} id={`card-spot${index}`}alt=""/>
                            </Card>
                            </Board>
                         )
                         }
                      })
                   }
                </Board>   
        </div>
        )
    }
}
