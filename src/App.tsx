import React from 'react';
import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar';
import ListaTarefas from './containers/TaskList';
import { Provider } from 'react-redux';
import store from './store' 
 


function App() {
  return (
    <Provider store={store}>

      <GlobalStyle />

      <Container>
        <Sidebar />
        <ListaTarefas />
      </Container>



      
    </Provider>
  );
}

export default App;
