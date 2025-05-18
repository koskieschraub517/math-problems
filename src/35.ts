import numpy as np

def find_min_max(arr):
    """
    Find the minimum and maximum values in an array.
    
    Parameters:
    arr (numpy.ndarray): The input array of numerical values.
    
    Returns:
    tuple: A tuple containing the minimum and maximum values of the array.
    """
    return np.min(arr), np.max(arr)

# Example usage
data = np.random.rand(10, 5)  # Generate a random 10x5 array with random numbers
min_value, max_value = find_min_max(data)
print("Minimum value:", min_value)
print("Maximum value:", max_value)
