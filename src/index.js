import React from 'react'
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

        return (
            <div>
                Not supported
            </div>
        )
    }
}