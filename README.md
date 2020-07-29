# Monitoring-Challenge
This challenge is to demonstrate monitoring using cloud micro services. 

## Objectives
- The goal is to set up a monitoring stack to **capture data points from 2 live EC2 instances.**
- Collect and display CPU, memory, and disk space usage
- Simulate high CPU, memory, and disk usage on the instances


## Configuration
- I created 3 t2.micro AWS EC2 instances named as **Prom1, Prom2, Prom3.**
<img width="843" alt="Screen Shot 2020-07-27 at 8 37 12 PM" src="https://user-images.githubusercontent.com/36197897/88746900-3ad76580-d113-11ea-9268-5a6747324097.png">

- The security group attached to the EC2 instances have **ports 22, 9090, 9100, and 3000** open to communicate with Prometheus and Grafana, and to SSH into the instances.
<img width="996" alt="Screen Shot 2020-07-27 at 8 44 46 PM" src="https://user-images.githubusercontent.com/36197897/88747506-83dbe980-d114-11ea-855e-f49985a0b393.png">

- Then I have a IAM user to attach to Prometheus with an `AmazonEC2ReadOnlyAccess` policy

