#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
import os
import sys


class SfOs(object):
    def __init__(self):
        pass

    @staticmethod
    def get_pwd():
        pwd = sys.path[0]
        if os.path.isfile(pwd):
            pwd = os.path.dirname(pwd)

        return pwd

    @staticmethod
    def sys_exit(num):
        sys.exit(num)

    @staticmethod
    def is_file_exist(name):
        """
        Check if file exists
        Parameter: name is file full name
        """
        if not os.path.exists(name):
            return False
        else:
            return os.path.isfile(name)
