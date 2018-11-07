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
            <h2>Default</h2>
            <Viewport>
                <div
                    className={css`
                        width: 600px;
                    `}
                >
                    <SingleLineTextField
                        value={'A delightful sentence.'}
                        onChange={log('onChange')}
                    />
                </div>
            </Viewport>
            <h2>Empty</h2>
            <Viewport>
                <div
                    className={css`
                        width: 600px;
                    `}
                >
                    <SingleLineTextField
                        value={null}
                        onChange={log('onChange')}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
