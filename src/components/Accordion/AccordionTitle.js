import React from 'react'
import PropTypes from 'prop-types'

const AccordionTitle = ({
  active,
  title,
  onClick,
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 12,
      border: '1px solid #a5a5a5',
    }}
  >
    <span>{title}</span>
    <span onClick={onClick}>{active ? 'less' : 'more'}</span>
  </div>
)

AccordionTitle.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
}
AccordionTitle.defaultProps = {
  active: false,
  title: '',
  onClick: () => {},
}

export default AccordionTitle
