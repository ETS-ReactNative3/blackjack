import { StyleSheet } from 'react-native'

const size = {
  h1: 34,
  h2: 24,
  h3: 20,
  title: 16,
  subtitle: 13,
  caption: 12,
  input: 18,
  regular: 17,
  medium: 14,
  small: 10
}

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
})
