import React from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface ClientRouterProps {
  clientId: string;
}

const ClientRouter: React.FC<ClientRouterProps> = ({ clientId }) => {
  const { siteConfig } = useDocusaurusContext();
  
  // GUID validation regex
  const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  
  if (!guidRegex.test(clientId)) {
    return <Redirect to="/404" />;
  }
  
  // Check if client documentation exists
  const clientDocPath = `/docs/clients/${clientId}`;
  
  return <Redirect to={clientDocPath} />;
};

export default ClientRouter;