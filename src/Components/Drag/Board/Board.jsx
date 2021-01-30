import React from 'react'

import './Board.css'

//board
const draggables = document.querySelectorAll(".cards");
const containers = document.querySelectorAll(".board")
export default class Board extends React.Component {
    

    onDrop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')

        const card = document.getElementById(card_id)

        e.target.appendChild(card)
    }

    onDragover = (e) => {
        e.preventDefault();
          draggables.forEach((draggable) => {
            draggable.addEventListener("dragstart", () => {
                draggable.classList.add("dragging")
            });
            draggable.addEventListener("dragend", () => {
                draggable.classList.remove("dragging");
            });
        });
          containers.forEach((container) => {
              container.addEventListener("dragover", (e)=> {
                  e.preventDefault()

                  const afterElement = this.getDragAfterElement(container, e.clientY,e.clientX);
                  const draggable = document.querySelector('.draggable');
                  if (afterElement === null) {
                      container.appendChild(draggable);
                  } else {
                      container.insertBefore(draggable, afterElement);
                  }
              });
          });
    }

    getDragAfterElement = (container, y, x) => {
        const draggableElements = [ ...container.querySelectorAll(".draggable:not(.dragging")];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y + x - box.top - box.left - box.height - box.width / 30

            if (offset < 0 && offset > closest.offset) {
                return {offset: offset, element: child};
            } else {
                return closest
            }
        },
        { offset: Number.NEGATIVE_INFINITY }
        ).element;  
    }

    render(){
        return(
            <div
                id={this.props.id}
                className={this.className}
                onDrop={this.onDrop}
                onDragOver={this.onDragover}
                >
                { this.props.children}
                
            </div>
        )
    }
}