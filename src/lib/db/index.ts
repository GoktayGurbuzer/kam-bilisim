import { brandHelpers } from './brands';
import { productHelpers } from './products';
import { orderHelpers } from './orders';

export const dbHelpers = {
  ...brandHelpers,
  ...productHelpers,
  ...orderHelpers
};