import Link from 'next/link';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import glamorous from 'glamorous';

const A = glamorous.a({
  padding: 10,
  color: 'white',
  fontSize: 24,
  marginRight: 15,
  textDecoration: 'none'
});

export default ({ pathname }) =>
  <header>
    <Toolbar
      style={{ color: 'white', backgroundColor: '#01579B', fontSize: 24 }}
    >
      <Link prefetch href="/">
        <A>Home</A>
      </Link>
      <Link prefetch href="/about?id=1">
        <A>About</A>
      </Link>

      <style jsx>{`
        header {
          margin-bottom: 25px;
        }
      `}</style>
    </Toolbar>
  </header>;
