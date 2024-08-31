def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True
def main():
    print("Welcome to the Number Explorer!")
    name = input("Please enter your name: ")
    print(f"Hello, {name}! Let's explore some numbers together.")
    favorite_numbers = []
    for i in range(1, 4):
        while True:
            try:
                number = int(input(f"Enter favorite number {i}: "))
                favorite_numbers.append(number)
                break
            except ValueError:
                print("Please enter a valid integer.")
    
    # Greet the user with a personalized message
    print(f"\n{name}, you've chosen the numbers: {favorite_numbers}")
    
    # Check if the numbers are even or odd and store in a list of tuples
    even_odd_info = [(num, "even" if num % 2 == 0 else "odd") for num in favorite_numbers]

    print("\nLet's check if your numbers are even or odd:")
    for num, even_odd in even_odd_info:
        print(f"The number {num} is {even_odd}.")
    
    # Calculate the square of each number and store in tuples
    print("\nNow, let's see the squares of your numbers:")
    for num in favorite_numbers:
        print(f"The square of {num} is {num ** 2}.")
    
    # Calculate the sum of the three numbers
    total_sum = sum(favorite_numbers)
    print(f"\nThe sum of your favorite numbers is: {total_sum}")
    
    # Print an encouraging message
    print("Great job choosing these numbers! 🎉")

    # Check if the sum is a prime number
    if is_prime(total_sum):
        print(f"The sum {total_sum} is a prime number! 🏆")
    else:
        print(f"The sum {total_sum} is not a prime number. Keep exploring! 🚀")

if __name__ == "__main__":
    main()