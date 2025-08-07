import RoutesApp from './routes'
import { ThemeProvider } from 'styled-components'
import { MainBody } from './styles/Global.styled'
import Navbar from './components/Navbar'
import { theme } from './theme/Theme'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const preventZoomKeys = (e) => {
      if (e.ctrlKey || e.metaKey) {
        const zoomKeys = ['+', '-', '=', '0'];
        if (zoomKeys.includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    const preventWheelZoom = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const preventPinchZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', preventZoomKeys, { passive: false });
    window.addEventListener('wheel', preventWheelZoom, { passive: false });
    window.addEventListener('touchmove', preventPinchZoom, { passive: false });

    return () => {
      window.removeEventListener('keydown', preventZoomKeys);
      window.removeEventListener('wheel', preventWheelZoom);
      window.removeEventListener('touchmove', preventPinchZoom);
    };
  }, []);

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
