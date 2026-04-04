const xlsx = require('xlsx');

const workbook = xlsx.readFile('./public/members/uyeler.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

console.log(JSON.stringify(data.slice(0, 5), null, 2));

const categories = [...new Set(data.map(d => Object.values(d).join(' - ')))]; 
// I dont know the column names so I'll just print first 5 rows
