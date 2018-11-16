import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'
import RecordDetailEditor from './contexts/recordDetail/editor'
import RecordDetailReadOnly from './contexts/recordDetail/readOnly'
import RecordGalleryCard from './contexts/recordGalleryCard'

export default class SingleLineTextField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        text: PropTypes.string,
        onChange: PropTypes.func
    }

    render() {

        const {contextId, roleId} = this.props


        if (contextId === 'recordDetail' && roleId === 'editor') {
            return (
                <RecordDetailEditor
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordDetail' && roleId === 'readOnly') {
            return (
                <RecordDetailReadOnly
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {
            return (
                <RecordGalleryCard
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