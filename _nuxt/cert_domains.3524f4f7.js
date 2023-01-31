const e=[{name:"Design and Architecture",icon:"hard-hat",desc:"Strategies for properly designing and installing a Security Onion 2 grid.",details:"Topics for this section include but are not limited to: understanding the purpose and functionality of the different node types, recommended minimum hardware requirements for each node type, the applications and services each node type utilizes, and the different deployment modes.",percent:15},{name:"Grid Management",icon:"server",desc:"Procedures required in administering and maintaining a Security Onion 2 grid.",details:"Topics for this section include but are not limited to: user management, firewall management, understanding the key components of Saltstack, executing tasks using Salt commands, Salt State (SLS) files, yaml formatting, docker, log pipelines, alert management, and managing and configuring the different applications contained in the various Security Onion nodes.",percent:20},{name:"Grid Monitoring",icon:"chart-bar",desc:"Knowledge on how to identify potential issues in a Security Onion 2 grid.",details:"Topics for this section include but are not limited to: navigating the Grid and Grafana interfaces, the purpose and functionality of tools such as Telegraph and Influxdb, building notification channels, and configuring alerts in Grafana.",percent:10},{name:"Grid Tuning",icon:"tools",desc:"Tactics to ensure a Security Onion 2 sensor grid is running efficiently.",details:"Topics for this section include but are not limited to: Berkeley Packet Filters (BPF), adding additional CPU cores or workers, pinning application to specific CPU cores, adding additional disks to LVM, tuning af_packet ring size, Elasticsearch shard management, Redis memory tuning, and Logstash pipeline batch size tuning. ",percent:20},{name:"Troubleshooting",icon:"list",desc:"Tasks required to perform basic grid troubleshooting in Security Onion 2.",details:"Topics for this section include but are not limited to: understanding the purpose of the different so-* scripts, using Salt to assist in troubleshooting, locating the correct log files on the correct node, and using standard Linux command-line tools like grep, tail, and cat.",percent:10},{name:"Analyst Tools",icon:"crosshairs",desc:"Tools and techniques needed to properly investigate alerts and hunt for adversaries using Security Onion 2.",details:"Topics for this section include but are not limited to: the use of applications or tools available on Security Onion 2, to include the Security Onion Analyst node.",percent:25}],n={domains:e};export{n as d};