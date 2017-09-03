import { gql, graphql } from 'react-apollo';
import CustomerForm from './CustomerForm';
import { QUERY_ALL_CUSTOMERS } from '../queries';

const CustomerContainer = ({ data: activecustomers }) =>
  <CustomerForm data={activecustomers} />;

export default graphql(QUERY_ALL_CUSTOMERS)(CustomerContainer);
