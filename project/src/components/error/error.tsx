import { Link } from 'react-router-dom';

function Error(): JSX.Element {
  return (
    <div>
      <h1>
        404.
        <br />
        <p>Page not found</p>
      </h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
}

export default Error;
