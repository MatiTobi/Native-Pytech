import { Platform } from 'react-native';
import { getDeviceTier } from './defs';
export const isLowTier = Platform.OS === 'android' && getDeviceTier() === 'low';
