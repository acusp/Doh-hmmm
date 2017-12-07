#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import datetime
from utils.demo_log import DemoLog


class DemoTimer(object):
    def __init__(self):
        self.start_time = None
        self.end_time = None
        self.cost_time = str()

    def start(self):
        self.start_time = datetime.datetime.now()

    def stop(self):
        if not self.start_time:
            DemoLog.warning("timer didn't start yet")
            return
        self.end_time = datetime.datetime.now()
        # unit: ms
        _cost_microseconds = int(
            (self.end_time - self.start_time).seconds * 1000 +
            ((self.end_time - self.start_time).microseconds / 1000))

        self.convert_microseconds(_cost_microseconds)

    def convert_microseconds(self, _cost_microseconds):
        days = int(_cost_microseconds / (1000 * 60 * 60 * 24))
        hours = int((_cost_microseconds % (1000 * 60 * 60 * 24))
                    / (1000 * 60 * 60))
        minutes = int((_cost_microseconds % (1000 * 60 * 60)) / (1000 * 60))
        seconds = int((_cost_microseconds % (1000 * 60)) / 1000)
        microseconds = int(_cost_microseconds % 1000)

        time_list = [days, hours, minutes, seconds, microseconds]
        unit_list = ['d ', 'h ', 'm ', 's ', 'ms ']

        for index, unit in zip(time_list, unit_list):
            if index:
                self.cost_time += (str(index) + unit)

    @staticmethod
    def get_current_time():
        return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    @staticmethod
    def get_current_date():
        return datetime.datetime.now().strftime("%Y-%m-%d")
