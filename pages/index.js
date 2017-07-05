import Page from '../components/Page';
import Header from '../components/Header';
import withData from '../lib/withData';

export default withData(props =>
  <Page>
    <Header pathname={props.url.pathname} />
    Test
  </Page>
);
