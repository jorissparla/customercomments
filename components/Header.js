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
  color: 'white'
});

export default ({ pathname }) =>
  <header>
    <Toolbar style={{ color: 'white', backgroundColor: 'rgb(51, 157, 242)' }}>
      <Link prefetch href="/">
        <A className={pathname === '/' && 'is-active'}>Home</A>
      </Link>
      <Link prefetch href="/about">
        <A className={pathname === '/about' && 'is-active'}>About</A>
      </Link>

      <style jsx>{`
        header {
          margin-bottom: 25px;
        }
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
    </Toolbar>
  </header>;
