import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function SalesPage() {
  return (
    <>
      <Helmet>
        <title> Sales Report</title>
      </Helmet>
      <BlogView />
    </>
  );
}
