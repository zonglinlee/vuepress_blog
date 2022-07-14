#!/usr/bin/env bash
# for loop
for ((x = 1; x <= 99; x++)); do
  echo "$x"
  x=$x+1
done

# hello $name
read -r name -p "Enter your name:"
echo "Welcome $name"


while read -r line
do
    my_array=("${my_array[@]}" $line)
done
echo "${my_array[@]}"
