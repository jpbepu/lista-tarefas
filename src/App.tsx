import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import store from './store' 
import GlobalStyle, { Container } from './styles'

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';

 
const routes = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>

      <GlobalStyle />

      <Container>
        <RouterProvider router={routes} />
      </Container>



      
    </Provider>
  );
}

export default App;
