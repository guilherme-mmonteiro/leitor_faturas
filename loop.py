
from lista import lista
import subprocess
from pathlib import Path

output = lista

saida = 1

def rename_file(i):
    file_name = Path(i).stem
    nome_arquivo = file_name 
    return nome_arquivo

for i in output:
    name_file = rename_file(i)
    lista1 = (f"node index.js { i } > faturasJson\\{name_file}.json")
    saida = saida + 1
    subprocess.call(lista1, shell=True)
    print('arquivo gerado')
    
