
# Assign a message to a variable and print it
message = "Hello, world!"
print(message)

# Assign a message to a variable, print it, change the message, and print again
message = "Hello, world!"
print(message)

message = "Python is fun!"
print(message)

# Store a person's name and print a personalized message
name = "Eric"
print(f"Hello {name}, would you like to learn some Python today?")

# Store a name and print it in different cases
name = "ada lovelace"
print(name.lower())
print(name.upper())
print(name.title())

# Print a famous quote with the author's name
quote = "A person who never made a mistake never tried anything new."
author = "Albert Einstein"
print(f"{author} once said, \"{quote}\"")

# Store the famous person and quote in variables, then print the message
famous_person = "Albert Einstein"
message = f"{famous_person} once said, \"A person who never made a mistake never tried anything new.\""
print(message)

# Store a name with whitespace and print it with and without stripping
name = "\t  \n  Albert Einstein  \t\n"
print(name)
print(name.lstrip())
print(name.rstrip())
print(name.strip())

# Calculate the sum of three variables
x = 5
y = 10
z = 15
sum = x + y + z
print(sum)

# Swap the values of two variables
a = 10
b = 20
print(f"Before swap: a = {a}, b = {b}")

temp = a
a = b
b = temp

print(f"After swap: a = {a}, b = {b}")

# Create a variable for favorite color and print it twice with different names
color = "blue"
print(color)

favorite_color = color
print(favorite_color)

# Change the value of a pet name variable
pet_name = "Buddy"
pet_name = "Max"
print(pet_name)

# Demonstrate a NameError
name = "Sunshine"
print(name)

# This will cause a NameError:
print(sunsine)  # Incorrect variable name

# Store and print a city name
city = "New York City"
print(city)

# Convert text to title case
text = "python programming"
print(text.title())

# Convert text to lowercase
text = "Python PrOgRaMmInG"
print(text.lower())

# Convert text to uppercase
text = "Python PrOgRaMmInG"
print(text.upper())

# Print the current temperature
temperature = 25
print(f"The current temperature is {temperature} degrees.")

# Print a multi-line poem
poem = """Twinkle, twinkle, little star,
How I wonder what you are.
Up above the world so high,
Like a diamond in the sky."""
print(poem)

