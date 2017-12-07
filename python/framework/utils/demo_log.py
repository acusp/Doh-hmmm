#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
import json
import logging
from base import demo_constant


class DemoLog(object):
    log_formatter = logging.Formatter("%(asctime)s %(levelname)s: %(message)s")
    DemoLogger = logging.getLogger("wheeljack.demo")
    DemoLogger.setLevel(logging.DEBUG)

    console_handler = logging.StreamHandler()
    console_handler.setFormatter(log_formatter)
    console_handler.setLevel(demo_constant.demo_const.DEFAULT_DEBUG_LEVEL)
    DemoLogger.addHandler(console_handler)

    file_handler = None

    @classmethod
    def debug(cls, data):
        print('\r', end='')
        cls.DemoLogger.debug(data)

    @classmethod
    def info(cls, data):
        print('\r', end='')
        cls.DemoLogger.info(data)

    @classmethod
    def warning(cls, data):
        print('\r', end='')
        cls.DemoLogger.warning("\033[1;33;48m{0}\033[0m".format(data))

    @classmethod
    def error(cls, data):
        print('\r', end='')
        cls.DemoLogger.error("\033[1;31;48m{0}\033[0m".format(data))

    @classmethod
    def print_dict(cls, data):
        print('\r', end='')
        cls.DemoLogger.debug(json.dumps(data, indent=2))
