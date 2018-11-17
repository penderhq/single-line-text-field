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
            <h5>Normal sentence</h5>
            <Viewport>
                <div
                    className={css`
                        width: 450px;
                        background-color: #fff;
                    `}
                >
                    <SingleLineTextField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        text={'A delightful sentence.'}
                    />
                </div>
            </Viewport>
            <h5>Very long sentence</h5>
            <Viewport>
                <div
                    className={css`
                        width: 450px;
                        background-color: #fff;
                    `}
                >
                    <SingleLineTextField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
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
                    />
                </div>
            </Viewport>
            <h3>RecordListItem context</h3>
            <h4>Read only role</h4>
            <Viewport>
                <div
                    className={css`
                        width: 220px;
                        height: 24px;
                        background-color: #fff;
                    `}
                >
                    <SingleLineTextField
                        id={'fld1'}
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                        text={'A delightful sentence.'}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
