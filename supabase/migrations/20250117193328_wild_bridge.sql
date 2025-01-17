-- Update ExpertBook B9 content and specifications
UPDATE products
SET 
  content = '<div class="product-content">
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">World''s Lightest Business Laptop</h2>
      <p>The ExpertBook B9 redefines business laptops with its incredibly light 880g magnesium-lithium alloy chassis. Despite its ultra-portable design, it delivers powerful performance and enterprise-grade security features.</p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Military-Grade Durability</h2>
      <p>Built to withstand the rigors of business travel, the ExpertBook B9 passes MIL-STD 810H military-grade standards. The precision-crafted chassis ensures reliability in any business environment.</p>
      <ul class="list-disc pl-6 mt-4">
        <li>MIL-STD 810H certified</li>
        <li>Magnesium-lithium alloy construction</li>
        <li>Spill-resistant keyboard</li>
        <li>Reinforced chassis design</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">All-Day Productivity</h2>
      <p>With up to 16 hours of battery life and fast-charging support, the ExpertBook B9 keeps you productive throughout the workday. The precision-engineered ErgoLift hinge improves typing comfort and cooling efficiency.</p>
    </section>
  </div>',
  schema_markup = jsonb_build_object(
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