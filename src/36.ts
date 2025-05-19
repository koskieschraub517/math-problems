import sympy as sp
from sympy import symbols

# Define symbols
x, y = symbols('x y')

# Solve the system of equations
solution = sp.solve((x - 3) * (y + x), (x, y))

print(solution)
