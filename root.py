from subprocess import call
from glob import glob

main_path = '/PDF-READER'

call('node C:\\Users\\Usuario\\Desktop\\develpo\\leitor_pdf\\main.js')
call('python C:\\Users\\Usuario\\Desktop\\develpo\\leitor_pdf\\loop.py')
call('python C:\\Users\\Usuario\\Desktop\\develpo\\leitor_pdf\\tableTreaterLine.py')
call('python C:\\Users\\Usuario\\Desktop\\develpo\\leitor_pdf\\toExcel.py')

print('arquivo gerado')