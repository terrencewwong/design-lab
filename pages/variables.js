// @flow
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Header from '../components/header'
import WebpageLayout from '../design-system/webpage-layout'

const PlusWrapper = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-family: Monaco, sans-serif;
  font-size: 16px;
  border: none;
  background-color: #1ce;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #1de;
  }
`
const Plus = props => <PlusWrapper {...props}>+</PlusWrapper>

const MinusWrapper = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-family: Monaco, sans-serif;
  font-size: 16px;
  border: none;
  background-color: #1ce;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #1de;
  }
`
const Minus = props => <MinusWrapper {...props}>-</MinusWrapper>

class AddVariable extends React.Component<*, {
  isEditing: boolean
}> {
  state = {
    isEditing: false
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  renderEditMode () {
    return <Minus onClick={this.toggleEdit} />
  }

  renderAddMode () {
    return <Plus onClick={this.toggleEdit} />
  }

  render () {
    const { isEditing } = this.state
    return isEditing
      ? this.renderEditMode()
      : this.renderAddMode()
  }
}

export default class Components extends React.Component<*> {
  render () {
    // The url prop is injected by next.js
    const { url: { pathname } } = this.props

    return (
      <div>
        <Header pathname={pathname} />
        <WebpageLayout>
          <AddVariable />
        </WebpageLayout>
      </div>
    )
  }
}
