#include <stdio.h>

void func1(int dec) {
    printf("%d -- >", dec);

    for(int i=0; i<32; i++) {
        printf("%d", dec<0);
        dec <<= 1;
    }

    printf("\n");
}

void func2(int dec) {
    if(0 == dec / 2) {
        printf("%d", dec % 2);
        return;
    }
    func2(dec / 2);
    printf("%d", dec % 2);
}

int main(void) {

    func1(15);
    func2(15);

    return 0;
}
