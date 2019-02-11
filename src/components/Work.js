import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Work extends Component {
  render () {
    const { data } = this.props
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
        {data.allContentfulProject.edges.map((edge) => (
          <figure className='project-images-container'>
            <img src={edge.node.mockupProjet.fluid.src} alt={edge.node.titreDuProjet} className='project-images' />
            <a href={edge.node.projectUrl} title='voir le site' target='_blank' rel='noopener noreferrer nofollow'>
              {edge.node.titreDuProjet}
            </a>
          </figure>
        ))}
        {close}
      </article>
    )
  }
}

Work.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}
