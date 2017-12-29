// @flow
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { TabNavigation, Tab } from '../design-system/tab-navigation'
import Text from '../design-system/text'
import WebpageLayout from '../design-system/webpage-layout'

const StyledWebpageLayout = styled(WebpageLayout)`
  background-color: #f3f3f3;
`

const Header = ({ pathname } : { pathname: string }) => (
  <StyledWebpageLayout>
    <TabNavigation pathname={pathname}>
      <Tab prefetch href='/components'>components</Tab>
      <Tab prefetch href='/mixins'>mixins</Tab>
      <Tab prefetch href='/rules'>rules</Tab>
      <Tab prefetch href='/variables'>variables</Tab>
    </TabNavigation>
  </StyledWebpageLayout>
)

export default Header
