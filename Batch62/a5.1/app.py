# Function for addition
def add(a, b):
    return a + b

# Function for subtraction
def subtract(a, b):
    return a - b

# Function for multiplication
def multiply(a, b):
    return a * b

# Function for division
def divide(a, b):
    if b == 0:
        return "Error! Division by zero."
    return a / b

# Function for modulus
def modulus(a, b):
    return a % b

# Function for exponentiation
def power(a, b):
    return a ** b

# Function to display the menu of options
def display_menu():
    print("\nSelect operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Modulus")
    print("6. Power")
    print("7. Exit")

# Main function to run the calculator
def calculator():
    while True:
        display_menu()
        choice = input("Enter choice (1-7): ")

        if choice == '7':
            print("Exiting the calculator.")
            break

        if choice in ['1', '2', '3', '4', '5', '6']:
            try:
                num1 = float(input("Enter first number: "))
                num2 = float(input("Enter second number: "))
            except ValueError:
                print("Invalid input! Please enter numeric values.")
                continue

            if choice == '1':
                print(f"Result: {add(num1, num2)}")
            elif choice == '2':
                print(f"Result: {subtract(num1, num2)}")
            elif choice == '3':
                print(f"Result: {multiply(num1, num2)}")
            elif choice == '4':
                print(f"Result: {divide(num1, num2)}")
            elif choice == '5':
                print(f"Result: {modulus(num1, num2)}")
            elif choice == '6':
                print(f"Result: {power(num1, num2)}")
        else:
            print("Invalid choice! Please select a valid option.")

if __name__ == "__main__":
    calculator()
