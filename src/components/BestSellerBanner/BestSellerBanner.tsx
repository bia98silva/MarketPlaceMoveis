import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, SPACING, SHADOWS } from '../../utils/theme';
import { BestSeller } from '../../types';
import { MaterialIcons } from '@expo/vector-icons';

interface BestSellerBannerProps {
  bestSeller: BestSeller;
}

const BestSellerBanner: React.FC<BestSellerBannerProps> = ({ bestSeller }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <ImageBackground
        source={{ uri: bestSeller.image }}
        style={styles.background}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{bestSeller.title}</Text>
          <View style={styles.discountBadge}>
            <Text style={styles.subtitle}>{bestSeller.subtitle}</Text>
          </View>
          <View style={styles.iconContainer}>
            <MaterialIcons name="arrow-forward" size={22} color={COLORS.white} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    marginRight: SPACING.medium,
    borderRadius: 16,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: SPACING.medium,
    borderRadius: SIZES.base,
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.small,
  },
  subtitle: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  discountBadge: {
    backgroundColor: COLORS.accent2,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: SPACING.small,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BestSellerBanner;