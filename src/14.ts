import math
from typing import List

def find_largest_prime_factor(n: int) -> int:
    """
    Find the largest prime factor of a given number n.
    
    Args:
        n (int): The number to find the largest prime factor of.
        
    Returns:
        int: The largest prime factor of n.
    """
    def is_prime(num: int) -> bool:
        """Check if num is prime."""
        if num <= 1:
            return False
        for i in range(2, int(math.sqrt(num)) + 1):
            if num % i == 0:
                return False
        return True
    
    largest_factor = 1
    while n % 2 == 0:
        largest_factor *= 2
        n //= 2
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            largest_factor = max(largest_factor, i)
            while n % i == 0:
                n //= i
    if n > 2:
        largest_factor = max(largest_factor, n)
    return largest_factor

# Example usage
n = int(input("Enter a number: "))
print(find_largest_prime_factor(n))
