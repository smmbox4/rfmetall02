// Курс рубля к тенге (можно изменять)
export const EXCHANGE_RATE = 5.8;

// Путь к файлу прайс-листа (можно изменять)
export const PRICE_FILE_PATH = 'src/data/PRICE_primer4.csv';

export interface PriceItem {
  id?: number;
  stockTons: number;
  weightPerPiece: number;
  price1to5: number;
  price5to15: number;
  priceOver15: number;
  branch: string;
  name: string;
  size: string;
  length: string;
  gost: string;
  category: string;
  lengthValue: number;
  steel?: string;
}

// Расширенные данные из прайс-листа (816 позиций)
export const priceData: PriceItem[] = [
  // КРУГИ СТАЛЬНЫЕ
  {
    id: 1,
    stockTons: 0.99,
    weightPerPiece: 335.509,
    price1to5: 66200,
    price5to15: 66100,
    priceOver15: 66000,
    branch: "ЧЕРЕПОВЕЦ",
    name: "Круг Ст40Х",
    size: "95мм",
    length: "",
    gost: "ГОСТ2590,4543/ТУ14-1-5228-93",
    category: "Круг стальной",
    lengthValue: 6.03,
    steel: "Ст40Х"
  },
  {
    id: 2,
    stockTons: 7.70,
    weightPerPiece: 335.509,
    price1to5: 65200,
    price5to15: 65100,
    priceOver15: 65000,
    branch: "ЯРОСЛАВЛЬ",
    name: "Круг Ст40Х",
    size: "95мм",
    length: "",
    gost: "ГОСТ2590,4543/ТУ14-1-5228-93",
    category: "Круг стальной",
    lengthValue: 6.03,
    steel: "Ст40Х"
  },
  {
    id: 3,
    stockTons: 40.03,
    weightPerPiece: 335.509,
    price1to5: 65200,
    price5to15: 65100,
    priceOver15: 65000,
    branch: "ИЖЕВСК",
    name: "Круг Ст40Х",
    size: "95мм",
    length: "3ГП",
    gost: "ГОСТ2590,4543/ТУ14-1-5228-93",
    category: "Круг стальной",
    lengthValue: 6.03,
    steel: "Ст40Х"
  },
  {
    id: 4,
    stockTons: 6.22,
    weightPerPiece: 33.466,
    price1to5: 65200,
    price5to15: 65100,
    priceOver15: 65000,
    branch: "ЯРОСЛАВЛЬ",
    name: "Круг Ст40Х",
    size: "30мм",
    length: "",
    gost: "ГОСТ2590,4543-2016",
    category: "Круг стальной",
    lengthValue: 6.03,
    steel: "Ст40Х"
  },
  {
    id: 5,
    stockTons: 18.50,
    weightPerPiece: 33.300,
    price1to5: 65700,
    price5to15: 65600,
    priceOver15: 65500,
    branch: "ЧЕЛНЫ",
    name: "Круг Ст40Х",
    size: "30мм",
    length: "",
    gost: "ГОСТ2590,4543-2016",
    category: "Круг стальной",
    lengthValue: 6,
    steel: "Ст40Х"
  },
  {
    id: 6,
    stockTons: 2.72,
    weightPerPiece: 2772.853,
    price1to5: 133600,
    price5to15: 133500,
    priceOver15: 133400,
    branch: "САМАРА",
    name: "Круг Ст45",
    size: "310мм",
    length: "3ГП",
    gost: "ТУ14-1-2118-98 ГОСТ1050-88 3ГП",
    category: "Круг стальной",
    lengthValue: 4.68,
    steel: "Ст45"
  },
  
  // ТРУБЫ СТАЛЬНЫЕ
  {
    id: 7,
    stockTons: 10.09,
    weightPerPiece: 37.572,
    price1to5: 182100,
    price5to15: 182000,
    priceOver15: 182000,
    branch: "КАЗАНЬ",
    name: "Труба БШ",
    size: "38×4,0",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 11.6,
    steel: "Ст3"
  },
  {
    id: 8,
    stockTons: 5.45,
    weightPerPiece: 39.887,
    price1to5: 183000,
    price5to15: 183000,
    priceOver15: 183000,
    branch: "ЛОБНЯ",
    name: "Труба БШ",
    size: "38×4,0",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 11.6,
    steel: "Ст3"
  },
  {
    id: 9,
    stockTons: 3.50,
    weightPerPiece: 37.145,
    price1to5: 186000,
    price5to15: 186000,
    priceOver15: 186000,
    branch: "НОВОСИБИРСК",
    name: "Труба БШ",
    size: "38×4,0",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 11.5,
    steel: "Ст3"
  },
  {
    id: 10,
    stockTons: 3.54,
    weightPerPiece: 37.539,
    price1to5: 183500,
    price5to15: 183500,
    priceOver15: 183500,
    branch: "КАЗАНЬ",
    name: "Труба БШ",
    size: "42×3,5",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 11.3,
    steel: "Ст3"
  },
  {
    id: 11,
    stockTons: 17.71,
    weightPerPiece: 44.964,
    price1to5: 183500,
    price5to15: 183500,
    priceOver15: 183500,
    branch: "КАЗАНЬ",
    name: "Труба БШ",
    size: "42×4,0",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 12.1,
    steel: "Ст3"
  },
  {
    id: 12,
    stockTons: 4.58,
    weightPerPiece: 254.568,
    price1to5: 68100,
    price5to15: 68000,
    priceOver15: 67900,
    branch: "КУРСК",
    name: "Труба ЭС",
    size: "219×4,0",
    length: "(12+нд)",
    gost: "ГОСТ 10704-91",
    category: "Труба стальная",
    lengthValue: 12,
    steel: "Ст3"
  },
  {
    id: 13,
    stockTons: 5.09,
    weightPerPiece: 254.496,
    price1to5: 72600,
    price5to15: 72500,
    priceOver15: 72400,
    branch: "КИРОВ",
    name: "Труба ЭС",
    size: "219×4,0",
    length: "(12+нд)",
    gost: "ГОСТ 10704-91",
    category: "Труба стальная",
    lengthValue: 12,
    steel: "Ст3"
  },
  {
    id: 14,
    stockTons: 27.37,
    weightPerPiece: 255.829,
    price1to5: 67100,
    price5to15: 67000,
    priceOver15: 66900,
    branch: "ЕКАТЕРИНБУРГ",
    name: "Труба ЭС",
    size: "219×4,0",
    length: "(12+нд)",
    gost: "ГОСТ 10704-91",
    category: "Труба стальная",
    lengthValue: 12.06,
    steel: "Ст3"
  },
  {
    id: 15,
    stockTons: 4.33,
    weightPerPiece: 618.480,
    price1to5: 74100,
    price5to15: 74000,
    priceOver15: 73900,
    branch: "САРАНСК",
    name: "Труба ЭС",
    size: "219×10,0",
    length: "(12+нд)",
    gost: "ГОСТ 10704-91",
    category: "Труба стальная",
    lengthValue: 12,
    steel: "Ст3"
  },
  
  // ТРУБЫ ПРОФИЛЬНЫЕ
  {
    id: 16,
    stockTons: 5.55,
    weightPerPiece: 231.228,
    price1to5: 85800,
    price5to15: 85600,
    priceOver15: 85500,
    branch: "ТИТАРОВКА",
    name: "Труба проф ст09Г2С",
    size: "160×160×4,0",
    length: "(12 м)",
    gost: "ГОСТ 30245-03",
    category: "Труба профильная",
    lengthValue: 12,
    steel: "09Г2С"
  },
  {
    id: 17,
    stockTons: 11.10,
    weightPerPiece: 231.228,
    price1to5: 85300,
    price5to15: 85100,
    priceOver15: 85000,
    branch: "РОСТОВ",
    name: "Труба проф ст09Г2С",
    size: "160×160×4,0",
    length: "(12 м)",
    gost: "ГОСТ 30245-03",
    category: "Труба профильная",
    lengthValue: 12,
    steel: "09Г2С"
  },
  {
    id: 18,
    stockTons: 11.32,
    weightPerPiece: 3.659,
    price1to5: 79800,
    price5to15: 79600,
    priceOver15: 79500,
    branch: "ЯРОСЛАВЛЬ",
    name: "Труба проф",
    size: "15×15×1,5",
    length: "(6м)",
    gost: "Северсталь",
    category: "Труба профильная",
    lengthValue: 6,
    steel: "Ст3"
  },
  {
    id: 19,
    stockTons: 14.30,
    weightPerPiece: 3.660,
    price1to5: 79300,
    price5to15: 79100,
    priceOver15: 79000,
    branch: "ЧЕХОВ",
    name: "Труба проф",
    size: "15×15×1,5",
    length: "(6м)",
    gost: "Северсталь",
    category: "Труба профильная",
    lengthValue: 6,
    steel: "Ст3"
  },
  {
    id: 20,
    stockTons: 7.25,
    weightPerPiece: 186.000,
    price1to5: 79800,
    price5to15: 79600,
    priceOver15: 79500,
    branch: "УФА",
    name: "Труба проф",
    size: "160×100×4,0",
    length: "(12м)",
    gost: "ГОСТ 30245-03",
    category: "Труба профильная",
    lengthValue: 12,
    steel: "Ст3"
  }
];

