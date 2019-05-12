import React from 'react'
import {css} from 'emotion'
import defaultEmptyRenderer from '../../defaultEmptyRenderer';

export default class SingleLineTextField extends React.Component {

    render() {

        if (!this.props.text) {
            return defaultEmptyRenderer()
        }

        return (
            <div
                className={css`
                    cursor: default;
                    outline: none;
                    display: flex;
                    vertical-align: middle;
                    height: auto;
                    position: relative;
                    white-space: normal;
                    box-shadow: none;
                    overflow: visible;
                    box-sizing: border-box;
                    background-color: transparent;
                `}
            >
                <div
                    className={css`
                        display: flex;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                    `}
                >
                    <div
                        className={css`
                            cursor: pointer;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        `}
                    >
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}