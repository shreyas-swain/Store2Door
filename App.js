import React from 'react';
import { AuthProvider } from './AuthProvider';
import AppNavigator from './AppNavigator';
// import OnboardingScreen from './screens/OnboardScreen';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

export default App;
