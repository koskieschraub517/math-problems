import numpy as np
import sympy as sp

a, b = sp.symbols('a b')
c, d = sp.symbols('c d')

# Example of a quadratic equation
eq1 = sp.Eq(a**2 + 2*a*b + b**2, c)
eq2 = sp.Eq(a*c + b*d, d)

print(f"Equation 1: {eq1}")
print(f"Equation 2: {eq2}")
