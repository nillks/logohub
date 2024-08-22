const allProduct = [
  {
    id: 0,
    link: 'argea',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/ARGEA.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    popularProduct: true,
  },
  {
    id: 999,
    link: 'centric',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/centric.png',
    oldPrice: '30000 тг',
    price: '60000 тг',
    offer: true,
  },
  {
    id: 1,
    link: 'reebok',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/reebok.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    sale: true,
    new: true,
  },
  {
    id: 2,
    link: 'be',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/be.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    sale: true,
    new: true,
    ex: true,
  },
  {
    id: 3,
    link: 'intel',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/intel.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    sale: true,
    new: true,
    ex: true,
  },
  {
    id: 4,
    link: 'spotify',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/spotify.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    sale: true,
    new: true,
    ex: true,
  },
  {
    id: 5,
    link: 'reebok5',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/reebok.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    sale: true,
    ex: true,
  },
  {
    id: 6,
    link: 'be6',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/be.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    sale: true,
    new: true,
  },
  {
    id: 7,
    link: 'intel7',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/intel.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    sale: true,
  },
  {
    id: 8,
    link: 'spotify8',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: '/src/assets/spotify.svg',
    oldPrice: '30000 тг',
    price: '60000 тг',
    sale: true,
    new: true,
  },
  // Добавленные товары для категории "Корпоративные"
  ...Array.from({ length: 30 }, (_, i) => ({
    id: 100 + i,
    link: `corporate-${i}`,
    title: `Корпоративный продукт ${i + 1}`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: `https://via.placeholder.com/150?text=Corporate+${i + 1}`,
    oldPrice: `${30000 + i * 1000} тг`,
    price: `${60000 + i * 1000} тг`,
    category: 'Корпоративные',
  })),
  // Добавленные товары для категории "Технологичные"
  ...Array.from({ length: 30 }, (_, i) => ({
    id: 200 + i,
    link: `tech-${i}`,
    title: `Технологичный продукт ${i + 1}`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: `https://via.placeholder.com/150?text=Tech+${i + 1}`,
    oldPrice: `${30000 + i * 1000} тг`,
    price: `${60000 + i * 1000} тг`,
    category: 'Технологичные',
  })),
  // Добавленные товары для категории "Креативные"
  ...Array.from({ length: 30 }, (_, i) => ({
    id: 300 + i,
    link: `creative-${i}`,
    title: `Креативный продукт ${i + 1}`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: `https://via.placeholder.com/150?text=Creative+${i + 1}`,
    oldPrice: `${30000 + i * 1000} тг`,
    price: `${60000 + i * 1000} тг`,
    category: 'Креативные',
  })),
  // Добавленные товары для категории "Здоровье"
  ...Array.from({ length: 30 }, (_, i) => ({
    id: 400 + i,
    link: `health-${i}`,
    title: `Продукт здоровья ${i + 1}`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: `https://via.placeholder.com/150?text=Health+${i + 1}`,
    oldPrice: `${30000 + i * 1000} тг`,
    price: `${60000 + i * 1000} тг`,
    category: 'Здоровье',
  })),
  // Добавленные товары для категории "Еда"
  ...Array.from({ length: 30 }, (_, i) => ({
    id: 500 + i,
    link: `food-${i}`,
    title: `Продукт питания ${i + 1}`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: `https://via.placeholder.com/150?text=Food+${i + 1}`,
    oldPrice: `${30000 + i * 1000} тг`,
    price: `${60000 + i * 1000} тг`,
    category: 'Еда',
  })),
  // Добавленные товары для категории "Мода"
  ...Array.from({ length: 30 }, (_, i) => ({
    id: 600 + i,
    link: `fashion-${i}`,
    title: `Модный продукт ${i + 1}`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: `https://via.placeholder.com/150?text=Fashion+${i + 1}`,
    oldPrice: `${30000 + i * 1000} тг`,
    price: `${60000 + i * 1000} тг`,
    category: 'Мода',
  })),
  // Добавленные товары для категории "Образование"
  ...Array.from({ length: 30 }, (_, i) => ({
    id: 700 + i,
    link: `education-${i}`,
    title: `Образовательный продукт ${i + 1}`,
    description:
      'Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat luctus dui eros. Dolor sed sed aliquet eu pretium',
    img: `https://via.placeholder.com/150?text=Education+${i + 1}`,
    oldPrice: `${30000 + i * 1000} тг`,
    price: `${60000 + i * 1000} тг`,
    category: 'Образование',
  })),
];

export default allProduct;
