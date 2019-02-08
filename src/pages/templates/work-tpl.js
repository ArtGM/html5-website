import React, { Component } from 'react'
import PropTypes from 'prop-types'

/** Component */
import Layout from './../../components/layout'

export default class workTpl extends Component {
  render () {
    return <Layout>Hello</Layout>
  }
}

workTpl.propTypes = {
  data: PropTypes.object.isRequired
}
