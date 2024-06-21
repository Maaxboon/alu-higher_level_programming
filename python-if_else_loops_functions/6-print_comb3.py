#!/usr/bin/python3
for i in range(0, 9):
    for j in range(0, 10):
        if not (i == 0 and j == 0):
            if i == 8 and j == 9:
                print(str(i) + str(j))
            else:
                print(str(i) + str(j) + ',', end=' ')
