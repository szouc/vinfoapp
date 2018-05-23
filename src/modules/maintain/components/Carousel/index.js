import { Dimensions, Image } from 'react-native'

import React from 'react'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
// The Height of bottom tab is 55
const picHeight = (deviceHeight - 55) / 3

class MaintainCarousel extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Image
        style={{ width: deviceWidth, height: picHeight }}
        source={require('../../../../images/maintain.jpg')}
      />
    )
  }
}

export default MaintainCarousel
