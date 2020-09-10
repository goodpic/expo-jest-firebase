import { ReactText } from 'react'

type ScreenSizeType = {
  width: number
  height: number
  isLandscape: boolean
  isPortrait: boolean
  isTablet: boolean
  grid1or2?: number
  grid2or4?: number
  widthPercentToDp: (percent: string | number) => number
  heightPercentToDp: (percent: string | number) => number
  percentToDp: (percent: string | number, size: number) => number
}

export { ScreenSizeType }
