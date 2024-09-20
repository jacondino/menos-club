import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '.';
import { HeaderButton } from '../components/HeaderButton';
import { TabBarIcon } from '../components/TabBarIcon';
import One from '../screens/one';
import Two from '../screens/two';
import Three from '../screens/three';
const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: { backgroundColor: '#cf8b23' },
      }}>
      <Tab.Screen
        name="One"
        component={One}
        options={{
          title: 'Gráfico 1',
          headerStyle: { backgroundColor: '#cf8b23' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tab.Screen
        name="Two"
        component={Two}
        options={{
          title: 'Gráfico 2',
          headerStyle: { backgroundColor: '#cf8b23' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tab.Screen
        name="Three"
        component={Three}
        options={{
          title: 'Gráfico 3',
          headerStyle: { backgroundColor: '#cf8b23' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
