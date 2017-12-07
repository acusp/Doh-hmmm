#!/usr/bin/env python3
import argparse
from demo_core import demo_task


def __show_version():
    with open("./doc/ChangeLog", "r") as file_handle:
        lines = file_handle.readlines()
        print("demo:", lines[0].strip("\n"))


def main():
    parser = argparse.ArgumentParser(description='demo framework')
    parser.add_argument('-g', '--gui',
                        default=False,
                        action="store_true",
                        help='show graphical user interface',
                        dest='gui')
    parser.add_argument('-v', '--version',
                        default=False,
                        action="store_true",
                        help='show demo version',
                        dest='version')

    args = parser.parse_known_args()

    if args[0].version:
        __show_version()
        return

    whole_task = demo_task.DemoTask(
        cases_input=args[0].cases_input,
        gui=args[0].gui)
    whole_task.run()


if __name__ == "__main__":
    main()
