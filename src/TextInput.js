import React from 'react'
import {css} from 'emotion'

export default class TextInput extends React.Component {

    render() {

        return (
            <input
                id={this.props.id}
                type="text"
                placeholder={this.props.placeholder}
                disabled={this.props.disabled}
                className={css`
                    padding: 16px 20px;
                    width: 100%;
                    background: #fafafa;
                    border: 1px solid #ced4da;
                    box-shadow: none;
                    border-radius: 4px;
                    font-size: 16px;
                    -webkit-appearance: none;
                    &:focus {
                        background-color: #fff;
                        border-color: #000;
                        outline: 0;
                    }
                `}
                value={this.props.value || ''}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = e => {
        this.props.onChange({
            id: this.props.id,
            value: e.target.value
        })
    }
}