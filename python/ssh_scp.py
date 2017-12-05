#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import pexpect
import os, sys, getpass


def ssh_command(user, host, password, command):
    ssh_newkey = '.*(yes/no).*'
    passwd_key = '.*assword.*'
    child = pexpect.spawn('ssh -l %s %s %s' %(user, host, command))
    child.logfile = sys.stdout
    i = child.expect([pexpect.TIMEOUT, ssh_newkey, passwd_key])

    if i == 0: #timeout
        print(child.before)
        print("Error time out")
        print(child.after)
        return None
    if i ==1 :
        child.sendline('yes')
        i = child.expect([pexpect.TIMEOUT, passwd_key])
        if i == 0:
            print(child.before)
            print('time out ERROR')
            print(child.after)
            return None
    child.sendline(password)
    return child

def scp2(ip, user, passwd, dst_path, filename):
    passwd_key = '.*assword.*'
    if os.path.isdir(filename):
        cmdline = 'scp -r %s %s@%s:%s' % (filename, user, ip, dst_path)
    else:
        cmdline = 'scp %s %s@%s:%s' % (filename, user, ip, dst_path)
    try:
        child = pexpect.spawn(cmdline)
        child.expect(passwd_key)
        child.sendline(passwd)
        child.expect(pexpect.EOF)
        #child.interact()
        #child.read()
        #child.expect('$')
        print("uploading")
    except:
        print("upload faild!")

def main():
    host = raw_input('Hostname:')
    user = raw_input('User:')
    password = getpass.getpass()
    command = raw_input('Command:')
    child = ssh_command(user, host, password, command)
    child.expect(pexpect.EOF)
    print(child.before)

if __name__ == "__main__":
    main()
