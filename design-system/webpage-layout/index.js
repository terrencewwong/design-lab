// @flow
import * as React from 'react'
import styled from 'styled-components'
import { wrapperStyles, contentStyles } from './default-styles'

const Wrapper = styled.div`
  ${wrapperStyles}
`

const Centered = styled.div`
  ${contentStyles}
`

const WebpageLayout = ({
  children,
  ...rest
}: {
  children: React.Node
}) => (
  <Wrapper {...rest}>
    <Centered>
      {children}
    </Centered>
  </Wrapper>
)

export default WebpageLayout
