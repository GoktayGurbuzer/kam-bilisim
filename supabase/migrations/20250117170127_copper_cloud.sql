-- Update ExpertBook B9 specifications
UPDATE products
SET schema_markup = jsonb_build_object(
  'specifications', jsonb_build_object(
    'Processor', 'Intel Core i7-1355U (up to 5.0 GHz, 10 cores)',
    'Memory', '32GB LPDDR5 RAM',
    'Storage', '2TB PCIe 4.0 NVMe SSD',
    'Display', '14" 16:10 WQXGA (2560 x 1600) IPS Anti-glare',
    'Graphics', 'Intel Iris Xe Graphics',
    'Operating System', 'Windows 11 Pro',
    'Battery', '63Wh Li-Polymer with fast charging support',
    'Weight', '880g (1.94 lbs)',
    'Thickness', '14.9mm',
    'Security', 'TPM 2.0, IR Camera with Windows Hello, Fingerprint sensor',
    'Ports', 'Thunderbolt 4 USB-C (x2), USB 3.2 Gen 2 Type-A, HDMI 2.0b, 3.5mm Combo Audio Jack',
    'Wireless', 'Wi-Fi 6E (802.11ax), Bluetooth 5.3',
    'Camera', 'FHD IR Camera with privacy shutter',
    'Audio', 'Harman Kardon certified audio with AI noise-canceling',
    'Keyboard', 'Backlit Chiclet Keyboard with 1.5mm key travel',
    'Special Features', 'MIL-STD 810H military-grade durability, NumberPad 2.0'
  )
)
WHERE slug = 'expertbook-b9-2024';