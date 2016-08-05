# ansible-hacking
Experimenting with Ansible

Append `--private-key=/path/to/aws-private-key.pem` to connect to the boxes. The `pem` should be the keypair you used in the ec2 setup process.

```
# Verify that the host exists
ansible -i hosts box -m ping

# See facts
ansible -i hosts box -m setup
``` 
