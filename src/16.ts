from sympy import symbols, solve

x = symbols('x')
equation = 2*x**3 - 3*x + 1
solutions = solve(equation, x)
print(solutions)
