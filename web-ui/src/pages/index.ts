// The page the user lands on after opening the app and without a session
export const FirstRunPage = document.URL.indexOf('register-confirmation') >= 0 ? 'RegisterConfirmationPage' :
  (document.URL.indexOf('password-recovery') >= 0 ? 'PasswordRecoveryPage' : 'WelcomePage');

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = 'TabsPage';

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = 'ProductCrudPage';
export const Tab2Root = 'CatalogPage';
export const Tab3Root = 'SettingsPage';
