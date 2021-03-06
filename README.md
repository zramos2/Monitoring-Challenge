# Monitoring-Challenge
This challenge is to demonstrate monitoring of AWS microservices using Prometheus and Grafana.

### 1. Configurations
  - EC2 Configuration
  - Prometheus Configuration
  - Grafana Configuration
### 2. Simulation on monitored instances
  - High Memory Usage
  - High CPU Usage
  - High Disk Space

## Objectives
- The goal is to set up a monitoring stack to **capture data points from 2 live EC2 instances.**
- Collect and display CPU, memory, and disk space usage
- Simulate high CPU, memory, and disk usage on the instances


## EC2 Configuration

- I created 3 t2.micro AWS EC2 instances named as **Prom1, Prom2, Prom3.**
- **Prom1** has Prometheus and Grafana installed
- **Prom2** and **Prom3** has `node_exporter` installed
  - I used `node_exporter` because it's an exporter for machine metrics such as disk size, network traffic over time, can see when CPU spikes, etc, which is what is desired for the objective.  
<img width="843" alt="Screen Shot 2020-07-27 at 8 37 12 PM" src="https://user-images.githubusercontent.com/36197897/88746900-3ad76580-d113-11ea-9268-5a6747324097.png">

- The security group attached to the EC2 instances have **ports 22, 9090, 9100, and 3000** open to communicate with Prometheus and Grafana, and to SSH into the instances.
<img width="996" alt="Screen Shot 2020-07-27 at 8 44 46 PM" src="https://user-images.githubusercontent.com/36197897/88747506-83dbe980-d114-11ea-855e-f49985a0b393.png">

- Then I have a IAM user to attach to Prometheus with an `AmazonEC2ReadOnlyAccess` policy

## Prometheus Configuration

- My `prometheus.yml` file
<img width="707" alt="Screen Shot 2020-07-28 at 9 02 18 PM" src="https://user-images.githubusercontent.com/36197897/88748038-b0dccc00-d115-11ea-8fc6-664d1c5b4f49.png">

- `ec2_sd_configs` is used as a Promethues service discovery option.
  - Prometheus has tons of different service discovery options for discoviering scrape targets, which in this case is an EC2 instance.
- `relabel_configs` is used so that the instance name **Prom1, Prom2, Prom3** shows up rather than their IP addresses in Prometheus and Grafana.

## Grafana Configuration

- I borrowed Grafana dashboards from the Grafana community and used `1860` and `405` dashboards. 
  - These dashboards were specifically made for `node_exporter` 
  - https://grafana.com/grafana/dashboards/1860
  - https://grafana.com/grafana/dashboards/405
  
## Simulation on monitored instances

- Now that Prometheus and Grafana are set up, it's time to test and monitor the **Prom2** and **Prom3** instances!

#### High Memory Usage
- First I'll demonstrate high **memory** usage.
  - NOTE: because I'm putting strain on the **memory** this will also put strain on the **CPU.**
  - I used the `stress` tool to put strain on the memory.  
    - If you're curious on how to install the `stress` tool on an EC2 image:
      1. The t2.micro AMI is based on RHEL/CentOS.  So before you can install `stress`, you have to install `EPEL`
          - `sudo amazon-linux-extras install epel`
      2. Now you can install the `stress` tool.
          - `sudo yum install stress`
        
        
1. Check how much free memory you have with the `free -h` command.  
    - **Prom2** has 681MB of memory that is free.
<img width="578" alt="Screen Shot 2020-07-28 at 9 57 47 PM" src="https://user-images.githubusercontent.com/36197897/88751530-665f4d80-d11d-11ea-82e9-91baf936a875.png">

   - **Prom3** has 682MB of memory that is free.
  <img width="578" alt="Screen Shot 2020-07-28 at 9 59 35 PM" src="https://user-images.githubusercontent.com/36197897/88751670-afaf9d00-d11d-11ea-8f68-ec611148ade8.png">

2. Now use the `stress` command.
    - `stress --vm 1 --vm-bytes 500M --timeout 60`
    - `--vm` represents how much GB of total memory the system has. In our case, **Prom2** and **Prom3** has 983 MB total memory. 
    - `--vm-bytes` represents how much memory you want to fill. In this case, we want to fill 500MB of memory.
    - `--timeout` represents how long the `stress` command lasts in seconds.  In this case, it lasts for 60 seconds.  
  <img width="1350" alt="Screen Shot 2020-07-28 at 10 06 25 PM" src="https://user-images.githubusercontent.com/36197897/88752083-a5da6980-d11e-11ea-9895-22c3e92ebb10.png">

  - Viola! Prometheus recognized our memory usage and Grafana was able to visualize it.
  
#### High CPU Usage
- To demonstrate high CPU usage, we'll use the `stress` tool again.  
  
1. Check how much CPU your instance has.
    - t2.micro EC2 instances have only 1 CPU, but if you want to check how much CPU your instances has you can use `lscpu` command.
    
2. Now use the `stress` command.
    - `stress --cpu 1 --timeout 120`
    - `--cpu` represents how much CPU your instance has
    - Our `timeout`, in this case, lasts for 120 seconds.
  - Here is our Grafana graph for our CPU stress test.
<img width="1351" alt="Screen Shot 2020-07-28 at 10 24 42 PM" src="https://user-images.githubusercontent.com/36197897/88753161-28fcbf00-d121-11ea-8a44-6107cbf13eef.png">

#### High Disk Space
- Lastly, we'll demonstrate filling up our disk space.

1. Check how much disk space your instance has.
    - You can use the `df -h` command to check your disk space.
  - The biggest amount of disk space availbe on **Prom2** in 6.4 G.
<img width="376" alt="Screen Shot 2020-07-28 at 10 30 22 PM" src="https://user-images.githubusercontent.com/36197897/88753535-061eda80-d122-11ea-8f2d-2d38b89f7591.png">

  - The biggest amount of disk space availbe on **Prom3** in 6.5 G.
<img width="397" alt="Screen Shot 2020-07-28 at 10 33 38 PM" src="https://user-images.githubusercontent.com/36197897/88753682-70d01600-d122-11ea-9fd2-1357babc26ad.png">

2. To simulate filling up our disk space, we can create a big file.  
    - You can use `fallocate -l 5G file1`
      - This will create a file called `file` that takes of 5G of disk space.
    - If you want to delete the file, you can type `rm file1`.
<img width="1352" alt="Screen Shot 2020-07-28 at 10 44 36 PM" src="https://user-images.githubusercontent.com/36197897/88754297-ee485600-d123-11ea-8d66-b25d926c75ba.png">

- Notice how the disk space used drops down because I deleted the file. 
- We have now finished the challenge and completed the desired objectives for this project! 

## Where I had trouble in the Monitoring Challenge and what I did to fix it.  
- The main problem I had was setting up `node_exporter` on my 2 EC2 instances, and having Prometheus scrape them.  I knew I had to install `node_exporter` on each of my instances, but I could not get it running in Prometheus.  
- The error I kept getting was `connection refused`.
<img width="1395" alt="Screen Shot 2020-07-28 at 11 57 04 PM" src="https://user-images.githubusercontent.com/36197897/88758425-0cb34f00-d12e-11ea-941c-fdbe19eb362d.png">

- In order to fix this error, I realized I had to have the instances running `node_exporter` while **Prom1** was running Prometheus. 
