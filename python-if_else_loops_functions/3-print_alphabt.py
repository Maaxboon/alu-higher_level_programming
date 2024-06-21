#!/usr/bin/python3
for alpha_letters in range(ord('a'), ord('z')+1):
    if chr(alpha_letters) == 'e' or chr(alpha_letters) == 'q':
        continue
    print("{:c}".format(alpha_letters), end="")
