import { Dimensions, Image } from 'react-native'

import React from 'react'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const picHeight = (deviceHeight - 55) / 3

class DriverCarousel extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Image
        style={{ width: deviceWidth, height: picHeight }}
        source={require('../../../../images/driver.jpg')}
      />
    )
  }
}

export default DriverCarousel
