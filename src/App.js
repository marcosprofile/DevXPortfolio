import RoutesApp from './routes'
import { ThemeProvider } from 'styled-components'
import { MainBody } from './styles/Global.styled'
import Navbar from './components/Navbar'
import { theme } from './utils/Theme'
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />
        <RoutesApp />
        <SpeedInsights />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
