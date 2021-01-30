import React from 'react';

export default class Card extends React.Component {

    onDragStart = (e) => {
        const target = e.target

        e.dataTransfer.setData('card_id', target.id)

        // setTimeout(() => {
        //     target.style.display = "none";
        // }, 0);
    }

    onDragOver = (e) => {
        e.stopPropagation()
    }

    render(){
        return(
            <div
                id={this.props.id}
                draggable
                className={this.props.className}
                onDragStart={this.onDragStart}
                onDragOver={this.onDragOver}
            >
                {this.props.children}
            </div>
        )
    }
}