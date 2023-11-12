import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'overview',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'sales report',
    path: '/sales-report',
    icon: icon('ic_blog'),
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: icon('ic_cart'),
  },
  {
    title: 'customer',
    path: '/user',
    icon: icon('ic_user'),
  },
];

export default navConfig;
