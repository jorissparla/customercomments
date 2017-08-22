import { gql, graphql } from 'react-apollo';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentSend from 'material-ui/svg-icons/content/create';
import Link from 'next/link';
import Router from 'next/router';
import moment from 'moment';

const queryCustomers = gql`
  query allCustomers {
    customers {
      id
      number
      name
      followed {
        fullname
        picture {
          data
        }
      }
      notes {
        date
        note
      }
    }
  }
`;

class CustList extends React.Component {
  render() {
    console.log('props', this.props);
    const { loading, error, customers } = this.props.data;
    const { filter } = this.props;
    if (loading) return <div>Loading...</div>;
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
              const lastnote =
                notes.length === 0 ? 'no Entries yet' : notes[0].note;
              const lastdate =
                notes.length === 0
                  ? ''
                  : moment(notes[0].date).format('YYYY-MM-DD');
              return (
                <div>
                  <ListItem
                    onClick={() => Router.push(`/customer?id=${customer.id}`)}
                    primaryText={customer.name}
                    secondaryText={`${lastdate}:${lastnote}`}
                    leftAvatar={
                      customer.followed.picture
                        ? <Avatar
                            src={customer.followed.picture.data}
                            style={{
                              backgroundColor: 'palevioletred',
                              border: '5px',
                              borderColor: '#9E9E9E',
                              borderStyle: 'solid'
                            }}
                          />
                        : <Avatar
                            style={{
                              backgroundColor: 'palevioletred',
                              border: '5px',
                              borderColor: '#9E9E9E',
                              borderStyle: 'solid'
                            }}
                          >
                            {customer.name.slice(0, 2).toUpperCase()}
                          </Avatar>
                    }
                    rightIcon={
                      <ContentSend
                        onClick={() => Router.push(`/about?id=${customer.id}`)}
                      />
                    }
                  />
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

export default graphql(queryCustomers)(CustList);
