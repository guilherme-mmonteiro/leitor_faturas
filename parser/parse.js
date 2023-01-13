'use strict';

const { PdfReader } = require('pdfreader');

function readPDFPages(buffer, reader = (new PdfReader())) {

  return new Promise((resolve, reject) => {
    let pages = [];
    reader.parseBuffer(buffer, (err, item) => {

      if (err)
        reject(err)

      else if (!item)
        resolve(pages);

      else if (item.page)
        pages.push({});

      else if (item.text) {
        const row = pages[pages.length - 1][item.y] || [];
        row.push(item.text);
        pages[pages.length - 1][item.y] = row;
      }

    });
  });
}


function parseBill(pages) {

  const page = pages[0]; 
  const fields = {

    razao_social: { row: '3.412', index: 0 },
    id_copel: { row: '5.892', index: 0 },
    cnpj: { row: '6.512', index: 0 },
    ie: { row: '6.512', index: 0 },
    endereco: { row: '4.032', index: 0 },
    cep: { row: '4.652', index: 0 },
    municipio: { row: '4.652', index: 0 },
    UC: { row: '4.259', index: 1 },
    nota_fiscal: { row: '9.713', index: 0 },
    Fatura: { row: '8.063', index: 0 },
    data: { row: '4.259', index: 0 },
    Total_Comp : { row: '25.849', index: 0 },
    Valor_ICMS: { row: '25.849', index: 1 },
    Total: { row: '25.849', index: 2 },

  };

  const data = {};

  Object.keys(fields)
    .forEach((key) => {

      const field = fields[key];
      const val = page[field.row][field.index];

      data[key] = val;

    });
    //informações da nota 
  data.nota_fiscal = data.nota_fiscal.slice('NOTA FISCAL/CONTA DE ENERGIA ELÉTRICA N° '.length);
  data.nota_fiscal = data.nota_fiscal.slice(0, 11);
  data.nota_fiscal = data.nota_fiscal.replaceAll('.', '');
  data.Fatura = data.Fatura.substring(data.Fatura.indexOf('-') + 1);

  //informações de endereço
  data.municipio = data.municipio.slice(data.municipio.indexOf('-') + 2);
  data.municipio = data.municipio.substring(0, data.municipio.indexOf('-') - 1);
  data.endereco = data.endereco.substring(0, data.endereco.indexOf('-') - 1);
  data.cep = data.cep.slice(-9);


  //informações do cliente
  data.cnpj = data.cnpj.slice(5, -17);
  data.ie = data.ie.slice(30);  
  data.ie = data.ie.substring(0, data.ie.length - 1); 
  data.razao_social = data.razao_social.replace('/', '.')

  //informações de valores da nota 
  data.Total_Comp = data.Total_Comp.replace('_', ' ');
  data.Valor_ICMS = data.Valor_ICMS.replace('_', ' ');

  // //dados tratados
  // if (data.Valor_ICMS == valor_negativo) {
  //   data.Valor_ICMS = 0
  // }

  return data;

}


module.exports = async function parse(buf, reader) {

  const data = await readPDFPages(buf, reader);
  //console.log({'beforeParse': data});

  const parsedData = parseBill(data);
  //return data;
  return parsedData;

};