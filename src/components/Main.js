import React from 'react'
import PropTypes from 'prop-types'
// import Intro from './Intro';
import Work from './Work'

class Main extends React.Component {
  render () {
    let close = (
      <div
        className='close'
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id='main'
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <Work
          data={this.props.data}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
        />

        <article
          id='about'
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}>
          <h2 className='major'>Compétences</h2>
          <span className='image main'>{/* <img src={pic03} alt='' /> */}</span>
          <p>
            <h3>Site internet:</h3>
            <ul>
              <li>Création sur mesure</li>
              <li>Modification style, refonte et ajout de fonctionnalités sur l’existant</li>
              <li>Optimisation du code source pour le référencement</li>
              <li>Responsive design (adaptation sur tout support, smartphone, tablette …)</li>
            </ul>
            <h3>Langage du web:</h3>
            <ul>
              <li>HTML5/CSS3</li>
              <li>Javascript ES Next</li>
              <li>PHP Objet</li>
            </ul>
            <h3>Framework Front end:</h3>
            <ul>
              <li>SASS/SCSS</li>
              <li>Three.js (animation 3D)</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React & Gatsby</li>
            </ul>
            <h3>Logiciels:</h3>
            <ul>
              <li>Suite Adobe (Photoshop, Illustrator, Première, XD, Indesign)</li>
              <li>Visual Studio Code</li>
            </ul>
            <h3>Versionning:</h3>
            <ul>
              <li>GitHub</li>
              <li>BitBucket</li>
            </ul>
            <h3>CMS:</h3>
            <ul>
              <li>
                WordPress:
                <div>
                  J’ai développé plusieurs projets en utilisant WordPress. Ayant une très bonne connaissance de ce CMS,
                  je suis à même de développer un site Web sur mesure, du Portfolio d’artiste au E-commerce. Je réalise
                  les thèmes en respectant les bonnes pratiques et les standards de la communauté.
                </div>
              </li>
              <li>
                Prestashop:
                <div>
                  J'ai réalisé plusieurs sites e-commerce, pour le compte de l'agence Dream me up basé à Plescop qui est
                  spécialisée dans ce CMS. Il est performant et offre un panel de fonctionnalités complet pour tout
                  types de vente.
                </div>
              </li>
              <li>
                Contentful:
                <div>
                  CMS "Headless", pour site sans serveur, extrèmement souple et rapide. C'est le cms utilisé sur ce
                  site.
                </div>
              </li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id='contact'
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout
            ? 'timeout'
            : ''}`}
          style={{ display: 'none' }}>
          <h2 className='major'>Contact</h2>
          <form name='contact-form' method='POST' data-netlify='true'>
            <div className='field half first'>
              <label htmlFor='name'>Nom</label>
              <input type='text' name='name' id='name' />
            </div>
            <div className='field half'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' id='email' />
            </div>
            <div className='field'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' rows='4' />
            </div>
            <ul className='actions'>
              <div data-netlify-recaptcha='true' />
              <li>
                <input type='submit' value='Envoyer' className='special' />
              </li>
              <li>
                <input type='reset' value='Reset' />
              </li>
            </ul>
          </form>
          {/* <ul className='icons'>
            <li>
              <a href='#' className='icon fa-twitter'>
                <span className='label'>Twitter</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon fa-facebook'>
                <span className='label'>Facebook</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon fa-instagram'>
                <span className='label'>Instagram</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon fa-github'>
                <span className='label'>GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
}

export default Main
