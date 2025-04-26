import numpy as np

def make_random_tsp_problem():
    # Generate 10 cities with integer coordinates between -10 and 10 (inclusive)
    cities = [(i, i) for i in range(-10, 11)]
    
    def edge_weight(city1, city2):
        return abs(city1[0] - city2[0]) + abs(city1[1] - city2[1])
    
    problems = []
    for i in range(len(cities)):
        cities[i] = tuple(cities[i])
        problem = {
            'city1': cities[i],
            'distance': edge_weight(cities[i], cities[(i + 1) % len(cities)])
        }
        problems.append(problem)
    
    return problems
