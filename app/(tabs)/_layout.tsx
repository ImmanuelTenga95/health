import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Octicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
    
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? '#790edf': '#d1cfd4'} />
          ),
        }}
        
      />
        <Tabs.Screen
        name="patients"
        options={{
          title: 'Patients',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <FontAwesome name="users" size={24} color={focused ? '#790edf': '#d1cfd4'} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            <Octicons name={focused?'bell-fill' : 'bell'} size={24} color={focused ? '#790edf': '#d1cfd4'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            <FontAwesome name={focused? 'user': 'user-o'} size={24} color={focused ? '#790edf': '#d1cfd4'} />
          ),
        }}
      />
    </Tabs>
  );
}
