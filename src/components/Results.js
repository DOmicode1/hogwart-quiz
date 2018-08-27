import React from 'react';

export class Results extends React.Component 
{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick()
    {
        if (this.props.points > 486) {
            this.state({ 
                text: 'A no tak, dobra, jasne, GRYFFINDOR!'
            });
        }
        else if (this.props.points > 374) {
            this.state({
                text: 'Gdize by cię przydzielić? Zobaczmy. Już wiem, HUFFLEPUFF!'
            });
        }
        else if (this.props.points > 262) {
            this.state({
                text: 'Masz szczęście, RAVENCLAW!'
            });
        }
        else {
            this.state({
                text: 'SLYTHERIN!'
            });
        }
    }
    render()
    {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Przydziel dom
                </button>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
}