import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Work extends Component {
  render () {
    // const { data } = this.props
    let close = (
      <div
        className='close'
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )
    return (
      <article
        id='work'
        className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}>
        <h2 className='major'>Projets</h2>
        {close}
      </article>
    )
  }
}

Work.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}
