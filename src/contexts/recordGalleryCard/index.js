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
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                className={css`
                        position: relative;
                        height: 100%;
                        padding: 0;
                        margin: 0;
                        outline: none;
                        display: flex;
                        flex-wrap: wrap;
                    `}
            >
                <div
                    className={css`
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                            max-width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        `}
                >
                    {this.props.text}
                </div>
            </div>
        )
    }
}