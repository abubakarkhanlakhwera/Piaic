import random

NUM_ROUNDS = 5
total_score = 0

print("Welcome to the High-Low Game!\n")

for round_num in range(1, NUM_ROUNDS + 1):
    print(f"Round {round_num}")
    
    player_number = random.randint(1, 100)
    computer_number = random.randint(1, 100)
    
    
    print(f"Your number is: {player_number}")
    
    user_choice = input("Do you think your number is higher or lower than the computer's? (higher/lower): ").lower()
    
    # Input validation
    while user_choice not in ['higher', 'lower']:
        user_choice = input("Invalid input! Please enter 'higher' or 'lower': ").lower()
    
    if user_choice == "higher" and player_number > computer_number:
        print(f"You were right! The computer's number was {computer_number}")
        total_score += 1
    elif user_choice == "lower" and player_number < computer_number:
        print(f"You were right! The computer's number was {computer_number}")
        total_score += 1
    else:
        print(f"Aww, that's incorrect. The computer's number was {computer_number}")
    
    print(f"Your score is now {total_score}\n")


if total_score == NUM_ROUNDS:
    print("Perfect score! Well done!")
elif total_score >= NUM_ROUNDS // 2:
    print("Good job, you played really well!")
else:
    print("Better luck next time!")
