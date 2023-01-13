const glob = require('glob');
const fs = require('fs');
const { exec } = require('child_process');
const { stdout } = require('process');

glob("./data/*.pdf", (error, filesWithPDF)=>{ 

  if(error){
    console.log(error)
  }
  //console.log(filesWithPDF);

  const executar = `lista = ['${filesWithPDF.join("', '")}']`
    fs.writeFile('lista.py', executar, (err) => {
        if(err) throw err;
        console.log("arquivo criado");
    });

   // exec(executar, error, stdout, stderr) =>

  //console.log(executar);

 })







