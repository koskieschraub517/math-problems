import numpy as np

def tsv_reader(filename):
    with open(filename, 'r') as file:
        rows = file.read().split('\n')
        data = []
        for row in rows[1:]:
            if row:
                values = [float(val.strip()) for val in row.split(',')]
                data.append(values)
    return np.array(data)

def tsv_writer(filename, data):
    with open(filename, 'w') as file:
        for row in data:
            file.write(','.join(map(str, row)) + '\n')

tsv_reader('data.tsv')
tsv_writer('output.tsv', [['x1', 'y1'], ['x2', 'y2']])
