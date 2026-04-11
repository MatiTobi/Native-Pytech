import { Platform } from 'react-native';
import { getDeviceTier } from './utils';
import Constants from 'expo-constants';
export const deviceTier = getDeviceTier();
export const isLowTier = Platform.OS === 'android' && deviceTier === 'low';
export const expoEnv = Constants.expoConfig?.extra || {};
