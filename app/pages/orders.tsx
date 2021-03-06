import { useQuery } from 'react-query';
import Layout from '../components/Layout';
import { Labels } from '../components/Labels';
import { SnipCartOrder } from '../interfaces/snipcart';

export default function OrdersPage() {
  const { isLoading, data: orders } = useQuery<SnipCartOrder[]>('orders', () =>
    fetch('/api/orders?limit=100&status=Processed').then((res) => res.json())
  );

  return (
    <Layout title="Orders">
      <header>
        <h1>Processed Orders {orders?.length}</h1>
        <p>
          Viewing a listing of orders that need to be packed. They are not in a
          batch.
        </p>
      </header>
      {isLoading && <p>Loading...</p>}
      <Labels orders={orders} />
    </Layout>
  );
}
