import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

class Test3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blockStyle: {
                height: 0,
                y: 53
            },
            textStyle: {
                opacity: 0
            }
        };
    }

    reset = () => {
        this.setState({
            blockStyle: {
                height: 0,
                y: 53
            },
            textStyle: {
                opacity: 1,
                y: 0
            }
        });
    }

    runTest3 = () => {
        this.setState({
            blockStyle: {
                height: spring(53),
                y: spring(0)
            },
            textStyle: {
                opacity: 0,
                y: 53
            }
        });

        //Animate this after 0.5 second
        setTimeout(() => {
            this.setState({
                blockStyle: {
                    height: spring(0),
                    y: spring(0)
                },
                textStyle: {
                    opacity: spring(1),
                    y: 0
                }
            })
        }, 500)
    }

    render() {
        const s = require('./Test3.scss');
        const {blockStyle, textStyle} = this.state;
        return (
            <div className={s.Test3}>
                <button className={s.button} onClick={this.runTest3}>Press it to see it!</button>
                <div className={s.container}>
                    <Motion style={blockStyle} onRest={this.reset}>
                    {({height, y}) => <div className={s.block} style={{
                        height,
                        transform: `translatedY(${y}px)`
                    }}></div>}
                    </Motion>
                    <Motion style={textStyle}>
                        {(textStyle) => <h1 style={textStyle}>Ha Trung Hung</h1>}
                    </Motion>
                </div>
            </div>
        );
    }
}

export default Test3;