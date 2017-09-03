import { gql, graphql } from 'react-apollo';
export const QUERY_ALL_CUSTOMERS = gql`
  query activecustomers {
    activecustomers {
      number
      name
    }
  }
`;

export const QUERY_FOLLOWED_CUSTOMERS_WITH_NOTES = gql`
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
