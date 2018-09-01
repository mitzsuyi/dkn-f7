import React from 'react';
import PropTypes from 'prop-types'
import {compose, withState, setPropTypes, withHandlers} from 'recompose'

const propTypes = {
  items: PropTypes.array.isRequired,
  toComponent: PropTypes.func.isRequired
}

const List = ({items, toComponent}) =>  {
  return items.map((item, index) => toComponent(item, index))
}

const enhance = compose(
  setPropTypes(propTypes)
)

export default enhance(List)