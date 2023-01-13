import pandas as pd
import os
from glob import glob


arquivos = glob('faturasJson\\*.json')

g = 1

uniq_df = pd.DataFrame()

for i in arquivos:
    # df = pd.read_json(i)
    df = pd.read_json(i, orient='index')
    df = pd.DataFrame(df)
    uniq_df = pd.concat([uniq_df, df], axis=1, ignore_index=False)
    df.to_excel(f"faturasXlsx\\fatura{g}.xlsx")
    g = g + 1 

uniq_df = uniq_df.transpose()
print("planilhas criadas")

uniq_df.replace(",", "")

uniq_df.to_excel('faturas.xlsx',sheet_name='Planilha', index=False)  