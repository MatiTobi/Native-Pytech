import { Platform } from 'react-native';
import { getDeviceTier } from './utils';
export const deviceTier = getDeviceTier();
export const isLowTier = Platform.OS === 'android' && deviceTier === 'low';
