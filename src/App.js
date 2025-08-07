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
      <MainBody>
        <Navbar />
        <RoutesApp />
        <SpeedInsights />
        <Analytics />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
