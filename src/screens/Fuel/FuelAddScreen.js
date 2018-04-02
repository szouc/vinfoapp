import React, { Component } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import { backRequest } from '../../modules/fuel/actions'
import { connect } from 'react-redux'
import immutPropsToJS from '../../utils/immutPropsToJS'

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.getIn(['auth', 'username'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => {
      dispatch(backRequest(username))
    }
  }
}

class FuelAddScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToMain(this.props.username)
    return true
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FuelAdd</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f'
  },

  title: {
    fontWeight: '800'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(FuelAddScreen)
)
