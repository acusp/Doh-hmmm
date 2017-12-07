#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
import signal
from utils.demo_os import DemoOs
from utils.demo_log import DemoLog
from managers.demo_timer import DemoTimer
from managers.demo_configer import DemoConfiger


class DemoTask(object):
    def __init__(self, **kwargs):
        self.timer = DemoTimer()
        self.configer = DemoConfiger()

    def run(self):
        DemoLog.info("demo GO!")

        if not self.__prepare():
            self.__exit_task_abnormal()

        self.__end_task_normal()

    def __prepare(self):
        signal.signal(signal.SIGINT, self.__handle_keyboard_interrupt)

        if not self.__managers_prepare():
            return False

        return True

    def __managers_prepare(self):
        self.timer.start()

        if not self.configer.prepare():
            DemoLog.warning("configer prepare fail")
            return False

        if not self.devicer.prepare():
            DemoLog.warning("devicer prepare fail")
            return False

        return True

    def __exit_task_abnormal(self):
        DemoLog.warning("demo exit abnormal")
        DemoOs.sys_exit(1)

    def __end_task_normal(self):
        if self.timer.start_time:
            self.timer.stop()
        DemoLog.info("demo finish successfully. cost time: {0}".format(
            self.timer.cost_time))

        DemoOs.sys_exit(0)

    def __handle_keyboard_interrupt(self, signal_num, _):
        DemoLog.warning("catch ctrl+c, demo exit")
        DemoOs.sys_exit(signal_num)

