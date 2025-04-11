import numpy as np
from sympy import symbols, solve

x = symbols('x')
eq1 = 3*x**2 - 5*x + 7
solutions = solve(eq1, x)
print(solutions)
