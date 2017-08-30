import React from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../db'
import Header from '../containers/header'

class Profile extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.id
    this.props.dispatch(getProfile(profileId))
  }

  render() {
    const props = this.props
    return (
      <div>
        <Header />
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img
              src={props.profile.photo}
              className="br-100 h4 w4 dib ba b--black-05 pa2"
              title="Photo of a kitty staring at you"
            />
            <h1 className="f3 mb2">
              {props.profile.firstName} {props.profile.lastName}
            </h1>
            <h2 className="f5 fw4 gray mt0">{props.profile.bandName}</h2>
          </div>
        </article>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

const connector = connect(mapStateToProps)

export default connector(Profile)
