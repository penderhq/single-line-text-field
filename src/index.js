import React from 'react'
import {css} from 'emotion'
import TextInput from './TextInput'
import TextLabel from './TextLabel'

export default class SingleLineTextField extends React.Component {

    render() {

        const {contextId, roleId} = this.props


        if (contextId === 'recordDetail' && roleId === 'editor') {
            return (
                <TextInput
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordDetail' && roleId === 'readOnly') {
            return (
                <TextLabel
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {
            return (
                <div
                    className={css`
                        position: relative;
                        font-size: 13px;
                        height: 100%;
                        padding: 0;
                        margin: 0;
                        vertical-align: top;
                        background: white;
                        color: #111111;
                        cursor: default;
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
                        {this.props.value}
                    </div>
                </div>
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}