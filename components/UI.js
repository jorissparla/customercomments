import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}
const muiTheme = {
  palette: {
    accent1Color: deepOrange500
  }
};
class Main extends React.Component {
  static getInitialProps({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent;
    if (process.browser) {
      userAgent = navigator.userAgent;
    } else {
      userAgent = req.headers['user-agent'];
    }

    return { userAgent };
  }

  render() {
    const { userAgent, children } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>
        {children}
      </MuiThemeProvider>
    );
  }
}

export default Main;
