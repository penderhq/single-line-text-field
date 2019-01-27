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

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

class Demo extends Component {

    state = {
        text: 'A delightful sentence.'
    }

    render() {
        return <div>
            <h1>SingleLineTextField Demo</h1>
            <p>Used for entering a single line of text.</p>
            <h2>
                State
            </h2>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
            <div
                className={css`
                        width: 600px;
                    `}
            >
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    text={this.state.text}
                    onChange={({text}) => this.setState({text})}
                />
            </div>
            <h2>Normal sentence</h2>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 450px;
                    `}
            >
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    text={this.state.text}
                />
            </div>
            <h2>Very long sentence</h2>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 450px;
                    `}
            >
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                />
            </div>
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 220px;
                        height: 22px;
                    `}
            >
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    text={this.state.text}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 220px;
                        height: 24px;
                    `}
            >
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    text={this.state.text}
                />
            </div>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
