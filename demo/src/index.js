import React, {Component} from 'react'
import {render} from 'react-dom'
import {Canvas, Box, Heading, Paragraph} from '@cmds/demo-utils'
import {css, injectGlobal} from 'emotion'
import SingleLineTextField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
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
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>
                With editor role
            </Paragraph>
            <Box>
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    text={this.state.text}
                    onChange={({text}) => this.setState({text})}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
            <Paragraph>Normal sentence and read only role</Paragraph>
            <Box>
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    text={this.state.text}
                />
            </Box>
            <Paragraph>Very long sentence and read only role</Paragraph>
            <Box>
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                />
            </Box>
            <Heading>
                Record Gallery Card Context
            </Heading>
            <Box>
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    text={this.state.text}
                />
            </Box>
            <Heading>
                Record List Item Context
            </Heading>
            <Box>
                <SingleLineTextField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    text={this.state.text}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
