// Функция для загрузки и парсинга CSV файла
export const loadCSVData = async (): Promise<any[]> => {
  try {
    const response = await fetch('/src/data/PRICE_primer4.csv');
    const csvText = await response.text();
    
    // Парсим CSV
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    
    const data = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
      if (values.length >= headers.length) {
        const item: any = {};
        headers.forEach((header, index) => {
          item[header] = values[index] || '';
        });
        data.push(item);
      }
    }
    
    return data;
  } catch (error) {
    console.error('Ошибка загрузки CSV:', error);
    return [];
  }
};

// Функция для конвертации данных CSV в формат PriceItem
export const convertCSVToPriceItems = (csvData: any[]) => {
  return csvData.map((row, index) => {
    // Определяем категорию по названию товара
    let category = 'Прочее';
    const name = row.name || row.Name || row.Название || '';
    
    if (name.toLowerCase().includes('круг')) {
      category = 'Круг стальной';
    } else if (name.toLowerCase().includes('труба проф')) {
      category = 'Труба профильная';
    } else if (name.toLowerCase().includes('труба')) {
      category = 'Труба стальная';
    }

    return {
      id: index,
      stockTons: parseFloat(row.stock || row.Stock || row.Остаток || '0') || 0,
      weightPerPiece: parseFloat(row.weight || row.Weight || row.Вес || '0') || 0,
      price1to5: parseFloat(row.price1 || row.Price1 || row.Цена1 || '0') || 0,
      price5to15: parseFloat(row.price2 || row.Price2 || row.Цена2 || '0') || 0,
      priceOver15: parseFloat(row.price3 || row.Price3 || row.Цена3 || '0') || 0,
      branch: row.branch || row.Branch || row.Филиал || 'Не указан',
      name: name,
      size: row.size || row.Size || row.Размер || '',
      length: row.length || row.Length || row.Длина || '',
      gost: row.gost || row.GOST || row.ГОСТ || '',
      category: category,
      lengthValue: parseFloat(row.lengthValue || row.LengthValue || row.ДлинаЗначение || '6') || 6,
      steel: row.steel || row.Steel || row.Сталь || 'Ст3',
    };
  });
};