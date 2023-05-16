import{_ as a,o as t,c as r,a as e}from"./entry.e8babe8f.js";const o={},s={class:"mx-8 my-4"},n=e("div",{class:"mb-2"}," * Disk storage sizes are approximate, and represent the largest configuration available for the appliance. When referring to drive capacity, one terabyte, or TB, equals one thousand billion bytes and one gigabyte, or GB, equals one billion bytes. The operating system may use a different standard of measurement and report a lower capacity. Some of the listed capacity is used for formatting and other functions and will not be available for data storage. ",-1),i=e("div",{class:"mb-2"}," \u2020 Actual performance depends on network traffic. Stated specifications represent the fastest configuration available for the appliance, however, other configurations are also available for specific use cases. Forward node estimates assume a separate Manager Node is used. ",-1),g=e("div",{class:"mb-2"}," \u2021 The SOS 10000 and GoBig Forward Node Throughput rating is achieved without full packet capture. ",-1),p=[n,i,g];function c(m,u){return t(),r("div",s,p)}const d=a(o,[["render",c]]),f=[{name:"500",category:"Enterprise",tagline:"Designed for performance and value",roles:["Forward node in a branch office"],sensor:!0,performance:{Speed:25,Retention:25},img_front_thumb:"sos-1u-front-thumb.jpg",img_front:"sos-1u-front.jpg",img_back_thumb:"sos-1u-ethernet-back-thumb.jpg",img_back:"sos-1u-ethernet-back.jpg",threesixty:[{imagePath:"/img/appliances/sos-1u-ethernet-strip.jpg",count:36}],specs:{"Standalone Throughput \u2020":"N/A","Forward Node Throughput \u2020":"500 Mbps","Data Storage *":"8 TB","Data Storage Class":"7K RPM","Data Storage RAID":"Single Disk","OS Storage *":"240 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:"6 x 1GbE RJ45, 2 x 10/25GbE SFP28","Form Factor":"1U"},caveats:{storageApproximated:!0,performanceDependsOnTraffic:!0}},{name:"1000",category:"Enterprise",tagline:"Designed for performance and value",roles:["Standalone node in a small organization","Forward node in a medium office"],sensor:!0,performance:{Speed:50,Retention:50},img_front_thumb:"sos-1u-front-thumb.jpg",img_front:"sos-1u-front.jpg",img_back_thumb:"sos-1u-ethernet-back-thumb.jpg",img_back:"sos-1u-ethernet-back.jpg",threesixty:[{imagePath:"/img/appliances/sos-1u-ethernet-strip.jpg",count:36}],specs:{"Standalone Throughput \u2020":"500 Mbps","Forward Node Throughput \u2020":"1 Gbps","Data Storage *":"24 TB","Data Storage Class":"7K RPM","Data Storage RAID":"RAID 5","OS Storage *":"240 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:"6 x 1GbE RJ45, 2 x 10/25GbE SFP28","Form Factor":"1U"},caveats:{storageApproximated:!0,performanceDependsOnTraffic:!0}},{name:"1000F",category:"Enterprise",tagline:"Designed for performance and value on fiber infrastructure",roles:["Standalone node in a small organization w/ fiber","Forward node in a medium office w/ fiber"],sensor:!0,performance:{Speed:50,Retention:50},img_front_thumb:"sos-1u-front-thumb.jpg",img_front:"sos-1u-front.jpg",img_back_thumb:"sos-1u-sfp-back-thumb.jpg",img_back:"sos-1u-sfp-back.jpg",threesixty:[{imagePath:"/img/appliances/sos-1u-sfp-strip.jpg",count:38}],specs:{"Standalone Throughput \u2020":"500 Mbps","Forward Node Throughput \u2020":"1 Gbps","Data Storage *":"24 TB","Data Storage Class":"7K RPM","Data Storage RAID":"RAID 5","OS Storage *":"240 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:"2 x 1GbE RJ45, 2 x 1/10GbE SFP+, 2 x 10/25GbE SFP28","Form Factor":"1U"},caveats:{storageApproximated:!0,performanceDependsOnTraffic:!0}},{name:"4000",category:"Enterprise",tagline:"Designed for high throughput observation with full packet capture",roles:["Forward node in a data center"],uses:["Large Office"],sensor:!0,performance:{Speed:75,Retention:50},img_front_thumb:"sos-2u-front-thumb.jpg",img_front:"sos-2u-front.jpg",img_back_thumb:"sos-2u-back-thumb.jpg",img_back:"sos-2u-back.jpg",threesixty:[{imagePath:"/img/appliances/sos-2u-strip.jpg",count:42}],specs:{"Standalone Throughput \u2020":"N/A","Forward Node Throughput \u2020":"4 Gbps","Data Storage *":"120 TB","Data Storage Class":"7K RPM","Data Storage RAID":"RAID 6","OS Storage *":"240 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:"6 x 1GbE RJ45, 4 x 10GbE SFP+, 2 x 10/25GbE SFP28","Form Factor":"2U"},caveats:{storageApproximated:!0,performanceDependsOnTraffic:!0}},{name:"10000",category:"Enterprise",tagline:"Designed for extreme performance with alerts and packet metadata",roles:["Forward node in a large data center","(alerts and metadata)"],sensor:!0,performance:{Speed:100,Retention:25},img_front_thumb:"sos-1u-front-thumb.jpg",img_front:"sos-1u-front.jpg",img_back_thumb:"sos-1u-sfp-back-thumb.jpg",img_back:"sos-1u-sfp-back.jpg",threesixty:[{imagePath:"/img/appliances/sos-1u-sfp-strip.jpg",count:38}],specs:{"Standalone Throughput \u2020":"N/A","Forward Node Throughput \u2020":"10 Gbps \u2021","Data Storage *":"7 TB","Data Storage Class":"SSD","Data Storage RAID":"RAID 10","OS Storage *":"240 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:"2 x 1GbE RJ45, 2 x 1/10GbE SFP+, 2 x 10/25GbE SFP28","Form Factor":"1U"},caveats:{storageApproximated:!0,performanceDependsOnTraffic:!0,withoutPcap:!0}},{name:"MN",category:"Enterprise",tagline:"High performance Manager node",roles:["Manager node in a distributed architecture","Manager Search node in a small distributed architecture"],sensor:!1,performance:{Performance:100,Retention:50},img_front_thumb:"sos-1u-front-thumb.jpg",img_front:"sos-1u-front.jpg",img_back_thumb:"sos-1u-ethernet-back-thumb.jpg",img_back:"sos-1u-ethernet-back.jpg",threesixty:[{imagePath:"/img/appliances/sos-1u-ethernet-strip.jpg",count:36}],specs:{"Standalone Throughput \u2020":"N/A","Forward Node Throughput \u2020":"N/A","Data Storage *":"15 TB","Data Storage Class":"NVMe","Data Storage RAID":"RAID 1","OS Storage *":"240 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:"6 x 1GbE RJ45, 2 x 10/25GbE SFP28","Form Factor":"1U"},caveats:{storageApproximated:!0}},{name:"SN7200",category:"Enterprise",tagline:"High volume, resilient storage with fast search performance",roles:["Search node in a distributed architecture","Manager Search node in a medium distributed architecture","Warm Search node in a large distributed architecture","Standalone node in a medium to large office"],sensor:!1,performance:{Performance:50,Retention:100},img_front_thumb:"sos-2u-front-thumb.jpg",img_front:"sos-2u-front.jpg",img_back_thumb:"sos-2u-back-thumb.jpg",img_back:"sos-2u-back.jpg",threesixty:[{imagePath:"/img/appliances/sos-2u-strip.jpg",count:42}],specs:{"Standalone Throughput \u2020":"3 Gbps","Forward Node Throughput \u2020":"N/A","Data Storage *":"72 TB","Data Storage Class":"7K RPM","Data Storage RAID":"RAID 10","OS Storage *":"240 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:"6 x 1GbE RJ45, 4 x 10GbE SFP+, 2 x 10/25GbE SFP28","Form Factor":"2U"},caveats:{storageApproximated:!0}},{name:"SNNV",category:"Enterprise",tagline:"High volume, resilient storage with rapid search performance",roles:["Search node in a distributed architecture","Manager Search node in a medium distributed architecture","Hot Search node in a large distributed architecture","Standalone node in a medium to large office or data center"],performance:{Performance:100,Retention:75},img_front_thumb:"sos-1u-front-thumb.jpg",img_front:"sos-1u-front.jpg",img_back_thumb:"sos-1u-sfp-back-thumb.jpg",img_back:"sos-1u-sfp-back.jpg",threesixty:[{imagePath:"/img/appliances/sos-1u-sfp-strip.jpg",count:38}],specs:{"Standalone Throughput \u2020":"5 Gbps","Forward Node Throughput \u2020":"N/A","Data Storage *":"30 TB","Data Storage Class":"NVMe","Data Storage RAID":"RAID 10","OS Storage *":"240 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:" 2 x 1GbE RJ45, 2 x 1/10GbE SFP+, 2 x 10/25GbE SFP28","Form Factor":"1U"},caveats:{storageApproximated:!0}},{name:"GoFast",category:"Response Ready",tagline:"High performance packed into an ATA compliant form factor",roles:["Rapidly deployable incident response","High mobility for commercial transportation","(all node types supported)"],sensor:!0,performance:{Speed:25,Retention:25},img_front_thumb:"sos-gf-front-thumb.jpg",img_front:"sos-gf-front.jpg",img_back_thumb:"sos-gf-back-thumb.jpg",img_back:"sos-gf-back.jpg",threesixty:[{name:"View without case",imagePath:"/img/appliances/sos-gofast-strip.jpg",count:16},{name:"View with case handle up",imagePath:"/img/appliances/sos-gofast-strip-handleup.jpg",count:8},{name:"View with case handle down",imagePath:"/img/appliances/sos-gofast-strip-handledown.jpg",count:8}],specs:{"Standalone Throughput \u2020":"5 Gbps","Forward Node Throughput \u2020":"10 Gbps","Data Storage *":"Up to 120 TB","Data Storage Class":"NVMe","Data Storage RAID":"RAID 0 or 10","OS Storage *":"480 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:`6 x 1GbE RJ45, 2-4 x 10/25GbE SFP28
QSFP28 also available`,"Form Factor":"ATA"},caveats:{storageApproximated:!0,performanceDependsOnTraffic:!0}},{name:"GoBig",category:"Response Ready",tagline:"High performance and storage in an ATA compliant form factor",roles:["Rapidly deployable incident response","High mobility for commercial transportation","(all node types supported)"],sensor:!0,performance:{Speed:50,Retention:50},img_front_thumb:"sos-gb-front-thumb.jpg",img_front:"sos-gb-front.jpg",img_back_thumb:"sos-gb-back-thumb.jpg",img_back:"sos-gb-back.jpg",threesixty:[{name:"View Without Case",imagePath:"/img/appliances/sos-gobig-strip.jpg",count:16},{name:"View With Case",imagePath:"/img/appliances/sos-gobig-strip-incase.jpg",count:7},{name:"View Case Handle Up",imagePath:"/img/appliances/sos-gobig-strip-handleup.jpg",count:8},{name:"View Case Handle Down",imagePath:"/img/appliances/sos-gobig-strip-handledown.jpg",count:8}],specs:{"Standalone Throughput \u2020":"5 Gbps","Forward Node Throughput \u2020":"10 Gbps \u2021","Data Storage *":"165 TB","Data Storage Class":"SSD","Data Storage RAID":"RAID 10","OS Storage *":"480 GB","OS Storage Class":"SSD","OS Storage RAID":"RAID 1",Interfaces:"6 x 1GbE RJ45, 4 x 10/25GbE SFP28","Form Factor":"ATA"},caveats:{storageApproximated:!0,performanceDependsOnTraffic:!0}}];export{d as F,f as a};
