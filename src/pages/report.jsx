import { Helmet } from 'react-helmet-async';

import { ReportTable } from 'src/sections/report/report-table';

// ----------------------------------------------------------------------

export default function SalesPage() {
  return (
    <>
      <Helmet>
        <title> Sales Report</title>
      </Helmet>
      <ReportTable />
    </>
  );
}
