import * as XLSX from 'xlsx';

export interface ExcelData {
  'Nom du groupe': string;
  Origine: string;
  Ville: string;
  'Année début': string;
  'Année séparation': string;
  Fondateurs: string;
  Membres: string;
  'Courant musical': string;
  Présentation: string;
}

export function convertExcelFile(buffer: Uint8Array): ExcelData[] {
  const arrayBuffer = new ArrayBuffer(buffer.length);
  const view = new Uint8Array(arrayBuffer);
  view.set(buffer);

  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const jsonData: string[][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
  });

  return jsonData.map<ExcelData>((row: string[]) => ({
    'Nom du groupe': row[0],
    Origine: row[1],
    Ville: row[2],
    'Année début': row[3],
    'Année séparation': row[4],
    Fondateurs: row[5],
    Membres: row[6],
    'Courant musical': row[7],
    Présentation: row[8],
  }));
}
