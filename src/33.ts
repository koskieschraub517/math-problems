import numpy as np

def random_tsp_code():
    # Randomize the route by randomly selecting an initial point and adding random distances between points
    routes = [np.random.rand(1) for _ in range(np.random.randint(0, 10))]
    return " ".join([f"{r[0]} {r[1]}" if len(r) > 0 else r for r in zip(*routes)])

random_tsp_code()
