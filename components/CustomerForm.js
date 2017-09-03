import { Component } from 'react';

import glamorous from 'glamorous';
import { Input } from '../lib/shared';

class CustomerForm extends Component {
  state = {};
  handleSubmit = e => {
    alert(e);
  };
  render() {
    const { data: { activecustomers, loading } } = this.props;
    console.log(activecustomers);
    if (loading) return <div>Loading...</div>;

    return (
      <form>
        {activecustomers.length}
        <Input />
      </form>
    );
  }
}

export default CustomerForm;
