from sympy import symbols, solve

x = symbols('x')
equation = x**2 - 5*x + 6
solution = solve(equation)
print(solution)
