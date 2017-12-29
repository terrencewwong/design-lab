// @flow
import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export const TabNavigation = ({
  pathname,
  children,
  ...rest
}: {
  pathname: string,
  children: React.Node
}) => {
  const cloned = React.Children.map(children, child =>
    React.cloneElement(child, {
      active: pathname && pathname === child.props.href
    })
  )

  return (
    <div {...rest}>
      {cloned}
    </div>
  )
}

  //${props => props.active ? 'border-bottom: 2px solid #fb1;' : ''}
const StyledA = styled.a`
  display: inline-block;
  line-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  color: #333;
  ${props => props.active ? 'box-shadow: inset 0 -2px #fb1' : ''};

  &:hover {
    background-color: #e5e5e5;
  }
`

export const Tab = ({
  active,
  href,
  prefetch,
  ...rest
} : {
  active?: boolean,
  href: string,
  prefetch?: boolean
}) => (
  <Link href={href} prefetch={prefetch}>
    <StyledA active={active} {...rest} />
  </Link>
)

