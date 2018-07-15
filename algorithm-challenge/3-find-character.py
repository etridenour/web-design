str1 = 'qwertadf'
str2 = 'qwerty'

if len(str1) < len(str2):
    for x in str2:
        if x not in str1:
            print(x)

else: 
    if len(str2) < len(str1):
        for x in str1:
            if x not in str2:
                print(x)
