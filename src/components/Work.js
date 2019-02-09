import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'

//  nst ProjectSingle = ({ node }) => (
// <img src={node.mockupProjet.fluid.src}>{/* <Link to={node.slug}>{node.titreDuProjet}</Link> */}</img>
// );

//const Work = ({ data }) => <ul>{data.allContentfulProject.edges.map((edge) => <ProjectSingle node={edge.node} />)}</ul>;
//export default Work;
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
        <Carousel>
          {data.allContentfulProject.edges.map((edge) => <img src={edge.node.mockupProjet.fluid.src} />)}
        </Carousel>
        {close}
      </article>
    )
  }
}

Work.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}
