import { ThemeProvider } from 'styled-components';
import { Routes } from './routes/index';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}