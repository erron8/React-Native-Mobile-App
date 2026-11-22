import { Tabs } from 'expo-router';
import { Lucide } from '@react-native-vector-icons/lucide';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#241F20',
        tabBarInactiveTintColor: '#696466',
      }}
    >
      {/* Bottom Tabs */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Lucide name="house" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Lucide name="search" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color }) => (
            <Lucide name="plus" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Lucide name="bell" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Lucide name="user-round" size={20} color={color} />
          ),
        }}
      />
      {/* End Bottom Tabs */}
    </Tabs>
  );
};

export default TabLayout;