import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import without from 'lodash/without'
import Window from './Window'
import AccordionTitle from './AccordionTitle'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    const { defaultActiveKey, multiActive } = props
    this.state = {
      activeKey: defaultActiveKey || (multiActive ? [] : null),
    }
  }

  static propTypes = {
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
    panes: PropTypes.arrayOf(PropTypes.object),
    multiActive: PropTypes.bool,
  }

  static defaultProps = {
    panes: [],
    multiActive: false,
  }

  static Title = AccordionTitle

  handleTitleClick = (key) => {
    if (this.props.multiActive) {
      return this.setState(({ activeKey }) => ({
        activeKey: activeKey.indexOf(key) !== -1 ?
          without(activeKey, key)
          :
          activeKey.concat(key)
      }))
    }
    return this.setState(({ activeKey }) => ({
      activeKey: activeKey === key ?
        null
        :
        key
    }))
  }

  checkIsActiveKey = (key) => {
    const { activeKey } = this.state
    if (this.props.multiActive) {
      return activeKey.indexOf(key) !== -1
    }
    return activeKey === key
  }

  render() {
    const {
      className,
      panes,
    } = this.props
    return (
      <div className={cx(className)}>
        {panes.map(({
          key,
          renderTitle,
          renderContent,
        }) => (
          <div key={key}>
            {renderTitle({ onClick: () => this.handleTitleClick(key), active: this.checkIsActiveKey(key) })}
            <Window active={this.checkIsActiveKey(key)} renderContent={renderContent} />
          </div>
        ))}
      </div>
    )
  }
}

export default Accordion
