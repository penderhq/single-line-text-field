import React from 'react'
import {css} from 'emotion'

export default class SingleLineTextField extends React.Component {

    render() {

        return (
            <input
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                id={this.props.id}
                type="text"
                className={css`
                    -webkit-appearance: none;
                    background-color: rgba(0, 0, 0, 0.05);
                    border: 2px solid transparent;
                    border-radius: 3px;
                    padding: 6px;
                    width: 100%;
                    max-width: 220px;
                    &:focus {
                        outline: none;
                        border-color: rgba(0, 0, 0, 0.25);
                    }
                `}
                value={this.props.text || ''}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = e => {

        this.props.onChange({
            id: this.props.id,
            text: e.target.value
        })
    }
}