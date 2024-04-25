import pandas as pd
def rename_columns(df, names): 
    new_df = df.copy(deep=True)
    new_cols = list(names)
    new_df.columns = new_cols
    return new_df