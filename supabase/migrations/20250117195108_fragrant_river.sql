-- Update ROG Strix G15 content
UPDATE products
SET 
  content = '<div class="product-content">
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Ultimate Gaming Performance</h2>
      <p>The ROG Strix G15 delivers unmatched gaming performance with its powerful combination of Intel Core i9-13900H processor and NVIDIA GeForce RTX 4080 graphics. Experience gaming at its finest with the 240Hz QHD display and advanced cooling system.</p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Advanced Cooling Technology</h2>
      <p>ROG''s Intelligent Cooling system features liquid metal thermal compound and redesigned fans for optimal performance under intense gaming sessions.</p>
      <ul class="list-disc pl-6 mt-4">
        <li>ROG Intelligent Cooling thermal system</li>
        <li>Liquid metal thermal compound</li>
        <li>Arc Flow fans with 84 blades</li>
        <li>6 heat pipes and 4 heatsinks</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Immersive Gaming Experience</h2>
      <p>The 15.6-inch QHD display with 240Hz refresh rate and Adaptive-Sync technology ensures smooth, tear-free gaming visuals. RGB per-key keyboard lighting adds customizable style to your setup.</p>
    </section>
  </div>'
WHERE slug = 'rog-strix-g15-2024';

-- Update ZenBook Pro 14 content
UPDATE products
SET 
  content = '<div class="product-content">
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Professional-Grade Display</h2>
      <p>The ZenBook Pro 14 features a stunning 14.5-inch 2.8K OLED display with 120Hz refresh rate. With 100% DCI-P3 color gamut coverage and PANTONE Validation, it delivers exceptional color accuracy for creative work.</p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Creative Performance</h2>
      <p>Powered by Intel Core i7-13700H processor and NVIDIA RTX 3050 Ti graphics, the ZenBook Pro 14 handles demanding creative applications with ease.</p>
      <ul class="list-disc pl-6 mt-4">
        <li>Intel Core i7-13700H processor</li>
        <li>NVIDIA RTX 3050 Ti graphics</li>
        <li>16GB LPDDR5 RAM</li>
        <li>1TB PCIe 4.0 NVMe SSD</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Professional Design</h2>
      <p>The all-metal design combines durability with sophistication, while the ErgoLift hinge provides an optimized typing position and improved cooling performance.</p>
    </section>
  </div>'
WHERE slug = 'zenbook-pro-14-2024';

-- Update Microsoft 365 Business Premium content
UPDATE products
SET 
  content = '<div class="product-content">
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Complete Business Solution</h2>
      <p>Microsoft 365 Business Premium provides a comprehensive suite of productivity tools and advanced security features designed for modern businesses. Access industry-leading applications and services from anywhere, on any device.</p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Included Applications</h2>
      <ul class="list-disc pl-6 mt-4">
        <li>Microsoft Word, Excel, and PowerPoint</li>
        <li>Microsoft Outlook and Teams</li>
        <li>SharePoint and OneDrive for Business</li>
        <li>Exchange Online with 50GB mailbox</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Advanced Security</h2>
      <p>Protect your business with advanced security features including Microsoft Defender, Azure Information Protection, and Intune mobile device management.</p>
    </section>
  </div>'
WHERE slug = 'microsoft-365-business-premium';

-- Update Windows 11 Pro content
UPDATE products
SET 
  content = '<div class="product-content">
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Professional Operating System</h2>
      <p>Windows 11 Pro provides advanced security and management features designed for businesses and professionals. Get the most secure Windows ever, with comprehensive protection against modern threats.</p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Business Features</h2>
      <ul class="list-disc pl-6 mt-4">
        <li>BitLocker device encryption</li>
        <li>Windows Information Protection</li>
        <li>Remote Desktop</li>
        <li>Domain Join and Group Policy Management</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Modern Interface</h2>
      <p>Experience the most refined Windows interface yet, with centered Start menu, Snap Layouts, and improved touch controls. Stay productive with the new Focus Sessions and enhanced virtual desktop support.</p>
    </section>
  </div>'
WHERE slug = 'windows-11-pro';