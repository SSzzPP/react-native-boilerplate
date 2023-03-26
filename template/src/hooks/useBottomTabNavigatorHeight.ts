import { useContext } from 'react';

import BottomTabBarHeightContext from '@react-navigation/bottom-tabs/src/utils/BottomTabBarHeightContext';

export function useBottomTabNavigatorHeight() {
  const height = useContext(BottomTabBarHeightContext);
  return height ?? 0;
}
