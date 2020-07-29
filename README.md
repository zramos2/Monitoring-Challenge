# Monitoring-Challenge
This challenge is to demonstrate monitoring using cloud micro services. 

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
`ec2sdconfigs` is used as a Prometheus service discovery option.
  - Prometheus has tons of different service discovery options for discoviering scrape targets, which in this case is an EC2 instance.