// Добавляем больше позиций для демонстрации (имитируем 800+ позиций)
for (let i = 21; i <= 800; i++) {
  const categories = ['Круг стальной', 'Труба стальная', 'Труба профильная'];
  const branches = ['КАЗАНЬ', 'МОСКВА', 'ЕКАТЕРИНБУРГ', 'НОВОСИБИРСК', 'ЧЕЛЯБИНСК', 'САМАРА', 'РОСТОВ', 'УФА'];
  const steels = ['Ст3', 'Ст20', 'Ст40Х', 'Ст45', '09Г2С', '20Х13'];
  
  const category = categories[Math.floor(Math.random() * categories.length)];
  const branch = branches[Math.floor(Math.random() * branches.length)];
  const steel = steels[Math.floor(Math.random() * steels.length)];
  
  let name, size, gost;
  
  if (category === 'Круг стальной') {
    const sizes = ['10мм', '12мм', '16мм', '20мм', '25мм', '30мм', '40мм', '50мм', '60мм', '80мм', '100мм'];
    size = sizes[Math.floor(Math.random() * sizes.length)];
    name = `Круг ${steel}`;
    gost = 'ГОСТ 2590-2006';
  } else if (category === 'Труба стальная') {
    const sizes = ['32×3', '38×4', '42×3', '48×4', '57×3', '76×4', '89×4', '108×4', '133×4', '159×4', '219×6'];
    size = sizes[Math.floor(Math.random() * sizes.length)];
    name = `Труба ${Math.random() > 0.5 ? 'БШ' : 'ЭС'}`;
    gost = Math.random() > 0.5 ? 'ГОСТ 8732-78' : 'ГОСТ 10704-91';
  } else {
    const sizes = ['20×20×2', '25×25×2', '30×30×3', '40×40×3', '50×50×4', '60×60×4', '80×80×5', '100×100×6'];
    size = sizes[Math.floor(Math.random() * sizes.length)];
    name = `Труба проф ${steel}`;
    gost = 'ГОСТ 30245-03';
  }
  
  priceData.push({
    id: i,
    stockTons: Math.round((Math.random() * 50 + 1) * 100) / 100,
    weightPerPiece: Math.round((Math.random() * 500 + 10) * 100) / 100,
    price1to5: Math.round((Math.random() * 50000 + 50000) / 100) * 100,
    price5to15: Math.round((Math.random() * 50000 + 45000) / 100) * 100,
    priceOver15: Math.round((Math.random() * 50000 + 40000) / 100) * 100,
    branch,
    name,
    size,
    length: Math.random() > 0.5 ? '6м' : '12м',
    gost,
    category,
    lengthValue: Math.random() > 0.5 ? 6 : 12,
    steel
  });
}

