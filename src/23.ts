import numpy as np
from scipy.optimize import fsolve

def f(x):
    return x**2 - 3*x + 1

x0 = 1.5
y0 = 4.5

# Using fsolve to find the root of the function f with initial guess x0
solution = fsolve(f, x0)

print("The solution is:", solution[0])
