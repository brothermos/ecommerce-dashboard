import { Helmet } from 'react-helmet-async';

import { ReportView } from 'src/sections/report/view';

// ----------------------------------------------------------------------

export default function SalesPage() {
  return (
    <>
      <Helmet>
        <title> Sales Report</title>
      </Helmet>
      <ReportView />
    </>
  );
}
