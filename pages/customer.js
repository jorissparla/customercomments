import { gql, graphql } from 'react-apollo';
import Page from '../components/Page';
import CustomerView from '../components/CustomerView';
import CustomerNotes from '../components/CustomerNotes';
import Router from 'next/router';

class DetailPage extends React.Component {
  addNote = ({ note, date }) => {
    console.log(date, note);
    const { customers } = this.props.data;
    this.props
      .createCustomerNote({ customerId: customers[0].id, note, date })
      //.then(Router.push(`/customer/?id=${customers[0].id}`))
      .then(this.props.data.refetch())
      .catch(e => console.log('error'));
  };
  deleteNote = ({ id }) => {
    const { customers } = this.props.data;
    this.props
      .deleteCustomerNote({ id })
      .then(this.props.data.refetch())
      .catch(e => console.log('error'));
  };
  render() {
    console.log(this.props);
    if (this.props.loading) return <div>Loading...</div>;
    const { customers } = this.props.data;
    if (!customers) return <div>Loading...</div>;
    return (
      <div>
        <CustomerView customer={customers[0]} />
        <CustomerNotes
          notes={customers[0].notes}
          onAdd={this.addNote}
          onDelete={this.deleteNote}
        />
      </div>
    );
  }
}
const queryCustomer = gql`
  query allCustomers($id: ID) {
    customers(id: $id) {
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
        id
        date
        note
      }
    }
  }
`;

const addCustomerNote = gql`
  mutation createCustomerNote($input: CustomerNoteInput) {
    createCustomerNote(input: $input) {
      note
    }
  }
`;
const deleteCustomerNote = gql`
  mutation deleteCustomerNote($input: CustomerNoteInput) {
    deleteCustomerNote(input: $input) {
      result
    }
  }
`;

const CustomerDetails = graphql(queryCustomer, {
  options: ({ url }) => ({
    variables: {
      id: url.query.id
    }
  })
})(DetailPage);

const CustomerDetails2 = graphql(addCustomerNote, {
  props: ({ mutate }) => ({
    createCustomerNote: input =>
      mutate({
        variables: { input }
      })
  })
})(
  graphql(deleteCustomerNote, {
    props: ({ mutate }) => ({
      deleteCustomerNote: input =>
        mutate({
          variables: { input }
        })
    })
  })(CustomerDetails)
);

export default ({ url }) =>
  <Page>
    <CustomerDetails2 url={url} />
  </Page>;
