import './App.css';
import StyledButton, { FancyButton, SubmitButton } from './components/Button/Button';
import { AnimatedLogo, DarkButton } from './components/Button/Button';
import logo from './download.jpg'
import { ThemeProvider, createGlobalStyle } from 'styled-components';


const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  }
}
const GlobalStyle = createGlobalStyle`
  button{
    font-family: 'Roboto';
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <div className="App">
          {/* <button>Button</button> */}
          <AnimatedLogo src={logo} />
          <StyledButton type="submit">Alo</StyledButton>
          <div>
            <br>
            </br>
          </div>
          <StyledButton variant='outline'>Alo</StyledButton>
          <div>
            <br>
            </br>
          </div>
          <FancyButton variant='outline'>Fancy</FancyButton>
          <br>
          </br>
          <SubmitButton variant='outline'>Fancy</SubmitButton>
          <div>
            <br>
            </br>
            <DarkButton>Dark Theme</DarkButton>
          </div>
        </div>
      </GlobalStyle>
    </ThemeProvider>
  );
}
<ThemeProvider theme={theme}>
  <div className="App">
  </div>
</ThemeProvider>

export default App;
