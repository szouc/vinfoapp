import React from 'react'
import { View, ScrollView, Text } from 'react-native'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text>{this.state.errorInfo.componentStack}</Text>
          </View>
        </ScrollView>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
