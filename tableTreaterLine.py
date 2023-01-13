import glob

arquivos = glob.glob('faturasJson\\*.json')

final = "}"

linha = 2

for i in arquivos:
                    
  with open(i, 'r') as fr:
        lines = fr.readlines()
  
        with open(i, 'w') as fw:
            for line in lines:
                
                if line.strip('\n') != '},':
                    fw.write(line)  
  with open(i, 'r') as fr:
        lines = fr.readlines()
        
        ptr = 1
      
        with open(i, 'w') as fw:
            for line in lines:
              
                if ptr != 1:
                    fw.write(line)
                ptr += 1             

  with open(i, 'r') as fr:
        lines = fr.readlines()
        
        ptr = 1
      
        with open(i, 'w') as fw:
            for line in lines:
              
                if ptr != 1:
                    fw.write(line)
                ptr += 1
 
  with open(i, 'r') as fr:
        lines = fr.readlines()
        
        ptr = 1
      
        with open(i, 'w') as fw:
            for line in lines:
              
                if ptr != 1:
                    fw.write(line)
                ptr += 1                                          
  
  with open(i, 'r') as fr:
        lines = fr.readlines()
      
        with open(i, 'a') as fw:
                    fw.write(final)                        
        linha = linha + 1  
        print("arquivo formatado")      

    
 
 


                                                                           
                       