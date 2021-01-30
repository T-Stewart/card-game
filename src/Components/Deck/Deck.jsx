import React from 'react'
import './Deck.css'
import clubs2 from '../Images/Deck/clubs-2.png'
import clubs3 from '../Images/Deck/clubs-3.png'
import clubs4 from '../Images/Deck/clubs-4.png'
import clubs5 from '../Images/Deck/clubs-5.png'
import clubs6 from '../Images/Deck/clubs-6.png'
import clubs7 from '../Images/Deck/clubs-7.png'
import clubs8 from '../Images/Deck/clubs-8.png'
import clubs9 from '../Images/Deck/clubs-9.png'
import clubs10 from '../Images/Deck/clubs-10.png'
import clubsJ from '../Images/Deck/clubs-jack.png'
import clubsQ from '../Images/Deck/clubs-queen.png'
import clubsK from '../Images/Deck/clubs-king.png'
import clubsA from '../Images/Deck/clubs-ace.png'
import spades2 from '../Images/Deck/spades-2.png'
import spades3 from '../Images/Deck/spades-3.png'
import spades4 from '../Images/Deck/spades-4.png'
import spades5 from '../Images/Deck/spades-5.png'
import spades6 from '../Images/Deck/spades-6.png'
import spades7 from '../Images/Deck/spades-7.png'
import spades8 from '../Images/Deck/spades-8.png'
import spades9 from '../Images/Deck/spades-9.png'
import spades10 from '../Images/Deck/spades-10.png'
import spadesJ from '../Images/Deck/spades-jack.png'
import spadesQ from '../Images/Deck/spades-queen.png'
import spadesK from '../Images/Deck/spades-king.png'
import spadesA from '../Images/Deck/spades-ace.png'
import hearts2 from '../Images/Deck/hearts-2.png'
import hearts3 from '../Images/Deck/hearts-3.png'
import hearts4 from '../Images/Deck/hearts-4.png'
import hearts5 from '../Images/Deck/hearts-5.png'
import hearts6 from '../Images/Deck/hearts-6.png'
import hearts7 from '../Images/Deck/hearts-7.png'
import hearts8 from '../Images/Deck/hearts-8.png'
import hearts9 from '../Images/Deck/hearts-9.png'
import hearts10 from '../Images/Deck/hearts-10.png'
import heartsJ from '../Images/Deck/hearts-jack.png'
import heartsQ from '../Images/Deck/hearts-queen.png'
import heartsK from '../Images/Deck/hearts-king.png'
import heartsA from '../Images/Deck/hearts-ace.png'
import diamonds2 from '../Images/Deck/hearts-2.png'
import diamonds3 from '../Images/Deck/diamonds-3.png'
import diamonds4 from '../Images/Deck/diamonds-4.png'
import diamonds5 from '../Images/Deck/diamonds-5.png'
import diamonds6 from '../Images/Deck/diamonds-6.png'
import diamonds7 from '../Images/Deck/diamonds-7.png'
import diamonds8 from '../Images/Deck/diamonds-8.png'
import diamonds9 from '../Images/Deck/diamonds-9.png'
import diamonds10 from '../Images/Deck/diamonds-10.png'
import diamondsJ from '../Images/Deck/diamonds-jack.png'
import diamondsQ from '../Images/Deck/diamonds-queen.png'
import diamondsK from '../Images/Deck/diamonds-king.png'
import diamondsA from '../Images/Deck/diamonds-ace.png'
import Deal from '../Images/deal.png'
import cardBack from '../Images/card-back.png'
import '../Drag/Board/Board.css'
import Board from '../Drag/Board/Board'
import Card from '../Drag/Card/Card'
// import $ from 'jquery'



