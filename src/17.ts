from sympy import symbols, Eq, solve

# Define symbols
x, y = symbols('x y')

# Define the equations based on your math problems
eq1 = Eq(x + y, 5)
eq2 = Eq(x - y, 3)

# Solve the system of equations
solution = solve((eq1, eq2), (x, y))

print(solution)
