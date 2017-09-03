import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { gql, graphql } from 'react-apollo';
import glamorous from 'glamorous';

const SuperTextField = glamorous(TextField)({ marginLeft: 20 });
const Container = glamorous.div({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: 10
});

const ColorPaper = glamorous(Paper)({
  backgroundColor: '#EEE',
  displayName: 'ColorPaper'
});
const Together = glamorous.div({
  display: 'flex',
  alignItems: 'center'
});

const SaveButton = glamorous(RaisedButton)({
  marginLeft: 10,
  marginTop: 20
});

class Customer extends React.Component {
  state = {};

  render() {
    console.log(ColorPaper.style);
    const { customer } = this.props;
    return (
      <ColorPaper style={{ background: '#F5F5F5' }}>
        <form action="">
          <Container>
            <Together>
              <SuperTextField
                floatingLabelText="Customer nr"
                name="number"
                value={customer.number}
              />
              <SuperTextField
                floatingLabelText="Customer name"
                name="name"
                value={customer.name}
                fullWidth={true}
              />

              <Avatar src={customer.followed.picture.data} />
              <SuperTextField
                floatingLabelText="FollowedBy"
                name="followed"
                value={customer.followed.fullname}
              />
            </Together>
            <SaveButton label="Save" width="120" secondary={true} />
          </Container>
        </form>
      </ColorPaper>
    );
  }
}

export default Customer;
