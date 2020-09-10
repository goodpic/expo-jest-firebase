import { Dimensions } from 'react-native'
import { ColorScheme } from './ColorScheme'
import { Variables } from './Variables'

const { width } = Dimensions.get('window')
const isTablet = (width > Variables.width.iPhone)

const title = {
  color: 'rgba(25, 25, 25, 1.0)',
  fontSize: 20,
  lineHeight: 24,
  paddingTop: 8,
}

const subTitle = {
  color: 'rgba(114, 114, 114, 1.0)',
  fontSize: 18,
  lineHeight: 20,
  paddingTop: 6,
}

export const FontStyles = {
  body: {
    fontSize: 14,
  },
  listPrimary: {
    fontSize: isTablet ? 20 : 15,
    lineHeight: isTablet ? 24 : 17,
  },
  listSecondary: {
    color: ColorScheme.ios.greyFont,
    fontSize: isTablet ? 16 : 13,
    lineHeight: isTablet ? 24 : 15,
  },
  pageTitle: {
    fontSize: 18,
    paddingLeft: 0,
    paddingRight: 16,
    marginBottom: 8,
  },
  subTitle,
  subTitleCenter: {
    ...subTitle,
    textAlign: 'center' as 'center',
  },
  text: {
    fontSize: isTablet ? 18 : 16,
    lineHeight: isTablet ? 40 : 24,
    textAlignVertical: 'bottom' as 'bottom',
  },
  textBold: {
    fontSize: isTablet ? 28 : 24,
    fontWeight: 'bold' as 'bold',
    lineHeight: isTablet ? 30 : 26,
    textAlignVertical: 'bottom' as 'bottom',
  },
  textRed: {
    color: 'red' as 'red',
    fontSize: isTablet ? 24 : 24,
    fontWeight: 'bold' as 'bold',
    lineHeight: isTablet ? 40 : 26,
    textAlignVertical: 'bottom' as 'bottom',
  },
  textSecondary: {
    color: 'grey' as 'grey',
    fontSize: isTablet ? 18 : 12,
    lineHeight: isTablet ? 20 : 14,
  },
  title,
  titleCenter: {
    ...title,
    textAlign: 'center' as 'center',
  },
}
