import numpy as np
from matplotlib import pyplot as plt

def draw_random_line():
    x = np.random.rand(10)
    y = 2 * x + np.random.randn(5)
    plt.plot(x, y)
    plt.show()

draw_random_line()
