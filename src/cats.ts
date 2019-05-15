import { ICat } from '@/types';

const cats: ICat[] = [
  {
    name: 'Seamus',
    disposition: 'surly',
    img: 'https://i.imgur.com/RdtxiPf.jpg',
    fedDisposition: 'snuggly',
    isFed: false,
  },
  {
    name: 'Debris',
    disposition: 'snuggly',
    fedDisposition: 'sleepy',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51zCBKRBoNL._SY679_.jpg',
    isFed: false,
  },
  {
    name: 'Simone',
    disposition: 'distant',
    fedDisposition: 'surly',
    img:
      'https://pictures-of-cats.org/wp-content/uploads/images/cat-cartoon-image.jpg',
    isFed: false,
  },
];

export default cats;
