import React, {Component} from 'react';
import Clock from 'react-clock';

export default class ClockElem extends Component {

    state = {
        date: new Date(),
    };

    componentDidMount() {
        setInterval(
            () => this.setState({date: new Date()}),
            1000
        );
    };

    render() {
        return (
            <div>
                <div style={{
                    margin: "0 auto",
                    width: "fit-content"
                }}>
                    <Clock
                        value={this.state.date}
                        size={250}
                        hourHandWidth={8}
                        hourMarksWidth={8}
                        minuteHandWidth={6}
                        minuteMarksWidth={3}
                        secondHandWidth={2}
                        renderNumbers={true}
                        hourHandLength={60}
                        hourHandOppositeLength={20}
                        hourMarksLength={20}
                        minuteHandLength={88}
                        minuteHandOppositeLength={20}
                        minuteMarksLength={9}
                        secondHandLength={80}
                        secondHandOppositeLength={20}
                    />
                </div>
            </div>
        );
    }
}
