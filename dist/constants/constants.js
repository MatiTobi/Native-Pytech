import { Platform } from 'react-native';
import { _getDeviceTier } from './utils';
import Constants from 'expo-constants';
export const deviceTier = _getDeviceTier();
export const isLowTier = Platform.OS === 'android' && deviceTier === 'low';
export const expoEnv = Constants.expoConfig?.extra || {};
