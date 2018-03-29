import React, { Component } from 'react'
import Card from './Card'

class ProfileCard extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.username)
  }

  render() {
    return <Card profile={this.props.profile} />
  }
}

export default ProfileCard
