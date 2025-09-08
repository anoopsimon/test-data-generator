import { BsBank2, BsAirplane } from 'react-icons/bs';

export interface DataCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  route: string;
}

export const dataCategories: DataCategory[] = [
  {
    id: 'bank-customer',
    title: 'Bank Customer Data',
    description: 'Generate realistic bank customer profiles with account details',
    icon: BsBank2,
    route: '/generate/bank-customer',
  },
  {
    id: 'airline',
    title: 'Airline Data',
    description: 'Generate flight information and booking details',
    icon: BsAirplane,
    route: '/generate/airline',
  },
];
