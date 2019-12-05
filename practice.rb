# Write a method that prints out every number from 1 to 100.
def one_to_a_hundred
  number = 0
  while number < 100
    number += 1
    puts number
  end
end

one_to_a_hundred

# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 ... 99).
def every_other_number
  number = 0
  while number < 100
    if number % 2 != 0
      puts number
    end
    number += 1
  end
end

every_other_number

# Write a method that accepts an array of numbers as a parameter, and counts how many 55's there are in the array.
def number_of_55(numbers)
  count = 0
  numbers.each do |number|
    if number == 55
      count += 1
    end
  end
  puts count
end

number_of_55([1, 55, 23, 31, 55, 1002, 55, 2])

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
def awesomesauced(strings)
  length_of_array = strings.length
  new_array = []
  index = 0

  while index < length_of_array
    new_array << strings[index]
    if index != length_of_array - 1
      new_array << "awesomesauce"
    end
    index += 1
  end

  return new_array
end

p awesomesauced(["a", "b", "c", "d", "e"])

# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}
item_amounts = { chair: 5, table: 2 }
item_amounts[:chair] -= 2
p item_amounts

# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}
item_amounts = { chair: 5, table: 2 }
item_amounts[:desks] = 7
p item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
def factorial(num)
  product = 1
  while num > 0
    product *= num
    num -= 1
  end
  return product
end

puts factorial(5)

# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
def print_sums(array1, array2)
  array1.each do |num1|
    array2.each do |num2|
      puts num1 + num2
    end
  end
end

print_sums([1, 5, 10], [100, 500, 1000])

# Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
def select_even_items(strings)
  result = []
  index = 0
  strings.each do |string|
    if index % 2 == 0
      result << string
    end
    index = index + 1
  end
  result
end

p select_even_items(["a", "b", "c", "d", "e", "f"])

# Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
def max(numbers)
  current_max = numbers[0]
  numbers.each do |number|
    if number > current_max
      current_max = number
    end
  end
  current_max
end

p max([5, 4, 8, 1, 2])

# Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
def factorial(number)
  result = 1
  current_number = number
  number.times do
    result = result * current_number
    current_number = current_number - 1
  end
  result
end

p factorial(5)

# Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.
def descending(numbers)
  result = []
  index = numbers.length - 1
  numbers.length.times do
    result << numbers[index]
    index = index - 1
  end
  result
end

p descending([1, 3, 5, 7])

# Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
def sum_combinations(numbers1, numbers2)
  result = []
  numbers1.each do |number1|
    numbers2.each do |number2|
      result << number1 + number2
    end
  end
  result
end

p sum_combinations([1, 5, 10], [100, 500, 1000])

# 1. Write a function that takes in an array of numbers and returns its sum.
def sum(numbers)
  result = 0
  index = 0
  while index < numbers.length
    result += numbers[index]
    index += 1
  end
  result
end

p sum([1, 2, 3])

# 2. Write a function that takes in an array of strings and returns the smallest string.
def smallest_string(strings)
  # With a while loop
  result = strings[0]
  index = 0
  while index < strings.length
    if strings[index].length < result.length
      result = strings[index]
    end
    index += 1
  end
  result

  # # With an each method
  # result = strings[0]
  # strings.each do |string|
  #   if string.length < result.length
  #     result = string
  #   end
  # end
  # result

  # # With a reduce method
  # strings.reduce(strings[0]) do |result, string|
  #   if string.length < result.length
  #     string
  #   else
  #     result
  #   end
  # end
end

p smallest_string(["bob", "apple", "orange", "pear", "a", "grapes"])

# 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
def reversed_numbers(numbers)
  result = []
  index = numbers.length - 1
  while index >= 0
    result << numbers[index]
    index -= 1
  end
  result
end

p reversed_numbers([1, 2, 3])

# 4. Write a function that takes in an array of words and returns the number of words that begin with the letter "a".
def a_words(words)
  result = 0
  index = 0
  while index < words.length
    if words[index][0] == "a"
      result += 1
    end
    index += 1
  end
  result
end

p a_words(["apple", "orange", "grapes"])

# 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
def join_with_commas(strings)
  result = ""
  index = 0
  while index < strings.length
    result += strings[index] + ","
    index += 1
  end
  result
end

p join_with_commas(["apple", "orange", "grapes"])

# 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
def product(numbers)
  result = 1
  index = 0
  while index < numbers.length
    result = result * numbers[index]
    index += 1
  end
  result
end

p product([1, 2, 3, 4])

# 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
def two_smallest_numbers(numbers)
  smallest_index = 0
  smallest = numbers[smallest_index]
  index = 0
  while index < numbers.length
    if numbers[index] < smallest
      smallest = numbers[index]
      smallest_index = index
    end
    index += 1
  end
  second_smallest = numbers[smallest_index - 1]
  index = 0
  while index < numbers.length
    if numbers[index] < second_smallest && index != smallest_index
      second_smallest = numbers[index]
    end
    index += 1
  end
  [smallest, second_smallest]
end

p two_smallest_numbers([1, 10, 9, 3, 23, 12])

# 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
def zero_count(numbers)
  result = 0
  index = 0
  while index < numbers.length
    if numbers[index] == 0
      result += 1
    end
    index += 1
  end
  result
end

p zero_count([9, 32, 0, 2, 0, 12, 5, 2, 0, 1, 0, 0])

# 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
def is_all_big(numbers)
  result = true
  index = 0
  while index < numbers.length
    if numbers[index] <= 10
      result = false
    end
    index += 1
  end
  result
end

p is_all_big([11, 23, 32])

# 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.
def a_count(words)
  result = 0
  index = 0
  while index < words.length
    word = words[index]
    index2 = 0
    while index2 < word.length
      if word[index2] == "a"
        result += 1
      end
      index2 += 1
    end
    index += 1
  end
  result
end

p a_count(["apple", "orange", "grapes"])
