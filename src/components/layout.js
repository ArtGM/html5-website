import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <React.Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Développeur web, création de sites internet à Lorient, Morbihan, Bretagne'
              },
              { name: 'keywords', content: 'Web, création de sites internet, lorient, vannes, développeur, wordpress' }
            ]}>
            <html lang='fr' />
          </Helmet>
          {children}
        </React.Fragment>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
