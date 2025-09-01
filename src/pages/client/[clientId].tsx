import React from 'react';
import Layout from '@theme/Layout';
import { useParams } from '@docusaurus/router';
import ClientRouter from '../../components/ClientRouter';

export default function ClientPage(): JSX.Element {
  const { clientId } = useParams<{ clientId: string }>();
  
  if (!clientId) {
    return (
      <Layout title="Geçersiz İstemci">
        <div className="container margin-top--lg">
          <h1>Geçersiz İstemci ID</h1>
          <p>Lütfen geçerli bir istemci ID'si ile erişim sağlayın.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`İstemci Dökümanları - ${clientId}`}>
      <ClientRouter clientId={clientId} />
    </Layout>
  );
}