import Page from '../components/Page';
import glamorous from 'glamorous';
import Paper from 'material-ui/Paper';
import { gql, graphql } from 'react-apollo';
import CustomerContainer from '../components/CustomerContainer';
import { customerQuery } from '../queries';

const H1 = glamorous.h1({
  fontWeight: 200
});

const CustomerAdd = () =>
  <Page>
    <H1>Add Customer</H1>
    <Paper>
      <CustomerContainer />
    </Paper>
  </Page>;

export default CustomerAdd;
