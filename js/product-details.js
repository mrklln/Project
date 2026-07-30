// ======================================================
// ACCOUNT SECTION
// ======================================================

//button for desktop view
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

//welcome message
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

//chinicheck kung naka login na yung user tas mag chhange yung login button to my account text
if(localStorage.getItem("loggedIn") === "true"){

    //login button to my account
    accountText.textContent = "My Account";
    accountBtn.href = "./account.html";

     // Hide login icon
    accountIcon.style.display = "none";

    // Show welcome message with username
    userSection.classList.remove("d-none");
    userName.textContent = localStorage.getItem("username");

    //mobile login to myaccount
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "./account.html";

}
else{
    //showing login buttons
    accountText.textContent = "";
    accountBtn.href = "./login.html";

    //show icon
    accountIcon.style.display = "inline";

    //mobile login button
    mobileAccountText.textContent = "Login";
    mobileAccountBtn.href = "./login.html";
}

// ======================================================
// LOGOUT FUNCTION
// ======================================================
function logout(){

    //removed login status
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    // Redirect back to homepage
    window.location.href = "./index.html";
}

// Product Database and specs
const products = {
    "acer-vg240y": {
        name: "Acer Nitro VG240Y",
        price: "₱9,399",
        image: "./photos/monitor1.jpg",
        description: "24\" IPS • 180Hz Gaming Monitor",

        specs: {
        Brand: "Acer",
        Size: "24 Inch",
        Resolution: "1920 x 1080",
        RefreshRate: "180Hz",
        ResponseTime: "1ms",
        Panel: "IPS"
        }
    },

    "asus-vg249q3a": {
        name: "ASUS TUF VG249Q3A",
        price: "₱10,870",
        image: "./photos/monitor2.jpg",
        description: "24\" IPS • 180Hz Gaming Monitor",

        specs: {
        Brand: "ASUS",
        Size: "24 Inch",
        Resolution: "1920 x 1080",
        RefreshRate: "180Hz",
        ResponseTime: "1ms",
        Panel: "Fast IPS"
        }
    },

    "samsung-g3": {
        name: "Samsung Odyssey G3",
        price: "₱9,500",
        image: "./photos/monitor3.jpg",
        description: "24\" VA • 165Hz Gaming Monitor",

        specs: {
        Brand: "Samsung",
        Size: "24 Inch",
        Resolution: "FHD(1920 x 1080)",
        RefreshRate: "180Hz",
        ResponseTime: "1ms(MPRT)",
        Panel: "VA"
        }
    },

    "lg-27": {
        name: "LG UltraGear 27GR75Q",
        price: "₱15,795",
        image: "./photos/monitor4.jpg",
        description: "27\" QHD • 165Hz IPS Gaming Monitor",

        specs: {
        Brand: "LG",
        Size: "27 Inch",
        Resolution: "2560 x 1440",
        RefreshRate: "165",
        ResponseTime: "1ms(GtG at Faster)",
        Panel: "IPS"
        }
    },

    "msi-g27": {
        name: "MSI G274QPF",
        price: "₱21,950",
        image: "./photos/monitor5.jpg",
        description: "27\" WQHD • 170Hz Gaming Monitor",

        specs: {
        Brand: "MSI",
        Size: "27 Inch",
        Resolution: "2560 x 1440 (WQHD)",
        RefreshRate: "170Hz",
        ResponseTime: "1ms GtG",
        Panel: "Rapid IPS"
        }
    },

    "samsung-g9": {
        name: "Samsung Odyssey G9",
        price: "₱74,499",
        image: "./photos/monitor6.jpg",
        description: "49\" Curved • DQHD • 144Hz Gaming Monitor",

        specs: {
        Brand: "Samsung",
        Size: "49 Inch",
        Resolution: "DQHD (5120 x 1440)",
        RefreshRate: "240Hz",
        ResponseTime: "1ms(GtG",
        Panel: "VA"
        }
    },

    "lg-34": {
        name: "LG UltraGear 34GN850-B",
        price: "₱36,995",
        image: "./photos/monitor7.jpg",
        description: "34\" Ultrawide • Curved • 144Hz Gaming Monitor",

        specs: {
        Brand: "LG",
        Size: "34 Inch",
        Resolution: "3340 x 1440",
        RefreshRate: "144Hz",
        ResponseTime: "1ms(GtG at Faster)",
        Panel: "IPS"
        }
    },

    "msi-34": {
        name: "MSI MPG 341CQR QD-OLED X36",
        price: "₱67,995",
        image: "./photos/monitor8.jpg",
        description: "34\" Curved • Ultrawide • 144Hz Gaming Monitor",

        specs: {
        Brand: "MSI",
        Size: "34 Inch",
        Resolution: "3340 x 1440 (UWQHD)",
        RefreshRate: "360Hz",
        ResponseTime: "0.3ms (GtG)",
        Panel: "QD-OLED"
        }
    },

    "gigabyte-g34": {
        name: "Gigabyte G34WQC",
        price: "₱27,700",
        image: "./photos/monitor9.jpg",
        description: "34\" Curved • Ultrawide • 144Hz VA Panel",

        specs: {
        Brand: "Gigabyte",
        Size: "34 Inch",
        Resolution: "3340 x 1440",
        RefreshRate: "144Hz",
        ResponseTime: "1ms(MPRT)",
        Panel: "VA"
        }
    },

    "i9": {
        name:"Intel® Core™ Ultra 9 Processor 285K",
        price: "₱41,250.00",
        image: "./photos/i9_ultra.jpg",
        description: "High-end Desktop Processor",

        specs: {
        Brand: "Intel",
        Series: "Intel Core Ultra 9",
        Cores: "24",
        Threads: "24",
        BoostClock: "5.7 GHz",
        L2Cache: "40 MB",
        L3Cache:"36 MB",
        iGPU: "Yes",
        Socket: "LGA1851"
        }
    },

    "9800x3d": {
        name: "AMD Ryzen™ 7 9800X3D",
        price: "₱31,695.00",
        image: "./photos/r7_9800x3d.jpg",
        description: "High-end Gaming Processor",

        specs:{
        Brand: "AMD",
        Series: "Ryzen 9000 Series",
        Cores: "8",
        Threads: "16",
        BoosClock: "5.2 GHz",
        L2Cache: "8 MB",
        L3Cache: "96 MB",
        iGPU: "No",
        Socket: "AM5"
        }
    },

    "9070xt": {
        name: "Sapphire Nitro+ AMD Radeon RX 9070 XT Gaming OC 16GB Dual HDMI / Dual DP Graphics Card",
        price: "₱57,350.00",
        image: "./photos/9070xt.jpg",
        description: "AMD Radeon RX 9070 XT powered by RDNA 4 architecture, delivering exceptional 1440p and 4K gaming performance with advanced ray tracing, AI-enhanced graphics, and high-speed GDDR6 memory.",

        specs: {
        Brand: "AMD",
        Architecture: "RDNA 4",
        Memory: "16GB GDDR6",
        MemoryBus: "256-bit",
        RayTracing: "3rd Gen Ray Tracing",
        Resolution: "HDMI®: 7680×4320 , DisplayPort™ 2.1a: 7680×4320",
        AIAccelerator: "128",
        Interface: "PCIe 5.0"
        }
    },

    "5090": {
        name: "Asus ROG Astral GeForce RTX 5090 OC 32GB GDDR7 Gaming Graphics Card",
        price: "₱274,350.00",
        image: "./photos/5090.jpg",
        description: "The ASUS ROG Astral GeForce RTX 5090 OC Edition is a flagship graphics card powered by NVIDIA Blackwell architecture. Equipped with 32GB of ultra-fast GDDR7 memory, advanced ray tracing, DLSS 4, and AI acceleration, it delivers exceptional performance for 4K gaming, content creation, and demanding professional workloads.",

        specs: {
        Brand: "ASUS",
        Model: "ROG Astral RTX 5090 OC",
        GPU: "NVIDIA GeForce RTX 5090",
        Architecture: "NVIDIA Blackwell",
        Memory: "32GB GDDR7",
        MemoryBus: "512-bit",
        RayTracing: "4th Gen RT Cores",
        Resolution: "Digital Max Resolution 7680 x 4320",
        AI: "5th Gen Tensor Cores",
        Interface: "PCIe 5.0"
        }
    },

    "z790": {
        name: "Asus ROG Maximus Z790 Hero Gaming Motherboard",
        price: "₱36,450.00",
        image: "./photos/maximus.jpg",
        description: "The ASUS ROG Maximus Z790 Hero is a premium gaming motherboard designed for Intel processors. Featuring DDR5 memory support, PCIe 5.0 connectivity, advanced VRM power stages, high-speed networking, and comprehensive cooling solutions, it delivers exceptional performance for gaming, overclocking, and content creation.",
    
        specs: {
        Brand: "ASUS",
        Model: "ROG Maximus Z790 Hero",
        Chipset: "Intel Z790",
        Socket: "LGA1700",
        Memory: "DDR5 up to 192GB",
        Expansion: "PCIe 5.0 x16",
        Storage: "5 x M.2, 6 x SATA",
        Networking: "WiFi 6E, 2.5Gb Ethernet",
        Audio: "ROG SupremeFX"
        }
    },

    "i7-14th": {
        name: "Intel® Core™ i7-14700K Unlocked",
        price: "₱26,995.00",
        image: "./photos/i7-14thgen.jpg",
        description: "High‑performance 20‑core CPU with hybrid architecture, ideal for gaming, content creation, and multitasking.",
    
        specs: {
        Brand: "Intel",
        Series: "Core i7-14700K (14th Gen)",
        Cores: "20 (8 Performance + 12 Efficient)",
        Threads: "28",
        BoosClock: "Up to 5.6 GHz",
        L2Cache: "28 MB",
        L3Cache: "33 MB",
        iGPU: "Intel UHD Graphics 770",
        Socket: "LGA 1700"
        }
    },

    "i9-13th": {
        name: "Intel® Core™ i7-14700K Unlocked",
        price: "₱35,495.00",
        image: "./photos/i9-13thgen.jpg",
        description: "Flagship 24-core processor built for extreme gaming, multitasking, and creative workloads.",
    
        specs: {
        Brand: "Intel",
        Series: "Core i9-13900K (13th Gen)",
        Cores: "24 (8 Performance + 16 Efficient)",
        Threads: "32",
        BoosClock: "Up to 5.8 GHz",
        L2Cache: "32 MB",
        L3Cache: "36 MB",
        iGPU: "Intel UHD Graphics 770",
        Socket: "LGA 1700"
        }
    },

    "r7-7800x3d": {
        name: "AMD Ryzen™ 7 7800X3D",
        price: "₱22,595.00",
        image: "./photos/r7-7800x3d.jpg",
        description: "8-core gaming CPU with 3D V-Cache for top-tier performance in modern titles.",
    
        specs: {
        Brand: "AMD",
        Series: "Ryzen 7000 Series",
        Cores: "8",
        Threads: "16",
        BoosClock: "Up to 5.0 GHz",
        L2Cache: "8 MB",
        L3Cache: "96 MB (3D V-Cache)",
        iGPU: "None",
        Socket: "AM5"
        }
    },

    "r9-9950x3d": {
        name: "AMD Ryzen™ 9 9950X3D",
        price: "₱45,650.00",
        image: "./photos/r9-9950x3d.jpg",
        description: "16-core Zen 5 CPU with massive 3D V-Cache, delivering elite gaming and productivity performance.",
    
        specs: {
        Brand: "AMD",
        Series: "Ryzen 9000 Series",
        Cores: "16",
        Threads: "32",
        BoosClock: "Up to 5.7 GHz",
        L2Cache: "16 MB",
        L3Cache: "128 MB (3D V-Cache)",
        iGPU: "None",
        Socket: "AM5"
        }
    },


    "r9-7900x": {
        name: "AMD Ryzen™ 9 7900X",
        price: "₱22,750.00",
        image: "./photos/r9-7900x.jpg",
        description: "12-core powerhouse for creators and gamers, optimized for AM5 platform.",
    
        specs: {
        Brand: "AMD",
        Series: "Ryzen 7000 Series",
        Cores: "12",
        Threads: "24",
        BoosClock: "Up to 5.6 GHz",
        L2Cache: "12 MB",
        L3Cache: "64 MB",
        iGPU: "AMD Radeon Graphics",
        Socket: "AM5"
        }
    },

    "lianli216": {
        name: "Lian Li Lancool 216 Case",
        price: "₱5,295.00",
        image: "./photos/Lianli.jpg",
        description: "Premium airflow-focused mid-tower case with versatile cooling support.",
    
        specs: {
        Brand: "Lian Li",
        Series: "Lancool",
        FormFactor: "Mid-Tower",
        MotherboardSupport: "ATX, Micro-ATX, Mini-ITX",
        CoolingSupport: "Up to 360mm radiator, multiple fan mounts",
        DriveBays: "2x 3.5\" HDD, 2x 2.5\" SSD",
        FrontPanel: "USB 3.0, USB-C, Audio",
        PSUShroud: "Yes"
        }
    },

    "montech": {
        name: "Montech Sky Two Case",
        price: "₱4,550.00",
        image: "./photos/MontechSkyTwo.jpg",
        description: "Stylish mid-tower case with panoramic tempered glass and strong airflow.",
    
        specs: {
        Brand: "Montech",
        Series: "Sky Two",
        FormFactor: "Mid-Tower",
        MotherboardSupport: "ATX, Micro-ATX, Mini-ITX",
        CoolingSupport: "Up to 360mm radiator, 6 fan positions",
        DriveBays: "2x 3.5\" HDD, 2x 2.5\" SSD",
        FrontPanel: "USB 3.0, USB-C, Audio",
        PSUShroud: "Yes"
        }
    },

    "corsair5000": {
        name: "Corsair 5000D Airflow Case",
        price: "₱8,995.00",
        image: "./photos/Corsair-5000d.jpg",
        description: "High-airflow mid-tower case with spacious interior for advanced builds.",
    
        specs: {
        Brand: "Corsair",
        Series: "5000D Airflow",
        FormFactor: "Mid-Tower",
        MotherboardSupport: "ATX, Micro-ATX, Mini-ITX, E-ATX",
        CoolingSupport: "Up to 360mm radiator front/top, extensive fan mounts",
        DriveBays: "2x 3.5\" HDD, 4x 2.5\" SSD",
        FrontPanel: "USB 3.0, USB-C, Audio",
        PSUShroud: "Yes"
        }
    },

    "hyperion": {
        name: "ASUS ROG Hyperion GR701 Full-Tower Gaming Case",
        price: "₱22,995.00",
        image: "./photos/Hyperion.jpg",
        description: "The ASUS ROG Hyperion GR701 is a premium full-tower gaming case built for high-end enthusiast systems. Featuring exceptional airflow, tempered glass panels, extensive radiator support, and a spacious interior, it is designed to showcase flagship hardware such as the RTX 5090 and Ryzen 9 processors while providing excellent cooling and cable management.",

        specs: {
        Brand: "ASUS",
        Model: "ROG Hyperion GR701",
        FormFactor: "Full Tower",
        MotherboardSupport: "E-ATX, ATX, Micro-ATX, Mini-ITX",
        SidePanel: "Tempered Glass",
        Cooling: "High-Airflow Design",
        FanSupport: "Up to 7 Fans",
        RadiatorSupport: "Up to 420mm",
        GPUSupport: "Up to 460mm",
        Features: "Integrated GPU Holder, Cable Management, ARGB Lighting"
        }
    },

    "asus5090": {
        name: "ASUS ROG Astral GeForce RTX 5090 OC 32GB GDDR7 Graphics Card",
        price: "₱274,350.00",
        image: "./photos/5090.jpg",
        description: "The ASUS ROG Astral GeForce RTX 5090 OC Edition is a flagship graphics card powered by NVIDIA Blackwell architecture. Equipped with 32GB of ultra-fast GDDR7 memory, advanced ray tracing, DLSS 4, and AI acceleration, it delivers exceptional performance for 4K gaming, content creation, and demanding professional workloads.",

        specs: {
        Brand: "ASUS",
        Model: "ROG Astral RTX 5090 OC",
        GPU: "NVIDIA GeForce RTX 5090",
        Architecture: "NVIDIA Blackwell",
        Memory: "32GB GDDR7",
        MemoryBus: "512-bit",
        RayTracing: "4th Gen RT Cores",
        Resolution: "7680 x 4320",
        AI: "5th Gen Tensor Cores",
        Interface: "PCIe 5.0"
        }
    },

    "msi5090": {
        name: "MSI GeForce RTX 5090 SUPRIM SOC 32GB GDDR7 Graphics Card",
        price: "₱269,995.00",
        image: "./photos/msi-5090.jpg",
        description: "The MSI GeForce RTX 5090 SUPRIM SOC is a premium flagship graphics card featuring NVIDIA Blackwell architecture, advanced cooling, and factory overclocking for extreme 4K gaming and professional workloads.",

        specs: {
        Brand: "MSI",
        Model: "RTX 5090 SUPRIM SOC",
        GPU: "NVIDIA GeForce RTX 5090",
        Architecture: "NVIDIA Blackwell",
        Memory: "32GB GDDR7",
        MemoryBus: "512-bit",
        RayTracing: "4th Gen RT Cores",
        Resolution: "7680 x 4320",
        AI: "5th Gen Tensor Cores",
        Interface: "PCIe 5.0"
        }
    },

    "asus5080": {
        name: "ASUS ROG Strix GeForce RTX 5080 OC 16GB GDDR7 Graphics Card",
        price: "₱89,995.00",
        image: "./photos/asus-5080.jpg",
        description: "Built for enthusiast gamers, the ASUS ROG Strix RTX 5080 delivers outstanding 4K gaming performance with advanced cooling, DLSS 4, and ray tracing technologies.",

        specs: {
        Brand: "ASUS",
        Model: "ROG Strix RTX 5080 OC",
        GPU: "NVIDIA GeForce RTX 5080",
        Architecture: "NVIDIA Blackwell",
        Memory: "16GB GDDR7",
        MemoryBus: "256-bit",
        RayTracing: "4th Gen RT Cores",
        Resolution: "7680 x 4320",
        AI: "5th Gen Tensor Cores",
        Interface: "PCIe 5.0"
        }
    },

    "gigabyte5070ti": {
        name: "Gigabyte AORUS GeForce RTX 5070 Ti Master 16GB GDDR7 Graphics Card",
        price: "₱59,995.00",
        image: "./photos/gigabyte-5070ti.jpg",
        description: "The AORUS RTX 5070 Ti Master combines premium cooling, RGB lighting, and strong 1440p to 4K gaming performance powered by NVIDIA Blackwell architecture.",

        specs: {
        Brand: "Gigabyte",
        Model: "AORUS RTX 5070 Ti Master",
        GPU: "NVIDIA GeForce RTX 5070 Ti",
        Architecture: "NVIDIA Blackwell",
        Memory: "16GB GDDR7",
        MemoryBus: "256-bit",
        RayTracing: "4th Gen RT Cores",
        Resolution: "7680 x 4320",
        AI: "5th Gen Tensor Cores",
        Interface: "PCIe 5.0"
        }
    },

    "msi5060ti": {
        name: "MSI GeForce RTX 5060 Ti Gaming X Trio 16GB GDDR7 Graphics Card",
        price: "₱34,995.00",
        image: "./photos/msi-5060ti.jpg",
        description: "Designed for competitive gamers and creators, the RTX 5060 Ti Gaming X Trio delivers excellent 1440p gaming with advanced AI and ray tracing capabilities.",

        specs: {
        Brand: "MSI",
        Model: "RTX 5060 Ti Gaming X Trio",
        GPU: "NVIDIA GeForce RTX 5060 Ti",
        Architecture: "NVIDIA Blackwell",
        Memory: "16GB GDDR7",
        MemoryBus: "128-bit",
        RayTracing: "4th Gen RT Cores",
        Resolution: "7680 x 4320",
        AI: "5th Gen Tensor Cores",
        Interface: "PCIe 5.0"
        }
    },

    "sapphire9070xt": {
        name: "Sapphire Nitro+ Radeon RX 9070 XT 16GB Graphics Card",
        price: "₱52,995.00",
        image: "./photos/9070xt.jpg",
        description: "The Sapphire Nitro+ RX 9070 XT delivers powerful RDNA 4 performance for high-refresh-rate 1440p and smooth 4K gaming experiences.",

        specs: {
        Brand: "Sapphire",
        Model: "Nitro+ RX 9070 XT",
        GPU: "AMD Radeon RX 9070 XT",
        Architecture: "AMD RDNA 4",
        Memory: "16GB GDDR6",
        MemoryBus: "256-bit",
        RayTracing: "3rd Gen Ray Accelerators",
        Resolution: "7680 x 4320",
        AI: "AI Accelerators",
        Interface: "PCIe 5.0"
        }
    },

    "asus9070xt": {
        name: "ASUS TUF Gaming Radeon RX 9070 XT OC 16GB Graphics Card",
        price: "₱54,995.00",
        image: "./photos/asus-9070xt.jpg",
        description: "Built with military-grade components and advanced cooling, the ASUS TUF RX 9070 XT provides reliable performance for demanding gaming sessions.",

        specs: {
        Brand: "ASUS",
        Model: "TUF RX 9070 XT OC",
        GPU: "AMD Radeon RX 9070 XT",
        Architecture: "AMD RDNA 4",
        Memory: "16GB GDDR6",
        MemoryBus: "256-bit",
        RayTracing: "3rd Gen Ray Accelerators",
        Resolution: "7680 x 4320",
        AI: "AI Accelerators",
        Interface: "PCIe 5.0"
        }
    },

    "sapphire7900xtx": {
        name: "Sapphire Nitro+ Radeon RX 7900 XTX Vapor-X 24GB Graphics Card",
        price: "₱74,995.00",
        image: "./photos/sapphire-7900xtx.jpg",
        description: "A flagship RDNA 3 graphics card featuring 24GB of memory, Vapor-X cooling, and exceptional 4K gaming performance.",

        specs: {
        Brand: "Sapphire",
        Model: "Nitro+ RX 7900 XTX Vapor-X",
        GPU: "AMD Radeon RX 7900 XTX",
        Architecture: "AMD RDNA 3",
        Memory: "24GB GDDR6",
        MemoryBus: "384-bit",
        RayTracing: "2nd Gen Ray Accelerators",
        Resolution: "7680 x 4320",
        AI: "AI Accelerators",
        Interface: "PCIe 4.0"
        }
    },

    "powercolor7900xt": {
        name: "PowerColor Red Devil Radeon RX 7900 XT 20GB Graphics Card",
        price: "₱59,995.00",
        image: "./photos/powercolor-7900xt.jpg",
        description: "The Red Devil RX 7900 XT offers premium cooling, overclocked performance, and outstanding 1440p to 4K gaming capability.",

        specs: {
        Brand: "PowerColor",
        Model: "Red Devil RX 7900 XT",
        GPU: "AMD Radeon RX 7900 XT",
        Architecture: "AMD RDNA 3",
        Memory: "20GB GDDR6",
        MemoryBus: "320-bit",
        RayTracing: "2nd Gen Ray Accelerators",
        Resolution: "7680 x 4320",
        AI: "AI Accelerators",
        Interface: "PCIe 4.0"
        }
    },

    "xfx7800xt": {
        name: "XFX Mercury Radeon RX 7800 XT Magnetic Air 16GB Graphics Card",
        price: "₱34,995.00",
        image: "./photos/xfx-7800xt.jpg",
        description: "A powerful 1440p gaming graphics card featuring efficient cooling, premium construction, and strong rasterization performance.",

        specs: {
        Brand: "XFX",
        Model: "Mercury RX 7800 XT Magnetic Air",
        GPU: "AMD Radeon RX 7800 XT",
        Architecture: "AMD RDNA 3",
        Memory: "16GB GDDR6",
        MemoryBus: "256-bit",
        RayTracing: "2nd Gen Ray Accelerators",
        Resolution: "7680 x 4320",
        AI: "AI Accelerators",
        Interface: "PCIe 4.0"
        }
    },

    "z790-e": {
        name: "ASUS ROG Strix Z790-E Gaming WiFi",
        price: "₱26,950.00",
        image: "./photos/z790-e.jpg",
        description: "The ASUS ROG Strix Z790-E Gaming WiFi is a premium ATX motherboard built for Intel 12th, 13th, and 14th Gen processors. Featuring robust power delivery, PCIe 5.0 support, DDR5 memory compatibility, and WiFi 6E connectivity, it is designed for high-performance gaming and enthusiast PC builds.",

        specs: {
        Brand: "ASUS",
        Model: "ROG Strix Z790-E Gaming WiFi",
        Socket: "LGA1700",
        Chipset: "Intel Z790",
        FormFactor: "ATX",
        Memory: "DDR5 up to 192GB",
        MemorySlots: "4 x DIMM",
        Expansion: "PCIe 5.0 x16",
        Storage: "5 x M.2, 4 x SATA 6Gb/s",
        Networking: "WiFi 6E + 2.5Gb Ethernet",
        USB: "USB 3.2 Gen 2x2 Type-C",
        Audio: "ROG SupremeFX 7.1"
        }
    },

    "b760": {
        name: "Gigabyte B760 AORUS Elite AX",
        price: "₱11,995.00",
        image: "./photos/b760.jpg",
        description: "The Gigabyte B760 AORUS Elite AX is a feature-packed ATX motherboard designed for Intel 12th, 13th, and 14th Gen processors. With DDR5 support, PCIe 4.0 connectivity, WiFi 6, and a robust power delivery system, it provides excellent performance and reliability for gaming and productivity builds.",

        specs: {
        Brand: "Gigabyte",
        Model: "B760 AORUS Elite AX",
        Socket: "LGA1700",
        Chipset: "Intel B760",
        FormFactor: "ATX",
        Memory: "DDR5 up to 192GB",
        MemorySlots: "4 x DIMM",
        Expansion: "PCIe 4.0 x16",
        Storage: "3 x M.2, 4 x SATA 6Gb/s",
        Networking: "WiFi 6 + 2.5Gb Ethernet",
        USB: "USB 3.2 Gen 2 Type-C",
        Audio: "Realtek High Definition Audio"
        }
    },

    "9901tb": {
        name: "Samsung 990 EVO Plus 1TB NVMe SSD",
        price: "₱15,450.00",
        image: "./photos/9901tb.jpg",
        description: "The Samsung 990 EVO Plus 1TB NVMe SSD delivers exceptional speed and reliability for gaming, content creation, and professional workloads. Utilizing PCIe 4.0 technology, it provides ultra-fast data transfer rates, reduced load times, and efficient power consumption in a compact M.2 2280 form factor.",

        specs: {
        Brand: "Samsung",
        Model: "990 EVO Plus",
        Capacity: "1TB",
        FormFactor: "M.2 2280",
        Interface: "PCIe 4.0 x4 NVMe",
        ReadSpeed: "Up to 7,250 MB/s",
        WriteSpeed: "Up to 6,300 MB/s",
        NAND: "Samsung V-NAND",
        Controller: "Samsung In-House Controller",
        Endurance: "600 TBW",
        Warranty: "5 Years Limited"
        }
    },

    "corsair16gb": {
        name: "Corsair Vengeance RGB 16GB (2x8GB) DDR5-6000",
        price: "₱15,757.00",
        image: "./photos/vengance16gb.jpg",
        description: "The Corsair Vengeance RGB DDR5 memory kit delivers high-speed performance and vibrant RGB lighting for modern gaming systems. Optimized for Intel XMP profiles, it provides smooth multitasking and enhanced gaming responsiveness.",

        specs: {
        Brand: "Corsair",
        Model: "Vengeance RGB",
        Capacity: "16GB (2x8GB)",
        Type: "DDR5",
        Speed: "6000MT/s",
        Latency: "CL36",
        Voltage: "1.35V",
        RGB: "Yes",
        Profile: "Intel XMP 3.0",
        Heatspreader: "Aluminum"
        }
    },

    "trident32gb": {
        name: "G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5-6000",
        price: "₱32,950.00",
        image: "./photos/trident32gb.jpg",
        description: "The G.Skill Trident Z5 RGB DDR5 memory kit combines premium aesthetics with high-end performance. Built for enthusiasts and gamers, it features low latency, customizable RGB lighting, and excellent overclocking capability.",

        specs: {
        Brand: "G.Skill",
        Model: "Trident Z5 RGB",
        Capacity: "32GB (2x16GB)",
        Type: "DDR5",
        Speed: "6000MT/s",
        Latency: "CL30",
        Voltage: "1.35V",
        RGB: "Yes",
        Profile: "Intel XMP 3.0",
        Heatspreader: "Aluminum"
        }
    },

    "x870e-e": {
        name: "ASUS ROG Strix X870E-E Gaming WiFi",
        price: "₱36,650.00",
        image: "./photos/x870e-e.jpg",
        description: "The ASUS ROG Strix X870E-E Gaming WiFi is a premium AM5 motherboard built for AMD Ryzen 7000, 8000, and 9000 Series processors. Featuring PCIe 5.0 connectivity, DDR5 memory support, advanced power delivery, and WiFi 7 networking, it is designed for enthusiasts, gamers, and content creators who demand top-tier performance.",

        specs: {
        Brand: "ASUS",
        Model: "ROG Strix X870E-E Gaming WiFi",
        Socket: "AM5",
        Chipset: "AMD X870E",
        FormFactor: "ATX",
        Memory: "DDR5 up to 192GB",
        MemorySlots: "4 x DIMM",
        Expansion: "PCIe 5.0 x16",
        Storage: "5 x M.2, 4 x SATA 6Gb/s",
        Networking: "WiFi 7 + 2.5Gb Ethernet",
        USB: "USB4 Type-C",
        Audio: "ROG SupremeFX 7.1"
        }
    },

    "b650": {
        name: "MSI MAG B650 Tomahawk WiFi",
        price: "₱14,295.00",
        image: "./photos/b650.jpg",
        description: "The MSI MAG B650 Tomahawk WiFi is a highly regarded AM5 motherboard that delivers excellent stability, cooling, and performance for AMD Ryzen processors. It features DDR5 support, PCIe 4.0 connectivity, and integrated WiFi 6E for a complete gaming experience.",

        specs: {
        Brand: "MSI",
        Model: "MAG B650 Tomahawk WiFi",
        Socket: "AM5",
        Chipset: "AMD B650",
        FormFactor: "ATX",
        Memory: "DDR5 up to 192GB",
        MemorySlots: "4 x DIMM",
        Expansion: "PCIe 4.0 x16",
        Storage: "3 x M.2, 6 x SATA 6Gb/s",
        Networking: "WiFi 6E + 2.5Gb Ethernet",
        USB: "USB 3.2 Gen 2x2 Type-C",
        Audio: "7.1 Channel HD Audio"
        }
    },

    "9902tb": {
        name: "Samsung 990 Pro 2TB NVMe SSD",
        price: "₱39,095.00",
        image: "./photos/9902tb.jpg",
        description: "The Samsung 990 Pro 2TB NVMe SSD is a flagship PCIe 4.0 storage solution designed for gamers, content creators, and professionals. With industry-leading speeds, excellent power efficiency, and Samsung's renowned reliability, it delivers exceptional performance for demanding workloads and next-generation gaming.",

        specs: {
        Brand: "Samsung",
        Model: "990 Pro",
        Capacity: "2TB",
        FormFactor: "M.2 2280",
        Interface: "PCIe 4.0 x4 NVMe",
        ReadSpeed: "Up to 7,450 MB/s",
        WriteSpeed: "Up to 6,900 MB/s",
        NAND: "Samsung V-NAND",
        Controller: "Samsung In-House Controller",
        Endurance: "1,200 TBW",
        Warranty: "5 Years Limited"
        }
    },

    "furybeas16gb": {
        name: "Kingston Fury Beast RGB 16GB (2x8GB) DDR5-5600",
        price: "₱4,890.00",
        image: "./photos/fury16gb.jpg",
        description: "The Kingston Fury Beast RGB DDR5 memory kit delivers reliable performance and stylish RGB lighting for modern gaming PCs. Featuring DDR5 technology and Intel XMP support, it provides faster speeds, improved efficiency, and smooth multitasking.",

        specs: {
        Brand: "Kingston",
        Model: "Fury Beast RGB",
        Capacity: "16GB (2x8GB)",
        Type: "DDR5",
        Speed: "5600MT/s",
        Latency: "CL36",
        Voltage: "1.25V",
        RGB: "Yes",
        Profile: "Intel XMP 3.0",
        Heatspreader: "Low-Profile Aluminum"
        }
    },

    "z5neo64gb": {
        name: "G.Skill Trident Z5 Neo RGB 64GB (2x32GB) DDR5-6000",
        price: "₱63,850.00",
        image: "./photos/z5neo64gb.jpg",
        description: "The G.Skill Trident Z5 Neo RGB 64GB DDR5 memory kit is designed specifically for AMD Ryzen platforms. Featuring AMD EXPO support, low-latency performance, and customizable RGB lighting, it delivers exceptional speed and stability for gaming, streaming, content creation, and professional workloads.",

        specs: {
        Brand: "G.Skill",
        Model: "Trident Z5 Neo RGB",
        Capacity: "64GB (2x32GB)",
        Type: "DDR5",
        Speed: "6000MT/s",
        Latency: "CL30",
        Voltage: "1.35V",
        RGB: "Yes",
        Profile: "AMD EXPO",
        Heatspreader: "Aluminum",
        Compatibility: "AMD Ryzen 7000/8000/9000 Series"
        }
    },

    "msiz790": {
        name: "MSI MAG Z790 Tomahawk WiFi",
        price: "₱14,950.00",
        image: "./photos/z790.jpg",
        description: "The MSI MAG Z790 Tomahawk WiFi is a high-performance ATX motherboard built for Intel 12th, 13th, and 14th Gen processors. Equipped with DDR5 support, PCIe 5.0 connectivity, robust VRM cooling, and WiFi 6E networking, it provides a solid foundation for gaming and productivity systems.",

        specs: {
        Brand: "MSI",
        Model: "MAG Z790 Tomahawk WiFi",
        Socket: "LGA1700",
        Chipset: "Intel Z790",
        FormFactor: "ATX",
        Memory: "DDR5 up to 192GB",
        MemorySlots: "4 x DIMM",
        Expansion: "PCIe 5.0 x16",
        Storage: "4 x M.2, 7 x SATA 6Gb/s",
        Networking: "WiFi 6E + 2.5Gb Ethernet",
        USB: "USB 3.2 Gen 2x2 Type-C",
        Audio: "7.1 Channel HD Audio"
        }
    },

    "gigabyteb650": {
        name: "Gigabyte B650 AORUS Elite AX",
        price: "₱12,250.00",
        image: "./photos/b650aorus.jpg",
        description: "The Gigabyte B650 AORUS Elite AX is a feature-rich AM5 motherboard designed for AMD Ryzen processors. With DDR5 memory support, PCIe 4.0 connectivity, robust power delivery, and integrated WiFi 6E, it provides excellent performance and reliability for gaming and productivity builds.",

        specs: {
        Brand: "Gigabyte",
        Model: "B650 AORUS Elite AX",
        Socket: "AM5",
        Chipset: "AMD B650",
        FormFactor: "ATX",
        Memory: "DDR5 up to 192GB",
        MemorySlots: "4 x DIMM",
        Expansion: "PCIe 4.0 x16",
        Storage: "3 x M.2, 4 x SATA 6Gb/s",
        Networking: "WiFi 6E + 2.5Gb Ethernet",
        USB: "USB 3.2 Gen 2 Type-C",
        Audio: "7.1 Channel HD Audio"
        }
    },

    "sn770": {
        name: "WD Black SN770 1TB NVMe SSD",
        price: "₱5,995.00",
        image: "./photos/sn7701tb.jpg",
        description: "The WD Black SN770 1TB NVMe SSD is a high-performance PCIe 4.0 drive built for gamers and power users. It offers fast load times, responsive system performance, and efficient power consumption, making it an excellent upgrade for modern gaming PCs and workstations.",

        specs: {
        Brand: "Western Digital",
        Model: "WD Black SN770",
        Capacity: "1TB",
        FormFactor: "M.2 2280",
        Interface: "PCIe 4.0 x4 NVMe",
        ReadSpeed: "Up to 5,150 MB/s",
        WriteSpeed: "Up to 4,900 MB/s",
        NAND: "3D NAND",
        Controller: "WD In-House Controller",
        Endurance: "600 TBW",
        Warranty: "5 Years Limited"
        }
    },

    "nv3": {
        name: "Kingston NV3 500GB NVMe SSD",
        price: "₱7,995.00",
        image: "./photos/nv3500gb.jpg",
        description: "The Kingston NV3 500GB NVMe SSD is an entry-level PCIe 4.0 storage solution that delivers fast boot times, responsive application loading, and reliable everyday performance. Its compact M.2 design makes it ideal for gaming PCs, laptops, and productivity systems.",

        specs: {
        Brand: "Kingston",
        Model: "NV3",
        Capacity: "500GB",
        FormFactor: "M.2 2280",
        Interface: "PCIe 4.0 x4 NVMe",
        ReadSpeed: "Up to 5,000 MB/s",
        WriteSpeed: "Up to 3,000 MB/s",
        NAND: "3D NAND",
        Controller: "Kingston Controller",
        Endurance: "160 TBW",
        Warranty: "3 Years Limited"
        }
    },

    "dominator64gb": {
        name: "Corsair Dominator Titanium RGB 64GB (2x32GB) DDR5-6000",
        price: "₱33,995.00",
        image: "./photos/dominator64gb.jpg",
        description: "The Corsair Dominator Titanium RGB DDR5 memory kit combines premium craftsmanship, customizable RGB lighting, and enthusiast-grade performance. Designed for high-end gaming, streaming, and professional workloads, it offers exceptional speed, stability, and aesthetics.",

        specs: {
        Brand: "Corsair",
        Model: "Dominator Titanium RGB",
        Capacity: "64GB (2x32GB)",
        Type: "DDR5",
        Speed: "6000MT/s",
        Latency: "CL30",
        Voltage: "1.40V",
        RGB: "Yes",
        Profile: "Intel XMP 3.0",
        Heatspreader: "Premium Aluminum",
        Compatibility: "Intel & AMD Platforms"
        }
    },

    "renegade32gb": {
        name: "Kingston Fury Renegade RGB 32GB (2x16GB) DDR5-6400",
        price: "₱27,500.00",
        image: "./photos/renegade32gb.jpg",
        description: "The Kingston Fury Renegade RGB DDR5 memory kit is engineered for enthusiasts seeking high-frequency performance and aggressive styling. With ultra-fast DDR5 speeds, RGB lighting, and overclocking support, it is ideal for modern gaming and content creation systems.",

        specs: {
        Brand: "Kingston",
        Model: "Fury Renegade RGB",
        Capacity: "32GB (2x16GB)",
        Type: "DDR5",
        Speed: "6400MT/s",
        Latency: "CL32",
        Voltage: "1.40V",
        RGB: "Yes",
        Profile: "Intel XMP 3.0",
        Heatspreader: "Aluminum",
        Compatibility: "Intel & AMD Platforms"
        }
    },

    "gprox": {
        name: "Logitech G Pro X Superlight 2",
        price: "₱8,995.00",
        image: "./photos/logitechgpro.jpg",
        description: "The Logitech G Pro X Superlight 2 is an ultra-lightweight wireless gaming mouse built for esports professionals. Featuring the HERO 2 sensor and LIGHTSPEED wireless technology, it delivers exceptional accuracy, responsiveness, and performance.",

        specs: {
        Brand: "Logitech",
        Model: "G Pro X Superlight 2",
        Type: "Wireless Gaming Mouse",
        Sensor: "HERO 2",
        DPI: "32,000 DPI",
        Weight: "60g",
        Connectivity: "LIGHTSPEED Wireless",
        Buttons: "5 Programmable Buttons",
        BatteryLife: "Up to 95 Hours",
        RGB: "No",
        Compatibility: "Windows & macOS"
        }
    },

    "steelseries": {
        name: "SteelSeries Arctis Nova 7",
        price: "₱9,995.00",
        image: "./photos/steelseries.jpg",
        description: "The SteelSeries Arctis Nova 7 delivers premium wireless gaming audio with powerful drivers, long battery life, and multi-platform compatibility. Designed for comfort and immersive gameplay.",

        specs: {
        Brand: "SteelSeries",
        Model: "Arctis Nova 7",
        Type: "Wireless Gaming Headset",
        Drivers: "40mm Neodymium",
        Connectivity: "2.4GHz Wireless & Bluetooth",
        BatteryLife: "38 Hours",
        Microphone: "ClearCast Gen 2",
        SurroundSound: "360° Spatial Audio",
        RGB: "No",
        Compatibility: "PC, PlayStation, Xbox, Switch"
        }
    },

    "keychron": {
        name: "Keychron K8 Pro RGB",
        price: "₱6,000.00",
        image: "./photos/keychronk8.jpg",
        description: "The Keychron K8 Pro is a versatile wireless mechanical keyboard featuring hot-swappable switches, RGB lighting, and multi-device Bluetooth connectivity.",

        specs: {
        Brand: "Keychron",
        Model: "K8 Pro RGB",
        Layout: "TKL (87 Keys)",
        Switches: "Gateron Mechanical",
        Connectivity: "Bluetooth & USB-C",
        HotSwappable: "Yes",
        RGB: "Yes",
        Battery: "4000mAh",
        Keycaps: "Double-Shot PBT",
        Compatibility: "Windows & macOS"
        }
    },

    "deathadder": {
        name: "Razer DeathAdder V3 Pro",
        price: "₱9,450.00",
        image: "./photos/deathadder.jpg",
        description: "The Razer DeathAdder V3 Pro is a lightweight wireless esports mouse equipped with the Focus Pro 30K sensor and ergonomic design for maximum comfort and precision.",

        specs: {
        Brand: "Razer",
        Model: "DeathAdder V3 Pro",
        Type: "Wireless Gaming Mouse",
        Sensor: "Focus Pro 30K",
        DPI: "30,000 DPI",
        Weight: "63g",
        Connectivity: "Razer HyperSpeed Wireless",
        Buttons: "5 Programmable Buttons",
        BatteryLife: "Up to 90 Hours",
        RGB: "No",
        Compatibility: "Windows & macOS"
        }
    },

    "cloud3": {
        name: "HyperX Cloud III",
        price: "₱5,490.00",
        image: "./photos/cloud3.jpg",
        description: "The HyperX Cloud III offers exceptional comfort, clear communication, and immersive audio with upgraded drivers and DTS Spatial Audio support.",

        specs: {
        Brand: "HyperX",
        Model: "Cloud III",
        Type: "Gaming Headset",
        Drivers: "53mm Angled Drivers",
        Connection: "USB-C & 3.5mm",
        Microphone: "Detachable Noise-Cancelling",
        Audio: "DTS Spatial Audio",
        Weight: "320g",
        RGB: "No",
        Compatibility: "PC, PlayStation, Xbox, Switch"
        }
    },

    "k70rgb": {
        name: "Corsair K70 RGB Pro",
        price: "₱7,250.00",
        image: "./photos/k70rgb.jpg",
        description: "The Corsair K70 RGB Pro is a premium gaming keyboard featuring Cherry MX switches, RGB lighting, and tournament-ready performance.",

        specs: {
        Brand: "Corsair",
        Model: "K70 RGB Pro",
        Layout: "Full Size",
        Switches: "Cherry MX",
        Connection: "USB",
        RGB: "Per-Key RGB",
        Keycaps: "PBT Double-Shot",
        PollingRate: "8000Hz",
        WristRest: "Included",
        Compatibility: "Windows"
        }
    },

    "harpeace": {
        name: "ASUS ROG Harpe Ace Aim Lab Edition",
        price: "₱5,150.00",
        image: "./photos/harpeace.jpg",
        description: "The ASUS ROG Harpe Ace Aim Lab Edition is an ultralight esports gaming mouse co-developed with professional players and Aim Lab for peak performance.",

        specs: {
        Brand: "ASUS",
        Model: "ROG Harpe Ace Aim Lab Edition",
        Type: "Wireless Gaming Mouse",
        Sensor: "ROG AimPoint",
        DPI: "36,000 DPI",
        Weight: "54g",
        Connectivity: "Bluetooth, RF 2.4GHz, USB",
        Buttons: "5 Programmable Buttons",
        BatteryLife: "Up to 90 Hours",
        RGB: "No",
        Compatibility: "Windows"
        }
    },

    "gproxtkl": {
        name: "Logitech G Pro X TKL Lightspeed",
        price: "₱10,995.00",
        image: "./photos/gproxtkl.jpg",
        description: "The Logitech G Pro X TKL Lightspeed is a tournament-grade wireless mechanical keyboard designed for esports professionals seeking speed and reliability.",

        specs: {
        Brand: "Logitech",
        Model: "G Pro X TKL Lightspeed",
        Layout: "TKL (87 Keys)",
        Switches: "GX Mechanical Switches",
        Connectivity: "LIGHTSPEED Wireless & USB-C",
        RGB: "LIGHTSYNC RGB",
        BatteryLife: "Up to 50 Hours",
        Keycaps: "Double-Shot PBT",
        PollingRate: "1000Hz",
        Compatibility: "Windows & macOS"
        }
    },

    "blackshark": {
        name: "Razer BlackShark V2 Pro (2023)",
        price: "₱10,800.00",
        image: "./photos/blackshark.jpg",
        description: "The Razer BlackShark V2 Pro (2023) is a premium wireless esports headset featuring TriForce Titanium drivers, an upgraded microphone, and exceptional audio clarity.",

        specs: {
        Brand: "Razer",
        Model: "BlackShark V2 Pro (2023)",
        Type: "Wireless Gaming Headset",
        Drivers: "TriForce Titanium 50mm",
        Connectivity: "Razer HyperSpeed Wireless",
        BatteryLife: "Up to 70 Hours",
        Microphone: "HyperClear Super Wideband Mic",
        Audio: "THX Spatial Audio",
        Weight: "320g",
        RGB: "No",
        Compatibility: "PC, PlayStation"
        }
    }

};