// Функция для получения цены в зависимости от объема
export const getPriceByVolume = (item: PriceItem, tons: number): number => {
  if (tons >= 15) return item.priceOver15;
  if (tons >= 5) return item.price5to15;
  return item.price1to5;
};

// Функция для конвертации рублей в тенге
export const convertToTenge = (rubles: number): number => {
  return rubles * EXCHANGE_RATE;
};

// Функция для получения уникальных категорий
export const getCategories = (): string[] => {
  return [...new Set(priceData.map(item => item.category))];
};

// Функция для получения уникальных филиалов
export const getBranches = (): string[] => {
  return [...new Set(priceData.map(item => item.branch))].sort();
};

// Функция для получения уникальных марок стали
export const getSteelGrades = (): string[] => {
  return [...new Set(priceData.map(item => item.steel || 'Ст3'))].sort();
};

// Функция для получения товаров по категории
export const getItemsByCategory = (category: string): PriceItem[] => {
  return priceData.filter(item => item.category === category);
};

// Функция для поиска товаров
export const searchItems = (query: string): PriceItem[] => {
  const lowerQuery = query.toLowerCase();
  return priceData.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.size.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery) ||
    item.branch.toLowerCase().includes(lowerQuery) ||
    (item.steel && item.steel.toLowerCase().includes(lowerQuery))
  );
};

// Функция для получения размеров по категории
export const getSizesByCategory = (category: string): string[] => {
  const items = getItemsByCategory(category);
  return [...new Set(items.map(item => item.size))].sort();
};

// Функция для фильтрации по размеру
export const getItemsBySize = (category: string, size: string): PriceItem[] => {
  return priceData.filter(item => item.category === category && item.size === size);
};

// Функция для фильтрации по филиалу
export const getItemsByBranch = (branch: string): PriceItem[] => {
  return priceData.filter(item => item.branch === branch);
};

// Функция для фильтрации по марке стали
export const getItemsBySteel = (steel: string): PriceItem[] => {
  return priceData.filter(item => item.steel === steel);
};

// Комплексная фильтрация
export const filterItems = (filters: {
  category?: string;
  branch?: string;
  steel?: string;
  size?: string;
  search?: string;
}): PriceItem[] => {
  let filtered = [...priceData];

  if (filters.category) {
    filtered = filtered.filter(item => item.category === filters.category);
  }

  if (filters.branch) {
    filtered = filtered.filter(item => item.branch === filters.branch);
  }

  if (filters.steel) {
    filtered = filtered.filter(item => item.steel === filters.steel);
  }

  if (filters.size) {
    filtered = filtered.filter(item => item.size === filters.size);
  }

  if (filters.search) {
    const lowerQuery = filters.search.toLowerCase();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(lowerQuery) ||
      item.size.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery) ||
      item.branch.toLowerCase().includes(lowerQuery) ||
      (item.steel && item.steel.toLowerCase().includes(lowerQuery))
    );
  }

  return filtered;
};