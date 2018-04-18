#include<stdio.h>

void oneB(int myArray[5][5]);
void oneC(int *ptr);
void oneD(int *ptr);
void oneF(int *ptr);

void showRow(int *ptr, int rowNumber, int nColsInRow);
void showArrayR(int *ptr, int nColsInRow);
void showCol(int *ptr, int colNumber, int nRowsInCol);
void showArrayC(int *ptr, int nRowsInCol);

void threeB(int myArray[5][5]);
void threeC(int *ptr);
void threeD(int *ptr);
void threeE(int *ptr);

int main() {
    printf("Problem #1:\n");
    int myArray[5][5];
    int *ptr;
    ptr = &myArray[0][0];
    oneD(ptr);
    oneB(myArray);
    printf("\n");
    oneC(ptr);
    printf("\n");
    oneF(ptr);
    
    printf("\nProblem #2:\n");
    int n = 10;
    int m = 10;
    int count = 0;
    int newArray[n][m];
    ptr = &newArray[0][0];
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
           newArray[i][j] = count++;
        }
    }
    showArrayR(ptr, n);
    printf("\n");
    showArrayC(ptr, m);
    
    printf("\nProblem #3:\n");
    int matrixArray[5][5];
    ptr = &matrixArray[0][0];
    threeD(ptr);
    threeB(matrixArray);
    printf("\n");
    threeC(ptr);
    printf("\n");
    threeE(ptr);
}

void oneB(int myArray[5][5]){
    for(int i = 0; i < 5; i++){
        for(int j = 0; j < 5; j++){
            printf("%02i ", myArray[i][j]);
        }
        printf("\n");
    }
}
void oneC(int *ptr){
    for(int i = 0; i < 25; i++,ptr++){
        printf("%02i ",*ptr);
        if((i+1) % 5 == 0){
            printf("\n");
        }
    }
}
void oneD(int *ptr){
    for(int i = 0; i < 25; i++,ptr++){
        *ptr = i;
    }
}
void oneF(int *ptr){
    int *t = ptr;
    for(int i = 0, j = 1; i < 25; i++){
        printf("%02i ",*ptr);
        if((i+1) % 5 == 0){
            ptr = t + j++;
            printf("\n");
        }else{
            ptr+=5;
        }
    }
}

void showRow(int *ptr, int rowNumber, int nColsInRow){
    ptr += rowNumber * nColsInRow;
    for(int i = 0; i < nColsInRow; i++,ptr++){
        printf("%02i ", *ptr);
    }
}
void showArrayR(int *ptr, int nColsInRow){
    for(int i = 0; i < nColsInRow; i++){
        showRow(ptr, i, nColsInRow);
        printf("\n");
    }
}
void showCol(int *ptr, int colNumber, int nRowsInCol){
    ptr += colNumber;
    for(int i = 0; i < nRowsInCol; i++,ptr += nRowsInCol){
        printf("%02i ", *ptr);
    }
}
void showArrayC(int *ptr, int nRowsInCol){
    for(int i = 0; i < nRowsInCol; i++){
        showCol(ptr, i, nRowsInCol);
        printf("\n");
    }
}

void threeB(int myArray[5][5]){
    for(int i = 0; i < 5; i++){
        for(int j = 0; j < 5; j++){
            printf("%i ", myArray[i][j]);
        }
        printf("\n");
    }
}
void threeC(int *ptr){
     for(int i = 0; i < 25; i++,ptr++){
        printf("%i ",*ptr);
        if((i+1) % 5 == 0){
            printf("\n");
        }
    }
}
void threeD(int *ptr){
    int *t = ptr;
    for(int i = 1; i < 26; i++,ptr++){
        if(ptr == t){
            *ptr=1;
            t = ptr + 6;
        }else{
            *ptr=0;
        }
    }
}
void threeE(int *ptr){
    int *t = ptr;
    for(int i = 0; i < 25; i++,ptr++){
        if(ptr == t){
            ptr += 20;
            
            //t = ptr + 26;
        }else if(ptr == t + 25){
           ptr = t + 5;
        }else if(ptr == t + 20){
            ptr = t;
        }
        printf("%i ", *ptr);
        if((i+1) % 5 == 0){
            printf("\n");
        }
    }
}
