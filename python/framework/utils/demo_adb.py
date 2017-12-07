#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import subprocess


class DemoAdb(object):
    adb_cmd = "adb"

    def __init__(self):
        pass

    @classmethod
    def get_device_serial_list(cls):
        cmd = 'adb devices'
        (status, output) = subprocess.getstatusoutput(cmd)
        if status == 0:
            # get serial_num_list
            split_lines = output.split('\n')
            split_lines.pop(0)
            serial_num_list = []
            for line in split_lines:
                if 'device' in line and 'devices' not in line:
                    serial_num_tmp_list = [x for x in line.split('\t')
                                           if len(x) > 0]
                    serial_num_list.append(serial_num_tmp_list[0])

            return serial_num_list
        else:
            return None

    @classmethod
    def get_manufacturer_and_model(cls, serial_num):
        cmd = "adb -s {0} shell getprop ro.product.manufacturer".format(
            serial_num)
        (status, output) = subprocess.getstatusoutput(cmd)
        if status == 0:
            if not output:
                manufacturer = None
            manufacturer = output.strip('\n')
        else:
            manufacturer = None

        cmd = "adb -s {0} shell getprop ro.product.model".format(
            serial_num)
        (status, output) = subprocess.getstatusoutput(cmd)
        if status == 0:
            if not output:
                model = None
            model = output.strip('\n')
        else:
            model = None

        return manufacturer, model
