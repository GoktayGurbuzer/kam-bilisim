-- Update ROG Strix G15 specifications
UPDATE products
SET schema_markup = jsonb_build_object(
  'specifications', jsonb_build_object(
    'Processor', 'Intel Core i9-13900H (up to 5.4 GHz, 14 cores)',
    'Memory', '32GB DDR5 4800MHz',
    'Storage', '2TB PCIe 4.0 NVMe SSD',
    'Display', '15.6" QHD 240Hz IPS Anti-glare',
    'Graphics', 'NVIDIA GeForce RTX 4080 8GB GDDR6',
    'Operating System', 'Windows 11 Pro',
    'Battery', '90WHrs, 4S1P, 4-cell Li-ion',
    'Weight', '2.3 kg (5.07 lbs)',
    'Dimensions', '354 x 259 x 22.6 ~ 27.2 mm',
    'Keyboard', 'RGB Per-Key RGB keyboard',
    'Networking', 'Wi-Fi 6E (802.11ax) + Bluetooth 5.2',
    'Ports', '2x USB 3.2 Gen 2 Type-A, 2x USB 3.2 Gen 2 Type-C, 1x HDMI 2.1, 1x 3.5mm Combo Audio Jack',
    'Audio', 'Smart Amp Technology, Dolby Atmos',
    'Cooling', 'ROG Intelligent Cooling, Thermal Grizzly Liquid Metal'
  )
)
WHERE slug = 'rog-strix-g15-2024';

-- Update ZenBook Pro 14 specifications
UPDATE products
SET schema_markup = jsonb_build_object(
  'specifications', jsonb_build_object(
    'Processor', 'Intel Core i7-13700H (up to 5.0 GHz, 14 cores)',
    'Memory', '16GB LPDDR5 6400MHz',
    'Storage', '1TB PCIe 4.0 NVMe SSD',
    'Display', '14.5" 2.8K (2880 x 1800) OLED 120Hz',
    'Graphics', 'NVIDIA GeForce RTX 3050 Ti 4GB GDDR6',
    'Operating System', 'Windows 11 Home',
    'Battery', '76WHrs, 4-cell Li-ion',
    'Weight', '1.65 kg (3.64 lbs)',
    'Dimensions', '322.8 x 223.3 x 17.9 mm',
    'Keyboard', 'Backlit Chiclet Keyboard',
    'Networking', 'Wi-Fi 6E (802.11ax) + Bluetooth 5.2',
    'Ports', '2x Thunderbolt 4, 1x USB 3.2 Gen 2 Type-A, 1x HDMI 2.1, 1x 3.5mm Combo Audio Jack',
    'Audio', 'Harman Kardon certified audio',
    'Security', 'IR camera with Windows Hello, TPM 2.0'
  )
)
WHERE slug = 'zenbook-pro-14-2024';

-- Update Microsoft 365 Business Premium specifications
UPDATE products
SET schema_markup = jsonb_build_object(
  'specifications', jsonb_build_object(
    'License Type', 'Subscription',
    'Users', 'Up to 300 users',
    'Term', 'Annual subscription',
    'Apps Included', 'Word, Excel, PowerPoint, Outlook, Teams, SharePoint, OneDrive',
    'Email Hosting', 'Exchange Online with 50GB mailbox',
    'Cloud Storage', '1TB OneDrive storage per user',
    'Security Features', 'Microsoft Defender, Azure Information Protection, Intune',
    'Device Management', 'Windows Virtual Desktop, Mobile Device Management',
    'Compliance', 'Legal Hold, DLP, eDiscovery',
    'Updates', 'Automatic updates included',
    'Support', '24/7 phone and web support',
    'Platform', 'Windows, macOS, iOS, Android'
  )
)
WHERE slug = 'microsoft-365-business-premium';

-- Update Windows 11 Pro specifications
UPDATE products
SET schema_markup = jsonb_build_object(
  'specifications', jsonb_build_object(
    'License Type', 'Perpetual',
    'Users', '1 PC',
    'Architecture', '64-bit',
    'System Requirements', 'Processor: 1 GHz or faster, RAM: 4GB, Storage: 64GB',
    'Features', 'BitLocker, Remote Desktop, Windows Sandbox, Hyper-V',
    'Security', 'Windows Hello, TPM 2.0, Secure Boot',
    'Management', 'Group Policy, Mobile Device Management',
    'Updates', 'Feature and security updates included',
    'Support', 'Microsoft support included',
    'Language', 'Multilingual',
    'Activation', 'Digital license'
  )
)
WHERE slug = 'windows-11-pro';

-- Update ESET Internet Security specifications
UPDATE products
SET schema_markup = jsonb_build_object(
  'specifications', jsonb_build_object(
    'License Type', 'Subscription',
    'Duration', '1 Year',
    'Users', '1 Device',
    'Compatibility', 'Windows, macOS, Android',
    'Features', 'Antivirus, Firewall, Banking Protection, Webcam Protection',
    'Protection', 'Real-time protection, Machine learning, Cloud-based scanning',
    'Security', 'Network Attack Protection, Anti-phishing, Ransomware Shield',
    'Performance Impact', 'Low system impact',
    'Updates', 'Automatic updates',
    'Support', '24/7 technical support'
  )
)
WHERE slug = 'eset-internet-security-2024';

-- Update ESET Endpoint Protection Advanced specifications
UPDATE products
SET schema_markup = jsonb_build_object(
  'specifications', jsonb_build_object(
    'License Type', 'Subscription',
    'Duration', '1 Year',
    'Deployment', 'Cloud or On-premises',
    'Management', 'ESET PROTECT Cloud/On-prem console',
    'Endpoints Supported', 'Windows, macOS, Linux, Android',
    'Features', 'Endpoint Protection, Full Disk Encryption, Cloud Sandbox',
    'Security', 'Advanced Heuristics, Machine Learning, Network Attack Protection',
    'Management Features', 'Remote deployment, Reporting, Policy management',
    'Updates', 'Automatic updates',
    'Support', '24/7 enterprise support'
  )
)
WHERE slug = 'eset-endpoint-protection-advanced';