import { gql, graphql } from 'react-apollo';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentSend from 'material-ui/svg-icons/content/create';
import Link from 'next/link';
import Router from 'next/router';
import moment from 'moment';
import { QUERY_FOLLOWED_CUSTOMERS_WITH_NOTES } from '../queries';

class CustList extends React.Component {
  render() {
    const { loading, error, customers } = this.props.data;
    const { filter } = this.props;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
    const filteredCustomers = customers.filter(customer => {
      const { name, followed } = customer;
      return (
        name.toUpperCase().includes(filter.toUpperCase()) ||
        (followed
          ? followed.fullname.toUpperCase().includes(filter.toUpperCase())
          : true)
      );
    });
    if (customers) {
      return (
        <div className="container">
          <List>
            {filteredCustomers.map(customer => {
              const { notes } = customer;
              const sortednotes = notes
                .slice()
                .sort((a, b) => (a.date > b.date ? 1 : -1));

              const lastnote =
                notes.length === 0 ? 'no Entries yet' : sortednotes[0].note;
              const lastdate =
                notes.length === 0
                  ? ''
                  : moment(sortednotes[0].date).format('YYYY-MM-DD');
              return (
                <div>
                  <Link prefetch href={`/customer?id=${customer.id}`}>
                    <ListItem
                      onClick={() => {
                        //Router.push(`/customer?id=${customer.id}`)}
                      }}
                      primaryText={customer.name}
                      secondaryText={`${lastdate}:${lastnote}`}
                      leftAvatar={
                        customer.followed.picture ? (
                          <Avatar
                            src={customer.followed.picture.data}
                            style={{
                              backgroundColor: 'palevioletred',
                              border: '5px',
                              borderColor: '#9E9E9E',
                              borderStyle: 'solid'
                            }}
                          />
                        ) : (
                          <Avatar
                            style={{
                              backgroundColor: 'palevioletred',
                              border: '5px',
                              borderColor: '#9E9E9E',
                              borderStyle: 'solid'
                            }}
                          >
                            {customer.name.slice(0, 2).toUpperCase()}
                          </Avatar>
                        )
                      }
                      rightIconButton={<ContentSend />}
                    />
                  </Link>
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      );
    }
  }
}

export default graphql(QUERY_FOLLOWED_CUSTOMERS_WITH_NOTES)(CustList);
