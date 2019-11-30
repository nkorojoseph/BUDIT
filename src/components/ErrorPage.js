import React from 'react';
import { Link} from 'react-router-dom';

const ErrorPage = () => (
    <div>
      This page is not found <Link to="/"> Go Back Home </Link>
    </div>
  );

  export default ErrorPage;