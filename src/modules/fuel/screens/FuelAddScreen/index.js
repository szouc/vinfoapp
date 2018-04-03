import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import { backRequest } from '../../modules/fuel/actions'
import { connect } from 'react-redux'
import immutPropsToJS from '../../utils/immutPropsToJS'
import { BackButton, FuelAddForm } from '../../modules/fuel/containers'
import { ErrorBoundary } from '../../modules/shared'

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
  static navigationOptions = {
    title: '新增加油记录'
  }

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
        <ErrorBoundary>
          <FuelAddForm />
        </ErrorBoundary>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(FuelAddScreen)
)
