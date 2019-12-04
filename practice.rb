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
