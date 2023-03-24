import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from "@apollo/client";
import client from "./service/GraphQLService";
import { ToggleColorMode } from './ToggleColorMode';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ToggleColorMode />
    </ApolloProvider>
  </React.StrictMode>,
)
