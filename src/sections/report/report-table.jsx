import { format } from 'date-fns';

import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Container,
  CardHeader,
  Typography,
} from '@mui/material';

import { orders } from 'src/_mock/orders';

import Label from 'src/components/label';
import Scrollbar from 'src/components/scrollbar';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error',
};

export const ReportTable = () => (
  <Container maxWidth="xl">
    <Card
      component={Stack}
      spacing={3}
      sx={{
        px: 5,
        py: 3,
        borderRadius: 2,
      }}
    >
      <CardHeader title="Latest Orders" />
      <Box sx={{ minWidth: 800 }}>
        <Scrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ลูกค้า</TableCell>
                <TableCell>สินค้า</TableCell>
                <TableCell>จำนวน</TableCell>
                <TableCell>ราคา</TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell sortDirection="desc">วันที่ซื้อ</TableCell>
                <TableCell>สถานะ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                const createdAt = format(order.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow hover key={order.id}>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar src={order.cover} />
                        <Typography noWrap>{order.productName}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{order.price}</TableCell>
                    <TableCell>{order.orderId}</TableCell>
                    <TableCell>{createdAt}</TableCell>
                    <TableCell>
                      <Label color={statusMap[order.status]}>{order.status}</Label>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>
      </Box>
      <Divider />
    </Card>
  </Container>
);
