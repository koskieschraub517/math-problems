#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    cin >> num1 >> num2;
    
    if (num1 % 3 == 0 || num2 % 3 == 0) {
        cout << "The numbers are divisible by 3." << endl;
    } else {
        cout << "The numbers are not divisible by 3." << endl;
    }

    return 0;
}
