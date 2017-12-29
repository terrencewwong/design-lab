// @flow
import React from 'react'
import redirect from '../lib/redirect'

export default class Index extends React.Component<*> {
  static async getInitialProps (context: Object) {
    redirect(context, '/components')
  }

  render () {
    throw new Error('Forgot to redirect / to /components?')
  }
}
