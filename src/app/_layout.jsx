import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      {/* Stack Screens */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="pin/[id]" options={{ title: 'Pin Detail' }} />
      {/* End Stack Screens */}
    </Stack>
  );
};

export default RootLayout;