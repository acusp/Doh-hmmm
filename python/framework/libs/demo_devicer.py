#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
from utils.demo_adb import DemoAdb


class DemoDevicer(object):
    def __init__(self, belong_task):
        # Manager
        self.belong_task = belong_task
        self.configer = None

        # generated attributes
        self.serial_num = None
        self.sdk = None

    def prepare(self):
        self.__get_objects()
        return True

    def __get_objects(self):
        self.configer = self.belong_task.configer

    def only_one_device_attached(self):
        self.serial_num = DemoAdb.get_device_serial()
        if self.serial_num:
            return True
        else:
            return False

    def get_current_device_info(self):
        self.__get_device_sdk()

        tmp_list = list()
        for version_info in self.configer.sdk_info_list:
            if self.sdk == version_info["sdk"]:
                tmp_list.append(version_info)
                return tmp_list

    def __get_device_sdk(self):
        self.sdk = DemoAdb.get_device_property(self.serial_num,
                                             "ro.build.version.sdk")