// Get product id from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Find the product using the product ID
const product = products[productId];

// Check if the product exists
if(product){

    // Display the product name
    document.getElementById("productName").textContent = product.name;

    // Display the product price
    document.getElementById("productPrice").textContent = product.price;

    // Display the product image
    document.getElementById("productImage").src = product.image;

    // Display the product description
    document.getElementById("productDescription").textContent = product.description;

     // Get the container for the product specifications
    const specsContainer = document.getElementById("productSpecs");

    // Check if the product has specifications
    if(product.specs){

        // Start creating the specifications table
        let specsHTML = `
        <table class="table">
            <tbody>
        `;

        // Loop through each specification
        for(const key in product.specs){

             // Add the specification name and value
            specsHTML += `
                <tr>
                    <th>${key}</th>
                    <td>${product.specs[key]}</td>
                </tr>
            `;
        }

        // Close the table
        specsHTML += `
            </tbody>
        </table>
        `;

         // Display the specifications table
        specsContainer.innerHTML = specsHTML;
    }
}

// ======================================================
// BREADCRUMB SECTION
// ======================================================

// Get category value from URL
// Example:
// ?id=asus5090&category=PC Parts
const category = params.get("category");

// Default breadcrumb link
let categoryLink = "#";

// Set category page link based on selected category
if(category === "PC Parts"){
    categoryLink = "./pcparts.html";
}
else if(category === "Monitor"){
    categoryLink = "./monitor.html";
}
else if(category === "Peripherals"){
    categoryLink = "./peripherals.html"
}

