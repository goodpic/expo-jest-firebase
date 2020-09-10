import { useEffect, useState } from 'react'
import { Dimensions, PixelRatio } from 'react-native'
import { ScreenSizeType, ResponsiveStylesType } from '../types'
import { ResponsiveStyles } from '../styles/ResponsiveStyles'

function percentToDp(percent: string | number, size: number) {
  const percentNumber = typeof percent === "number" ? percent : parseFloat(percent)
  return  PixelRatio.roundToNearestPixel(size * percentNumber / 100)
}

function getScreenSize(): ScreenSizeType {
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  const aspectRatio = height / width
  const isTablet = aspectRatio < 1.6 && width > 700

  const screenSize = {
    width,
    height,
    isTablet,
    isLandscape: width > height,
    isPortrait: height >= width,
    grid1or2: isTablet || width > height ? 2 : 1,
    grid2or4: isTablet || width > height ? 4 : 2,
    widthPercentToDp: (percent: string | number) => percentToDp(percent, width),
    heightPercentToDp: (percent: string | number) => percentToDp(percent, height),
    percentToDp,
  }
  return screenSize
}

const UseResponsive = (): [ScreenSizeType, ResponsiveStylesType] => {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>(getScreenSize())
  const onOrientationChange = () => {
    setScreenSize(getScreenSize())
  }

  useEffect(() => {
    Dimensions.addEventListener("change", onOrientationChange)
    return () => {
      Dimensions.removeEventListener("change", onOrientationChange)
    }
  })

  return [screenSize, ResponsiveStyles(screenSize)]
}

export { UseResponsive, percentToDp }
