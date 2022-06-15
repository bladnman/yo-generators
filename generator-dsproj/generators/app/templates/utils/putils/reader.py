import pandas as pd
from mbmutils import mu


def read_csv(filename="data.csv"):
    return pd.read_csv(mu.get_full_path(f"data/{filename}"))
