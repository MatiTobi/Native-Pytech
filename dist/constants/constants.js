import { Platform } from 'react-native';
import { getDeviceTier } from './utils';
export const isLowTier = Platform.OS === 'android' && getDeviceTier() === 'low';
