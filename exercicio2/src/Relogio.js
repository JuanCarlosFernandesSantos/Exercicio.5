import React from 'react';

class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            date: new  Date()
        };
    }
    render() {
        const {date} = this.state;
        var timing = date.getHours("00") + ":" + date.getMinutes("00") + ":" + date.getSeconds("00")
        return (
            <div>
                <h1>Olá, React!</h1>
                <p>
                    Agora é: {timing}
                </p>
            </div>
        )
    }
}

export default Relogio;