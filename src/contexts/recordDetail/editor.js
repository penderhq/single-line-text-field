import React from 'react'
import TextInput from '@pndr/text-input'
import {css} from 'emotion'

export default class SingleLineTextField extends React.Component {

    render() {

        return (
            <TextInput
                className={css`
                    background-color: #fff;
                    border: 1px solid #d9d9d9;
                    border-radius: 3px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    height: 38px;
                    line-height: 1.42857;
                    padding: 5px 15px;
                    transition: border-color .15s ease-in-out;
                    width: 100%;
                    &:focus {
                        -webkit-transition-duration: 0s;
                        border-color: #07f;
                        outline: 0;
                        transition-duration: 0s;
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