import React from 'react'
import { View, Text } from 'react-native'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    console.log(error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong.</Text>
        </View>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
