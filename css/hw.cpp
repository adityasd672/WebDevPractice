// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

class Time{
    public:
    int hour,min,sec;
    
    void get(){
        cout<<"Enter hours:";
        cin>>hour;
        cout<<"Enter minutes:";
        cin>>min;
        cout<<"Enter seconds:";
        cin>>sec;
    }
    
    void disp(){
        cout<<"Hour: "<<hour<<", Minutes:"<<min<<", Seconds: "<<sec<<endl;
    }
    
    Time operator + (Time &e2){
        Time e3;
        int newHour = hour + e2.hour;
        int newMin = min + e2.min;
        int newSec = sec + e2.sec;
        
       
        if(newSec >= 60){
            newMin += newSec/60;
            newSec = newSec%60;
        }
        
         if(newMin >= 60){
            newHour += newMin/60;
            newMin = newMin%60;
        }
        
        e3.hour = newHour;
        e3.min = newMin;
        e3.sec = newSec;
        
        return e3;
    }
};

int main() {
    Time e1,e2,e3;
    
    e1.get();
    e2.get();
    
    e3 = e1 + e2;
    
    cout<<e3.hour<<":"<<e3.min<<":"<<e3.sec<<endl;

    return 0;
}