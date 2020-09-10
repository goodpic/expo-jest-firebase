import * as React from 'react'
import { ResponsiveStylesType } from '../types'

const screenSize = {
  width: 0,
  height: 0,
  grid1or2: 1,
  grid2or4: 2,
  widthPercentToDp: (param: any) => param,
  heightPercentToDp: (param: any) => param,
  percentToDp: (param: any, size: any) => param,
  isLandscape: false,
  isPortrait: true,
  isTablet: false,
}
const responsiveStyles: ResponsiveStylesType = {
  viewStyles: {}, textStyles: {}, imageStyles: {}
}

export const ScreenContext = React.createContext({
  screenSize,
  responsiveStyles,
})
