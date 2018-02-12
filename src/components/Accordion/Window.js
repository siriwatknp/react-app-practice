import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ResizeSensor from 'css-element-queries/src/ResizeSensor'

class Window extends React.Component {

  state = {
    currentHeight: null,
  }

  static propTypes = {
    active: PropTypes.bool.isRequired,
    style: PropTypes.object,
    activeStyle: PropTypes.object,
    hiddenStyle: PropTypes.object,
    activeClassName: PropTypes.string,
    hiddenClassName: PropTypes.string,
    renderContent: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    style: {},
    activeStyle: {},
    hiddenStyle: {},
    className: '',
    activeClassName: 'active',
    hiddenClassName: 'hidden',
  }

  componentDidMount() {
    console.log('this.content', this.content)
    if (this.content) {
      new ResizeSensor(this.content, () => {
        this.setContentHeight(this.content.clientHeight)
      })

      this.setContentHeight(this.content.clientHeight)
    }
  }

  setContentHeight = (newHeight) => {
    this.setState({ currentHeight: newHeight })
  }

  setRef = (ref) => {
    this.content = ref
  }

  renderContent = () => {
    return this.props.renderContent({ innerRef: this.setRef, currentHeight: this.state.currentHeight })
  }

  render() {
    const { currentHeight } = this.state
    const {
      active,
      style,
      activeStyle,
      hiddenStyle,
      className,
      activeClassName,
      hiddenClassName,
      renderContent,
      ...props
    } = this.props
    return (
      <div
        className={cx(className, active ? activeClassName : hiddenClassName)}
        style={{
          ...style,
          height: active ? (currentHeight || 'auto') : 0,
          overflow: 'hidden',
          transition: '0.3s',
          verticalAlign: 'top',
          ...active ? activeStyle : hiddenStyle,
        }}
        {...props}
      >
        {renderContent ? (
          this.renderContent()
        ) : (
          <div ref={this.setRef}>
            {this.props.children}
          </div>
        )}
      </div>
    )
  }
}

export default Window
