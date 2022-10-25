import { AuthContextProvider } from 'modules/context/AuthContext';
import { TodosContextProvider } from 'modules/context/TodosContext';
import { createElement } from 'react';
import Routes from 'routes/Routes';
import GlobalStyles from 'styles/globalStyles';

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      createElement(context, {
        children: prev,
      }),
    children
  );

function App() {
  return (
    <AppProvider contexts={[AuthContextProvider, TodosContextProvider]}>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  );
}

export default App;
