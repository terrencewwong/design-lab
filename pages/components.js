// @flow
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Header from '../components/header'
import WebpageLayout from '../design-system/webpage-layout'

export default class Components extends React.Component<*> {
  render () {
    // The url prop is injected by next.js
    const { url: { pathname } } = this.props

    return (
      <div>
        <Header pathname={pathname} />
        <WebpageLayout>
        </WebpageLayout>
      </div>
    )
  }
}
