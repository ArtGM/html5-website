import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

/** Component */
import Layout from './../../components/layout'

export default class workTpl extends Component {
  render () {
    const { titreDuProjet, description, mockupProjet, slug } = this.props.data.contentfulProject
    return (
      <Layout>
        <div ref={this.props.setWrapperRef} id='main' style={{ display: 'block' }}>
          <article id={slug} className='active timeout'>
            <h1>{titreDuProjet}</h1>
            <img src={mockupProjet.fluid.src} />
            <p>{description.description}</p>
          </article>
        </div>
        <div id='bg' />
      </Layout>
    )
  }
}

workTpl.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query workQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      titreDuProjet
      slug
      description {
        description
      }
      mockupProjet {
        fluid(maxWidth: 700) {
          src
        }
      }
    }
  }
`