export default class Deck extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
        deck: [
         {
            id: '2 of Clubs' ,
            image: clubs2,
            score: 2,
            suit: 'clubs'
            },
         {
            id: '3 of Clubs' ,
            image: clubs3,
            score: 3,
            suit: 'clubs'
            },
         {
            id: '4 of Clubs' ,
            image: clubs4 ,
            score: 4,
            suit: 'clubs'
            },
         {
            id: '5 of Clubs' ,
            image: clubs5,
            score: 5,
            suit: 'clubs'
            },
         {
            id: '6 of Clubs' ,
            image: clubs6 ,
            score: 6,
            suit: 'clubs'
            },
         {
            id: '7 of Clubs' ,
            image: clubs7 ,
            score: 7,
            suit: 'clubs'
            },
         {
            id: '8 of Clubs' ,
            image: clubs8 ,
            score: 8,
            suit: 'clubs'
            },
        {
            id: '9 of Clubs' ,
            image: clubs9,
            score: 9,
            suit: 'clubs'
            },
         {
            id: '10 of Clubs' ,
            image: clubs10,
            score: 10,
            suit: 'clubs'
            },
         {
            id: 'J of Clubs' ,
            image: clubsJ,
            score: 10,
            suit: 'clubs'
            },
         {
            id: 'Q of Clubs' ,
            image: clubsQ,
            score: 10,
            suit: 'clubs'
            },
         {
            id: 'K of Clubs' ,
            image: clubsK,
            score: 10,
            suit: 'clubs'
            },
         {
             id: 'A of Clubs' ,
            image: clubsA,
            score: 10,
            suit: 'clubs'
            },

          {
            id: '2 of Spades' ,
            image: spades2 ,
            score: 2,
            suit: 'spades'
            },
         {
            id: '3 of Spades' ,
            image: spades3,
            score: 3,
            suit: 'spades'
            },
         {
            id: '4 of Spades' ,
            image: spades4,
            score: 4,
            suit: 'spades'
            },
         {
            id: '5 of Spades' ,
            image: spades5,
            score: 5,
            suit: 'spades'
            },
         {
            id: '6 of Spades' ,
            image: spades6,
            score: 6,
            suit: 'spades'
            },
         {
            id: '7 of Spades' ,
            image: spades7,
            score: 7,
            suit: 'spades'
            },
         {
            id: '8 of Spades' ,
            image: spades8,
            score: 8,
            suit: 'spades'
            },
        {
            id: '9 of Spades' ,
            image: spades9,
            score: 9,
            suit: 'spades'
            },
         {
            id: '10 of Spades' ,
            image: spades10,
            score: 10,
            suit: 'spades'
            },
         {
            id: 'J of Spades' ,
            image: spadesJ,
            score: 10,
            suit: 'spades'
            },
         {
            id: 'Q of Spades' ,
            image: spadesQ,
            score: 10,
            suit: 'spades'
            },
         {
            id: 'K of Spades' ,
            image: spadesK,
            score: 10,
            suit: 'spades'
            },
         {
             id: 'A of Spades' ,
            image: spadesA,
            score: 10,
            suit: 'spades'
            },

          {
            id: '2 of Hearts' ,
            image: hearts2,
            score: 2,
            suit: 'hearts'
            },
         {
            id: '3 of Hearts' ,
            image: hearts3,
            score: 3,
            suit: 'hearts'
            },
         {
            id: '4 of Hearts' ,
            image: hearts4,
            score: 4,
            suit: 'hearts'
            },
         {
            id: '5 of Hearts' ,
            image: hearts5,
            score: 5,
            suit: 'hearts'
            },
         {
            id: '6 of Hearts' ,
            image: hearts6,
            score: 6,
            suit: 'hearts'
            },
         {
            id: '7 of Hearts' ,
            image: hearts7,
            score: 7,
            suit: 'hearts'
            },
         {
            id: '8 of Hearts' ,
            image: hearts8,
            score: 8,
            suit: 'hearts'
            },
        {
            id: '9 of Hearts' ,
            image: hearts9,
            score: 9,
            suit: 'hearts'
            },
         {
            id: '10 of Hearts' ,
            image: hearts10,
            score: 10,
            suit: 'hearts'
            },
         {
            id: 'J of Hearts' ,
            image: heartsJ,
            score: 10
            },
         {
            id: 'Q of Hearts' ,
            image: heartsQ,
            score: 10,
            suit: 'hearts'
            },
         {
            id: 'K of Hearts' ,
            image: heartsK,
            score: 10,
            suit: 'hearts'
            },
         {
             id: 'A of Hearts' ,
            image: heartsA,
            score: 10,
            suit: 'hearts'
            },
                     {
            id: '2 of Diamonds' ,
            image: diamonds2,
            score: 2,
            suit: 'diamonds'
            },
         {
            id: '3 of Diamonds' ,
            image: diamonds3,
            score: 3,
            suit: 'diamonds'
            },
         {
            id: '4 of Diamonds' ,
            image: diamonds4,
            score: 4,
            suit: 'diamonds'
            },
         {
            id: '5 of Diamonds' ,
            image: diamonds5,
            score: 5,
            suit: 'diamonds'
            },
         {
            id: '6 of Diamonds' ,
            image: diamonds6,
            score: 6,
            suit: 'diamonds'
            },
         {
            id: '7 of Diamonds' ,
            image: diamonds7,
            score: 7,
            suit: 'diamonds'
            },
         {
            id: '8 of Diamonds' ,
            image: diamonds8,
            score: 8,
            suit: 'diamonds'
            },
        {
            id: '9 of Diamonds' ,
            image: diamonds9,
            score: 9,
            suit: 'diamonds'
            },
         {
            id: '10 of Diamonds' ,
            image: diamonds10,
            score: 10,
            suit: 'diamonds'
            },
         {
            id: 'J of Diamonds' ,
            image: diamondsJ,
            score: 10,
            suit: 'diamonds'
            },
         {
            id: 'Q of Diamonds' ,
            image: diamondsQ,
            score: 10,
            suit: 'diamonds'
            },
         {
            id: 'K of Diamonds' ,
            image: diamondsK,
            score: 10,
            suit: 'diamonds'
            },
         {
             id: 'A of Diamonds' ,
            image: diamondsA,
            score: 10,
            suit: 'diamonds'
            },
        ],    
        randomDeck: [],
        index: 0,
        currentScore: [],
        addScore: [],
        suit: [],
        wastePile: false,
        newCard: false,
        cardPosition: { position: 'relative'},
        dealCardPlacement: ['#card-spot1','#card-spot2','#card-spot3','#card-spot4','#card-spot5','#card-spot6','#card-spot7','#card-spot8','#card-spot9','#card-spot10'],
        cardPlacement: ['#card-spot11','#card-spot12','#card-spot13','#card-spot14','#card-spot15','#card-spot16','#card-spot17','#card-spot18','#card-spot19','#card-spot20','#card-spot21','#card-spot22','#card-spot23','#card-spot24','#card-spot25','#card-spot26','#card-spot27','#card-spot28','#card-spot29','#card-spot30','#card-spot31','#card-spot32','#card-spot33','#card-spot34','#card-spot35','#card-spot36','#card-spot37','#card-spot38','#card-spot39','#card-spot40','#card-spot41','#card-spot42','#card-spot43','#card-spot44','#card-spot45','#card-spot46','#card-spot47','#card-spot48','#card-spot49','#card-spot50','#card-spot51','#card-spot52'],
        randomNumber: []
        }
        
    }

    dropEvent = () => {
       document
            .querySelector('#waste-pile')
            .addEventListener("drop", this.wastePile)

    }
    
    newCard = () => {
      this.setState({newCard: true})
     
    }

    index = () => {
   
   }

    displayCard = () => {
       let random  = [Math.floor(Math.random()* 42)] 
       const deckRest = this.state.randomDeck.slice(10,52)
        if(this.state.index + 1 === 42) {
          this.setState({
        index: 0,
         });
      } else {
         this.setState({
         index: this.state.index + 1,
         });

     }
       
        
          if(this.state.newCard === true){
            return(
               <Card className="draggable"  draggable>
                   <img src={deckRest[this.state.index]}  alt="" className="cards" id={this.state.cardPlacement[random]}/>
                 
               </Card> 
               )
            };
    };
         
   

    wastePile = () => {
      this.setState({
                  wastePile: true,
                  newCard: false
               });
       
    }

    randomDeck = () => {  
        const tenDeck = []
        const scoreStart = [] 
        const suitStart = []
        for( let i = 0; i < 52; i++ ){
        let randomIndex = this.state.deck[Math.floor(Math.random()* 52)]  
        tenDeck.push([randomIndex.image])
        scoreStart.push(randomIndex.score)
        suitStart.push(randomIndex.suit)
        } 
        const add = (a, b) => a + b
        this.setState({currentScore: scoreStart.slice(0,10).reduce(add)})
        this.setState({addScore: scoreStart.slice(10,52)})
        this.setState({randomDeck: tenDeck}) 
        this.setState({suit: suitStart})   
       
    }



    render() {
       
        return (
            <div className="card-table">
                 <div className="container" id="top-container">
                    <div id="pick-up">
                        <img src={cardBack} onClick={this.newCard} alt=""/>
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
                <Board className="board" id="bottom-container">
                    <div >{this.displayCard()} </div>
                </Board>
                  
        </div>
        )
    }

    
}
