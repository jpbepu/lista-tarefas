import React from 'react';
import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar';
import ListaTarefas from './containers/TaskList';
 

function App() {
  return (
    <>

      <GlobalStyle />

      <Container>
        <Sidebar />
        <ListaTarefas />
      </Container>



      
    </>
  );
}

export default App;
