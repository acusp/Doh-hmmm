#include <stdio.h>
#include <stdarg.h>

double average(int num, ...) {
    va_list vlist;
    double sum = 0.0;
    int i;

    va_start(vlist, num);

    for(i = 0; i <= num; i++) {
        sum += va_arg(vlist, int);
    }

    va_end(vlist);

    return sum/num;
}

int main(void) {

    printf("Average of 2, 3, 4, 5 = %f\n", average(4, 2, 3, 4, 5));

    return 0;
}
