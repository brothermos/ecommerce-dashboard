import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import AppConversionRates from 'src/sections/overview/app-conversion-rates';

// ----------------------------------------------------------------------

export default function BlogView() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" mb={5}>
        <Typography variant="h4">Sales Report</Typography>
      </Stack>
      <Grid xs={12} md={6} lg={8}>
        <AppConversionRates
          title="Conversion Rates"
          subheader="(+43%) than last year"
          chart={{
            series: [
              { label: 'Italy', value: 400 },
              { label: 'Japan', value: 430 },
              { label: 'China', value: 448 },
              { label: 'Canada', value: 470 },
              { label: 'France', value: 540 },
              { label: 'Germany', value: 580 },
              { label: 'South Korea', value: 690 },
              { label: 'Netherlands', value: 1100 },
              { label: 'United States', value: 1200 },
              { label: 'United Kingdom', value: 1380 },
            ],
          }}
        />
      </Grid>
    </Container>
  );
}
