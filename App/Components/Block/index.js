import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const BASE_SIZE = 14;
const COLOR_BACKGROUND = '#FFFFFF';
const COLOR_DEFAULT = '#808080';

export default class Block extends Component {
  render() {
    const {
      row,
      flex,
      center,
      middle,
      height,
      width,
      top,
      bottom,
      space,
      card,
      shadow,
      shadowColor,
      style,
      children,
      ...props
    } = this.props;

    const blockStyles = [
      styles.block,
      row && styles.row,
      flex && { flex: flex === true ? 1 : flex },
      center && styles.center,
      middle && styles.middle,
      top && styles.top,
      bottom && styles.bottom,
      height && { height },
      width && { width },
      space && { justifyContent: `space-${space}` },
      card && styles.card,
      shadow && styles.shadow,
      shadowColor && { shadowColor },
      style
    ];

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  middle: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  top: {
    alignSelf: 'flex-start',
  },
  bottom: {
    alignSelf: 'flex-end',
  },
  card: {
    borderRadius: BASE_SIZE * 0.4,
    borderWidth: BASE_SIZE * 0.05,
    borderColor: COLOR_DEFAULT,
    backgroundColor: COLOR_BACKGROUND,
  },
  shadow: {
    shadowColor: COLOR_DEFAULT,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 1, // android
  }
})