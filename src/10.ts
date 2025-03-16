import random
import time
from datetime import datetime

def get_random_ts(start_date="2019-01-01", end_date="2030-01-01"):
    start = datetime.strptime(start_date, "%Y-%m-%d")
    end = datetime.strptime(end_date, "%Y-%m-%d")
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_number = random.randrange(int_delta)
    return datetime(start.year, start.month, start.day) + timedelta(seconds=random_number)
