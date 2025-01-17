-- Update ROG Flow X13 content and specifications
UPDATE products
SET 
  content = '<div class="product-content">
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Revolutionary Gaming Versatility</h2>
      <p>The ROG Flow X13 redefines gaming versatility with its innovative convertible design. Experience desktop-class gaming performance in an ultra-portable 13-inch form factor, perfect for both creative work and intense gaming sessions.</p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Powerful Performance</h2>
      <p>Equipped with the latest AMD Ryzen 9 7940HS processor and NVIDIA RTX 4070 graphics, the Flow X13 delivers exceptional performance for both gaming and content creation.</p>
      <ul class="list-disc pl-6 mt-4">
        <li>AMD Ryzen 9 7940HS processor</li>
        <li>NVIDIA GeForce RTX 4070 graphics</li>
        <li>Up to 32GB LPDDR5 RAM</li>
        <li>1TB PCIe 4.0 NVMe SSD</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Versatile Display</h2>
      <p>The 13.4-inch touch display features a 165Hz refresh rate and QHD+ resolution, providing smooth gameplay and crisp visuals. The 360-degree hinge allows for multiple usage modes, from laptop to tablet.</p>
    </section>
  </div>',
  schema_markup = jsonb_build_object(
    'specifications', jsonb_build_object(
      'Processor', 'AMD Ryzen 9 7940HS (up to 5.2 GHz, 8 cores)',
      'Graphics', 'NVIDIA GeForce RTX 4070 8GB GDDR6',
      'Memory', '32GB LPDDR5 6400MHz',
      'Storage', '1TB PCIe 4.0 NVMe SSD',
      'Display', '13.4" QHD+ (2560 x 1600) 165Hz Touch Display',
      'Operating System', 'Windows 11 Pro',
      'Battery', '75WHrs, 4-cell Li-ion',
      'Weight', '1.3 kg (2.87 lbs)',
      'Dimensions', '299 x 222 x 15.8 mm',
      'Keyboard', 'Backlit Chiclet Keyboard',
      'Networking', 'Wi-Fi 6E (802.11ax) + Bluetooth 5.2',
      'Ports', '1x USB 3.2 Gen 2 Type-C, 1x USB 3.2 Gen 2 Type-A, 1x HDMI 2.1, 1x 3.5mm Combo Audio Jack',
      'Audio', 'Smart Amp Technology, Dolby Atmos',
      'Special Features', '360-degree hinge, Touch screen support, ROG XG Mobile compatibility'
    )
  )
WHERE slug = 'rog-flow-x13-2024';

-- Update ProArt StudioBook Pro content and specifications
UPDATE products
SET 
  content = '<div class="product-content">
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Professional Mobile Workstation</h2>
      <p>The ProArt StudioBook Pro is engineered for professional content creators who demand uncompromising performance. With ISV certifications and color-accurate display, it''s the perfect tool for creative professionals.</p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Workstation-Class Performance</h2>
      <p>Featuring Intel Xeon processors and NVIDIA RTX A5000 graphics, the StudioBook Pro handles the most demanding professional applications with ease.</p>
      <ul class="list-disc pl-6 mt-4">
        <li>Intel Xeon processor</li>
        <li>NVIDIA RTX A5000 graphics</li>
        <li>ECC memory support</li>
        <li>RAID storage options</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Professional Display</h2>
      <p>The 16-inch 4K OLED display offers true-to-life colors with PANTONE validation and 100% DCI-P3 coverage, ensuring color accuracy for professional work.</p>
    </section>
  </div>',
  schema_markup = jsonb_build_object(
    'specifications', jsonb_build_object(
      'Processor', 'Intel Xeon W-11955M (up to 5.0 GHz, 8 cores)',
      'Graphics', 'NVIDIA RTX A5000 16GB GDDR6',
      'Memory', '64GB DDR4 ECC RAM',
      'Storage', '2TB + 2TB PCIe 4.0 NVMe SSD RAID 0',
      'Display', '16" 4K (3840 x 2400) OLED, 100% DCI-P3',
      'Operating System', 'Windows 11 Pro for Workstations',
      'Battery', '90WHrs, 4-cell Li-ion',
      'Weight', '2.4 kg (5.29 lbs)',
      'Dimensions', '362 x 264 x 21.4 mm',
      'Keyboard', 'Backlit Chiclet Keyboard with NumPad',
      'Networking', 'Wi-Fi 6E (802.11ax) + Bluetooth 5.2',
      'Ports', '2x Thunderbolt 4, 2x USB 3.2 Gen 2 Type-A, 1x HDMI 2.1, 1x SD Express 7.0 card reader',
      'Audio', 'Smart Amp Technology, Harman Kardon certification',
      'Security', 'TPM 2.0, IR camera with Windows Hello',
      'Special Features', 'ASUS Dial, ASUS ProArt Creator Hub, ISV certifications'
    )
  )
WHERE slug = 'proart-studiobook-pro-2024';