import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.png'

const Header = (props) => (
  <header id='header' style={props.timeout ? { display: 'none' } : {}}>
    <div className='logo'>
      <img id='logo' src={logo} alt='logo arthur morisson' />
    </div>
    <nav>
      <ul>
        <li>
          <button
            className='a-type'
            onClick={() => {
              props.onOpenArticle('work')
            }}>
            Projets
          </button>
        </li>
        <li>
          <button
            className='a-type'
            onClick={() => {
              props.onOpenArticle('about')
            }}>
            Compétences
          </button>
        </li>
        <li>
          <button
            className='a-type'
            onClick={() => {
              props.onOpenArticle('contact')
            }}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
    <div className='content'>
      <div className='inner'>
        <h1>Arthur Morisson</h1>
        <p>
          Bonjour, <strong>je suis développeur web.</strong>
          <br /> Je réalise votre projet de <br /> <strong>site internet</strong> <br /> pour développer votre activité
          en ligne.
        </p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Header
