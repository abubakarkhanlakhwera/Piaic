# Exercise 3-1: Names
names = ["Alice", "Bob", "Charlie"]
for name in names:
    print(name)

print()  # Adding a line break for clarity in output

# Exercise 3-2: Greetings
for name in names:
    print(f"Hello, {name}! Hope you're having a great day!")

print()  # Adding a line break for clarity in output

# Exercise 3-3: Your Own List
transportations = ["Honda motorcycle", "Tesla Model S", "Yamaha bike"]
for transport in transportations:
    print(f"I would like to own a {transport}.")

print()  # Adding a line break for clarity in output

# Exercise 3-4: Guest List
guests = ["Albert Einstein", "Isaac Newton", "Marie Curie"]
for guest in guests:
    print(f"Dear {guest}, you are cordially invited to dinner.")

print()  # Adding a line break for clarity in output

# Exercise 3-5: Changing Guest List
print(f"Unfortunately, {guests[0]} can't make it to dinner.")
guests[0] = "Nikola Tesla"
for guest in guests:
    print(f"Dear {guest}, you are still invited to dinner.")

print()  # Adding a line break for clarity in output

# Exercise 3-6: More Guests
print("Great news! We found a bigger table!")
guests.insert(0, "Leonardo da Vinci")
guests.insert(2, "Galileo Galilei")
guests.append("Ada Lovelace")
for guest in guests:
    print(f"Dear {guest}, you are invited to dinner.")

print()  # Adding a line break for clarity in output

# Exercise 3-7: Shrinking Guest List
print("Unfortunately, we can only invite two people to dinner.")
while len(guests) > 2:
    removed_guest = guests.pop()
    print(f"Sorry {removed_guest}, we can't invite you to dinner.")
for guest in guests:
    print(f"{guest}, you are still invited to dinner.")
del guests[:]
print(guests)  # Print to confirm the list is empty

print()  # Adding a line break for clarity in output

# Exercise 3-8: Seeing the World
places = ["Tokyo", "Paris", "New York", "Sydney", "Cairo"]
print("Original order:", places)
print("Alphabetical order:", sorted(places))
print("Original order again:", places)
print("Reverse alphabetical order:", sorted(places, reverse=True))
print("Original order again:", places)
places.reverse()
print("Reversed order:", places)
places.reverse()
print("Original order restored:", places)
places.sort()
print("Alphabetical order (sorted):", places)
places.sort(reverse=True)
print("Reverse alphabetical order (sorted):", places)

print()  # Adding a line break for clarity in output

# Exercise 3-9: Every Function
rivers = ["Nile", "Amazon", "Ganges", "Yangtze", "Mississippi"]
print("Original list:", rivers)
print("Alphabetical order:", sorted(rivers))
rivers.reverse()
print("Reversed list:", rivers)
rivers.sort()
print("Alphabetically sorted list:", rivers)
rivers.sort(reverse=True)
print("Reverse alphabetical order:", rivers)

print()  # Adding a line break for clarity in output

# Exercise 3-10: Intentional Error
try:
    print(rivers[3])  # Intentional IndexError
except IndexError:
    print("IndexError: list index out of range")
# Correct the error
print(rivers[-1])  # Correct index, last item in the list
