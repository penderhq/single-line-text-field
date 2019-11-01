import React from 'react'
import TextInput from '@pndr/text-input'
import {css} from 'emotion'

export default class SingleLineTextField extends React.Component {

    render() {

        return (
            <TextInput
                className={css`
                    background-color: #fff;
                    border: none;
                    border-radius: 6px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    height: 38px;
                    line-height: 1.42857;
                    padding: 5px 15px;
                    transition: border-color .15s ease-in-out;
                    width: 100%;
                    box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
                    &:focus {
                        -webkit-transition-duration: 0s;
                        box-shadow: inset 0 0 0 2px #0022fd, 0 2px 4px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.1);
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