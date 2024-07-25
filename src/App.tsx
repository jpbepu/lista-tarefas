import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Container } from './styles'

import store from './store' 
import Home from './pages/Home';
 
const routes = createBrowserRouter([
  {
    path:'/',
    element: <Home />
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
