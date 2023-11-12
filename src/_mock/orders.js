import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

const PRODUCT_NAME = [
  'Nike Air Force 1 NDESTRUKT',
  'Nike Space Hippie 04',
  'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
  'Nike Blazer Low 77 Vintage',
  'Nike ZoomX SuperRep Surge',
  'Zoom Freak 2',
  'Nike Air Max Zephyr',
  'Jordan Delta',
  'Air Jordan XXXV PF',
  'Nike Waffle Racer Crater',
  'Kyrie 7 EP Sisterhood',
  'Nike Air Zoom BB NXT',
  'Nike Air Force 1 07 LX',
  'Nike Air Force 1 Shadow SE',
  'Nike Air Zoom Tempo NEXT%',
  'Nike DBreak-Type',
  'Nike Air Max Up',
  'Nike Air Max 270 React ENG',
  'NikeCourt Royale',
  'Nike Air Zoom Pegasus 37 Premium',
  'Nike Air Zoom SuperRep',
  'NikeCourt Royale',
  'Nike React Art3mis',
  'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
];

export const orders = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    orderId: faker.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    productName: PRODUCT_NAME[index],
    customerName: faker.person.fullName(),
    createdAt: faker.date.past(),
    quantity: faker.number.int({ min: 1, max: 10 }),
    price: faker.number.int({ min: 100, max: 2000, precision: 0.01 }),
    stock: faker.number.int({ min: 0, max: 99 }),
    status: sample(['pending', 'delivered', 'refunded']),
  };
});
