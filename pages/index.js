import Page from '../components/Page';
import Header from '../components/Header';
import withData from '../lib/withData';
import { gql, graphql } from 'react-apollo';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SearchBar from '../components/SearchBar';
import ContentSend from 'material-ui/svg-icons/content/create';
import Link from 'next/link';
import Router from 'next/router';
import { withState } from 'recompose';
import CustomerList from '../components/CustomerList';
const auth = require('../lib/authenticate');

const authResult = auth();

console.log(authResult);

const enhance = withState('searchText', 'setSearchText', '');
const Index = enhance(({ searchText, setSearchText }) => (
  <Page>
    <SearchBar
      onChange={setSearchText}
      hintText="Type part of the customer name or person that follows this account"
    />
    <CustomerList filter={searchText} />
  </Page>
));

export default Index;
