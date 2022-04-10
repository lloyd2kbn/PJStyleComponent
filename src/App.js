import {Container} from './components/styles/Container.styled';
import Header from './components/Header';
import Cart from './components/Cart';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import {content} from './content';
import Footer from './components/Footer';
const theme={
  colors:{
    header:"#ebfbff",
    body:"#fff",
    footer:"#003333"
  },
  mobile:"768px"
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
              <Header/>
              <Container>
                 {
                   content.map((item,index)=>{
                            return <Cart key={index} item={item}></Cart>
                   })
                 }
              </Container>
              <Footer/>
             
      </>
    </ThemeProvider>
  );
}

export default App;
