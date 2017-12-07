#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
import os
import configparser
from utils import demo_const
from utils.demo_log import DemoLog
from utils.demo_check import DemoCheck
from utils.demo_os import DemoOs


class DemoConfiger(object):
    def __init__(self):
        self.conf = None

    def prepare(self):
        # check demo.cfg exist
        if not DemoCheck.is_config_exist(
                demo_const.DEFAULT_CONFIG):
            DemoLog.warning("demo.cfg cannot found")
            return False

        if not self.__parse_config():
            return False

        self.__generate_config()
        self.__save_source_cases_list()
        return True

    def __parse_config(self):
        self.conf = configparser.ConfigParser()
        self.conf.read(demo_const.DEFAULT_CONFIG)

        try:
            self.obfuscate_wheel = bool(self.__parser_optional_config_boolean(
                "demo", 'obfuscate_wheel'))
        except configparser.NoOptionError:
            self.obfuscate_wheel = False

        try:
            self.xxx = self.__parser_option("demo", "demo_log")

            return True
        except configparser.Error:
            DemoLog.error("demo.cfg is incorrect, please check it")
            return False
