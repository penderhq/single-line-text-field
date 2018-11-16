import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import SingleLineTextField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}


class Demo extends Component {
    render() {
        return <div>
            <h1>SingleLineTextField Demo</h1>
            <p>Used for entering a single line of text.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for displaying the checkbox in a record detail.</p>
            <h4>
                Editor role
            </h4>
            <Viewport>
                <div
                    className={css`
                        width: 600px;
                    `}
                >
                    <SingleLineTextField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'editor'}
                        text={'A delightful sentence.'}
                        onChange={log('onChange')}
                    />
                </div>
            </Viewport>
            <h4>Read only role</h4>
            <Viewport>
                <div
                    className={css`
                        width: 600px;
                    `}
                >
                    <SingleLineTextField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        text={'A delightful sentence.'}
                        onChange={log('onChange')}
                    />
                </div>
            </Viewport>
            <h3>RecordGalleryCard context</h3>
            <h4>Read only role</h4>
            <Viewport>
                <div
                    className={css`
                        width: 220px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <SingleLineTextField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        text={'A delightful sentence.'}
                        onChange={log('onChange')}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
