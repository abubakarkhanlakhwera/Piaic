num1 = int(input('Enter First Number: '))
num2 = int(input('Enter Second Number: '))
op = input("Enter OPerater: ")
if op == '+':
    print('The addition is: ',num1 + num2)
elif op == "-":
    print("The substraction is: ", num1 - num2)
elif op == '*':
    print('The multiplication is: ',num1 * num2)
elif op == "/":
    print("The division is: ",abs(num1/num2))
else:
    print("Invalid Operator")
