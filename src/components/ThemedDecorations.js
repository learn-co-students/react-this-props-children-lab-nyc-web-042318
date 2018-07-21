// Code ThemedDecoration Component Here
import React, { Component } from 'react'

export default class ThemesDecorations extends Component {
  render () {
    const childrenAddedWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div>
        {childrenAddedWithProps}
      </div>
    )
  }
}
