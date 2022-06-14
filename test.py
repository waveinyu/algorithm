# def plus(A, B):
#   A = int(input())
#   B = int(input())
#   print(A + B)

a, b = input().split()
a = int(a)
b = int(b)
print(a + b)


answer = 0;
def plus():
    a, b = map(int, (input().split()))
    # a = int(a)
    # b = int(b)
    answer = a + b
    return answer

print(plus())