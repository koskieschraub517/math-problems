import numpy as np
from scipy.optimize import curve_fit

def f(x, A, B):
    return A * np.exp(-B * (x - 1))

popt, _ = curve_fit(f, [0.5, 3.0], [2, 4])
A, B = popt
print(A, B)
