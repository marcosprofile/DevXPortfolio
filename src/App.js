import RoutesApp from './routes'
import { ThemeProvider } from 'styled-components'
import { MainBody } from './styles/Global.styled'
import Navbar from './components/Navbar'
import { theme } from './theme/Theme'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <RoutesApp />
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
