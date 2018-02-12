import React from 'react'

class Content extends React.Component {

  state = {
    index: 3,
  }

  render() {
    const { index } = this.state
    const { innerRef } = this.props
    return (
      <div
        ref={innerRef}
        style={{
          height: index * 100,
          width: 200,
          background: '#a5a5a5',
          border: '1px solid #000000',
        }}
      >
        <span>height = {index * 100}</span>
        <button onClick={() => this.setState(({ index }) => ({ index: index + 1 }))}>
          +
        </button>
        <button onClick={() => this.setState(({ index }) => ({ index: index - 1 }))}>
          -
        </button>
      </div>
    )
  }
}

export default Content