// Check if product exists
if(product){


    // If category exists in URL
    // Example:
    // Home > PC Parts > Product
    if(category){

        document.getElementById("breadcrumb").innerHTML = `
            <a href="./index.html"
               class="text-decoration-none fw-bold text-dark">
               Home
            </a>
            >
            <a href="${categoryLink}"
               class="text-decoration-none fw-bold text-dark">
               ${category}
            </a>
            >
            <span>${product.name}</span>
        `;

    }

    // If no category is provided
    // Example:
    // Home > Product
    else{

        document.getElementById("breadcrumb").innerHTML = `
            <a href="./index.html"
               class="text-decoration-none fw-bold text-dark">
               Home
            </a>
            >
            <span>${product.name}</span>
        `;

    }

}

// Add a click event to the Add to Cart button
document.getElementById("cartBtn").addEventListener("click", function(e){

     // Check if the user is logged in
    if(localStorage.getItem("loggedIn") !== "true"){

         // Prevent the button from continuing
        e.preventDefault();

        // Send the user to the login page
        window.location.href = "../login/login.html";
        return;
    }

    // Get the cart from localStorage
    // If there is no cart, create an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Display the price type and value in the console
    // This is useful for checking errors
    console.log("product.price type:", typeof product.price, "value:", product.price);

    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.id === productId);

    // If the product already exists
    if(existingItem){

        // Increase the quantity by 1
        existingItem.quantity += 1;

    }
    else{

        // If the product does not exist,
        // add it as a new item
        cart.push({
            id: productId,
            name: product.name,

            // Remove the peso sign and comma
            // then convert the price into a number
            price: Number(product.price.replace(/[₱,]/g, "")),

             // Save the product image
            image: product.image,

            // Set the starting quantity to 1
            quantity: 1
        });

    }
    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect the user to the cart page
    window.location.href = "./cart.html";
});

