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

# Set up NodeJS
ansible-playbook -i hosts nick-playbooks/nodejs.yml
``` 

For simplicity, the nodejs app that we deploy is hosted in this repo as well. If you're hacking around locally, you'll need to push to the source that the playbook checks out from before that code will show up on the remote node.
