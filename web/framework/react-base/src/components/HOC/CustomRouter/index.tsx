import React, { useContext } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { RouterProps } from 'react-router';

const RouterContext = React.createContext<RouterProps>({} as RouterProps);

export const CustomHashRouter: React.SFC = ({ children }) => {
  return (
    <HashRouter>
      <Route>
        {(p: RouterProps) => <RouterContext.Provider value={p}>{children}</RouterContext.Provider>}
      </Route>
    </HashRouter>
  );
};

export function useRouter() {
  return useContext(RouterContext);
}
