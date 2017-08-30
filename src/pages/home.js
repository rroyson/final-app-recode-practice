import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProfile } from '../db'

class Home extends React.Component {
  render() {
    const props = this.props
    return (
      <div>

        <article className="sans-serif">
          <div
            className="vh-100 dt w-100 tc bg-black-80 white-30 cover o-90"
            style={{
              'background-image':
                'url("http://www.iheartberlin.de/wp-content/uploads/2016/02/Live-Concert-Berlin-640x425.jpg")'
            }}
          >
            <div className="cover bg-left bg-center-l">
              <div className="bg-black-80 pb5 pb6-m pb7-l">
                <nav className="dt w-100 mw8 center">
                  <div className="dtc w2 v-mid pa3">
                    <a
                      href="/"
                      className="dib w2 h2 pa1 ba b--white-90 grow-large border-box"
                    >
                      <svg
                        className="link white-90 hover-white"
                        data-icon="skull"
                        viewBox="0 0 32 32"
                      >
                        <title>skull icon</title>
                        <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12" />
                      </svg>
                    </a>
                  </div>

                </nav>
                <div className="tc-l vh-100 mt4 mt5-m mt6-l ph3">
                  <h1 className="f2 tc f1-l fw2 white-90 mb0 lh-title">
                    {props.app.title}
                  </h1>
                  <h2 className="fw1 tc f3 white-80 mt3 mb4">
                    The space between the notes that make the music
                  </h2>
                  <div className="tc">
                    <Link
                      to={`/profiles/${props.profile._id}`}
                      className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
                    >
                      Login
                    </Link>
                    <span className="dib v-mid ph3 white-70 mb3">or</span>
                    <a
                      className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
                      href=""
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

const mapActionsToProps = dispatch => {
  return {
    handleClick: e => {
      e.preventDefault()
      dispatch(getProfile())
    }
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    app: state.app,
    profile: state.profile
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)
