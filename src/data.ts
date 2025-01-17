import { Product } from './types';

export const brands = [
  {
    id: 'asus',
    name: 'Asus',
    categories: [
      { id: 'laptop', name: 'Laptop' },
      { id: 'aio', name: 'AIO' },
      { id: 'desktop', name: 'Desktop' },
    ],
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    categories: [
      { id: 'office', name: 'Office' },
      { id: 'os', name: 'Operating System' },
      { id: 'other', name: 'Other' },
    ],
  },
  {
    id: 'eset',
    name: 'Eset',
    categories: [],
  },
];

export const products: Record<string, Product[]> = {
  asus: [
    {
      id: 'rog-strix',
      name: 'ROG Strix G15',
      brandId: 'asus',
      categoryId: 'laptop',
      description: 'High-performance gaming laptop with the latest technology',
      price: 1499.99,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      specs: {
        'Processor': 'Intel Core i7-12700H',
        'Graphics': 'NVIDIA GeForce RTX 4060 8GB',
        'Memory': '16GB DDR5',
        'Storage': '1TB NVMe SSD',
        'Display': '15.6" FHD 165Hz',
        'Operating System': 'Windows 11 Pro'
      },
      features: [
        'NVIDIA GeForce RTX 4060 8GB GDDR6',
        '12th Gen Intel Core i7 Processor',
        '16GB DDR5 RAM',
        '1TB PCIe NVMe SSD',
        '15.6" FHD 165Hz Display',
        'RGB Keyboard'
      ],
      stock: 15,
      rating: 4.5,
      reviews: [
        {
          id: '1',
          userName: 'John D.',
          rating: 5,
          title: 'Excellent Gaming Laptop',
          comment: 'Amazing performance and build quality. The 165Hz display is butter smooth.',
          date: '2024-02-15',
          verified: true
        },
        {
          id: '2',
          userName: 'Sarah M.',
          rating: 4,
          title: 'Great but runs hot',
          comment: 'Performance is excellent but it can get quite warm during intense gaming sessions.',
          date: '2024-02-10',
          verified: true
        }
      ]
    }
  ],
  microsoft: [
    {
      id: 'office-pro',
      name: 'Microsoft Office Professional 2024',
      brandId: 'microsoft',
      categoryId: 'office',
      description: 'Complete suite of Office applications for professional use',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      specs: {
        'License Type': 'Perpetual',
        'Users': '1 User',
        'Devices': '1 PC or Mac',
        'Applications': 'Word, Excel, PowerPoint, Outlook, Access, Publisher',
        'Cloud Storage': '1TB OneDrive',
        'Updates': 'Security updates included'
      },
      features: [
        'Complete suite of Office applications',
        'Professional email with Outlook',
        'Advanced database tools with Access',
        'Professional publishing with Publisher',
        '1TB OneDrive cloud storage',
        'Microsoft Teams'
      ],
      stock: 50,
      rating: 4.8,
      reviews: [
        {
          id: '1',
          userName: 'Michael R.',
          rating: 5,
          title: 'Perfect for Business',
          comment: 'All the tools I need for my business in one package. Great value.',
          date: '2024-02-20',
          verified: true
        },
        {
          id: '2',
          userName: 'Lisa K.',
          rating: 4,
          title: 'Solid Office Suite',
          comment: 'The new features are great, though there is a learning curve.',
          date: '2024-02-18',
          verified: true
        }
      ]
    }
  ]
};

export const licenseTypes = [
  { id: 'oem', name: 'OEM' },
  { id: 'ffp', name: 'FFP' },
  { id: 'esd', name: 'ESD' },
];