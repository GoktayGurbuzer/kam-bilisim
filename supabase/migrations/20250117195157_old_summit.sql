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

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Advanced Cooling</h2>
      <p>ROG''s intelligent cooling system with liquid metal thermal compound ensures optimal performance in any form factor. The vapor chamber and dual fan system maintain ideal temperatures even during intense gaming sessions.</p>
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
      'Security', 'TPM 2.0, IR camera with Windows Hello',
      'Special Features', '360-degree hinge, Touch screen support, ROG XG Mobile compatibility'
    )
  )
WHERE slug = 'rog-flow-x13-2024';