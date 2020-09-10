import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

type ResponsiveStylesType = {
  viewStyles: { [name: string]: ViewStyle }
  textStyles: { [name: string]: TextStyle }
  imageStyles: { [name: string]: ImageStyle }
}

export { ResponsiveStylesType }
