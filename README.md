# ansible-hacking
Experimenting with Ansible

Append `--private-key=/path/to/aws-private-key.pem` to the commands below so you can connect to the boxes. The `pem` should be the keypair you used in the ec2 setup process.

```
# Verify that the host exists
ansible jboss -i hosts -m ping

# See facts
ansible jboss -i hosts -m setup

# Deploy JBoss
ansible-playbook -i hosts ansible-examples/jboss-standalone/site.yml --become

# Deploy a specific WAR to the server
ansible-playbook -i hosts ansible-examples/jboss-standalone/deploy-application.yml --become
``` 
