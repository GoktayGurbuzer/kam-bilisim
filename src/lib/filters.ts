export const asusFilters = {
  processor: {
    id: 'processor',
    label: 'Processor',
    options: [
      { id: 'intel-i3', label: 'Intel Core i3' },
      { id: 'intel-i5', label: 'Intel Core i5' },
      { id: 'intel-i7', label: 'Intel Core i7' },
      { id: 'intel-i9', label: 'Intel Core i9' },
      { id: 'amd-r3', label: 'AMD Ryzen 3' },
      { id: 'amd-r5', label: 'AMD Ryzen 5' },
      { id: 'amd-r7', label: 'AMD Ryzen 7' },
      { id: 'amd-r9', label: 'AMD Ryzen 9' }
    ]
  },
  memory: {
    id: 'memory',
    label: 'Memory/RAM',
    options: [
      { id: '4gb', label: '4GB' },
      { id: '8gb', label: '8GB' },
      { id: '16gb', label: '16GB' },
      { id: '32gb', label: '32GB' },
      { id: '64gb', label: '64GB' }
    ]
  },
  storage: {
    id: 'storage',
    label: 'Storage',
    options: [
      { id: 'ssd-256gb', label: 'SSD 256GB' },
      { id: 'ssd-512gb', label: 'SSD 512GB' },
      { id: 'ssd-1tb', label: 'SSD 1TB' },
      { id: 'ssd-2tb', label: 'SSD 2TB' },
      { id: 'hdd-1tb', label: 'HDD 1TB' },
      { id: 'hdd-2tb', label: 'HDD 2TB' },
      { id: 'hdd-4tb', label: 'HDD 4TB' }
    ]
  },
  os: {
    id: 'os',
    label: 'Operating System',
    options: [
      { id: 'win11-home', label: 'Windows 11 Home' },
      { id: 'win11-pro', label: 'Windows 11 Pro' },
      { id: 'win10-home', label: 'Windows 10 Home' },
      { id: 'win10-pro', label: 'Windows 10 Pro' }
    ]
  }
};

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest Arrivals' },
  { id: 'popularity', label: 'Most Popular' }
];