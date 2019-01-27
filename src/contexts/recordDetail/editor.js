import React from 'react'
import TextInput from '@cmds/text-input'
import {css} from 'emotion'

export default class SingleLineTextField extends React.Component {

    render() {

        return (
            <TextInput
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
                value={this.props.text}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = ({value}) => {

        this.props.onChange({
            id: this.props.id,
            text: value
        })
    }
}