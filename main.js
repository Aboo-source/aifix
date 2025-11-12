const products = [
  {
    id: 1,
    name: 'Nike Shox TL',
    price: 2200,
    image: 'IMAGES/BLACK SHOX.webp',
    colors: [
      { name: 'Black', image: 'IMAGES/BLACK SHOX.webp', hex: '#000000' },
      { name: 'White', image: 'IMAGES/WHITE SHOX .jpeg', hex: '#FFFFFF' },
      { name: 'PINK', image: 'IMAGES/PINK SHOX.avif', hex: '#e600ffff' },
      { name: 'Blue', image: 'IMAGES/blue.JPG', hex: '#0066FF' },
      { name: 'Brown', image: 'IMAGES/brownshox.webp', hex: '#312b0dff' }
    ],
    sizes: ['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 2,
    name: 'Nike TN',
    price: 2000,
    image: 'IMAGES/BLACK TN.avif',
    colors: [
      { name: 'Black', image: 'IMAGES/BLACK TN.avif', hex: '#000000' },
      { name: 'White', image: 'IMAGES/white tn.JPG', hex: '#FFFFFF' },
      { name: 'Blue', image: 'IMAGES/IMG_0912.JPG', hex: '#0066FF' },
      { name: 'Orange', image: 'IMAGES/IMG_0913.JPG', hex: '#ff6f00ff' },
      { name: 'Cyan', image: 'IMAGES/IMG_0914.JPG', hex: '#808080ff' }
    ],
    sizes: [ 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10']
  },
  {
    id: 3,
    name: 'Nike Air Force 1',
    price: 1400,
    image: 'IMAGES/IMG_1840.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1840.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1839.JPG', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/IMG_1847.JPG', hex: '#a8a6a6ff' },
      { name: 'BLUE', image: 'IMAGES/IMG_1842.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/IMG_1843.JPG', hex: '#2b5626ff' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 4,
    name: 'Nike Air Max 95',
    price: 1850,
    image: 'IMAGES/black 95.jpeg',
    colors: [
      { name: 'Black', image: 'IMAGES/black 95.jpeg', hex: '#000000ff' }, 
      { name: 'Pink', image: 'IMAGES/pink 95.jpg', hex: '#e14adcff' },
      { name: 'White', image: 'IMAGES/white 95.webp', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/red 95.webp', hex: '#FF0000' },
      { name: 'Neon', image: 'IMAGES/neon 95.avif', hex: '#23ff35ff' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 5,
    name: 'Puma Suede',
    price: 1800,
    image: 'IMAGES/black puma suede.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/black puma suede.jpg', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/red puma suede.avif', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue p suede.svg', hex: '#0066FF' },
      { name: 'Black', image: 'IMAGES/b b s.png', hex: '#000000ff' },
      { name: 'Green', image: 'IMAGES/green suede .JPG', hex: '#00AA00' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 6,
    name: 'Adidas Campus',
    price: 1700,
    image: 'IMAGES/campus b a w.avif',
    colors: [
      { name: 'Black', image: 'IMAGES/campus b a w.avif', hex: '#000000' },
      { name: 'White', image: 'IMAGES/grey 00.JPG', hex: '#9a9a9aff' },
      { name: 'Green', image: 'IMAGES/green 00.JPG', hex: '#007d00ff' },
      { name: 'Blue', image: 'IMAGES/blue 00.JPG', hex: '#0066FF' },
      { name: 'Red', image: 'IMAGES/red 00.JPG', hex: '#FF0000' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 7,
    name: 'Vans Knu Skool',
    price: 1600,
    image: 'IMAGES/black knu.webp',
    colors: [
      { name: 'Black', image: 'IMAGES/black knu.webp', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/grey vans .JPG', hex: '#989898ff' },
      { name: 'Red', image: 'IMAGES/red knu.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue vans.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/green  knu.webp', hex: '#00AA00' }
    ],
     sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 8,
    name: 'New Balance 9060',
    price: 1600,
    image: 'IMAGES/1.webp',
    colors: [
      { name: 'Blue', image: 'IMAGES/blue 9060.JPG', hex: '#808080ff' },
      { name: 'White', image: 'IMAGES/2.jpg', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/1.webp', hex: '#000000' },
      { name: 'Pink', image: 'IMAGES/pink 9060.JPG', hex: '#f307ffff' },
      { name: 'Beige', image: 'IMAGES/3.webp', hex: '#D4AF7A' }
    ],
  sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 9,
    name: 'Jordan 1 Retro High',
    price: 1700,
    image: 'IMAGES/retro red 1.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/black 1.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/retro red 1.JPG', hex: '#FF0000' },
      { name: 'Peach', image: 'IMAGES/peach 1.JPG', hex: '#f6c77dff' },
      { name: 'Blue', image: 'IMAGES/l blue 1.JPG', hex: '#0066FF' },
      { name: 'Orange', image: 'IMAGES/orange 1 .JPG', hex: '#f87721ff' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 10,
    name: 'Adidas Samba',
    price: 1600,
    image: 'IMAGES/IMG_0976.JPG',
    colors: [
      { name: 'Grey', image: 'IMAGES/IMG_0978.JPG', hex: '#f21717ff' },
      { name: 'White', image: 'IMAGES/IMG_0977.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_0976.JPG', hex: '#000000' },
      { name: 'Beige', image: 'IMAGES/IMG_0975.JPG', hex: '#121ecaff' },
      { name: 'Brown', image: 'IMAGES/IMG_0974.JPG', hex: '#347d0dff' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 11,
    name: 'Nike P6000',
    price: 1750,
    image: 'IMAGES/IMG_0987.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/IMG_0987.JPG', hex: '#000000' },
      { name: 'White', image: 'IMAGES/IMG_0988.JPG', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/IMG_0989.JPG', hex: '#FF0000' },
      { name: 'Brown', image: 'IMAGES/IMG_0990.JPG', hex: '#6e411fff' },
      { name: 'Pink', image: 'IMAGES/IMG_0992.JPG', hex: '#ea00ffff' }
    ],
   sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 12,
    name: 'Nike Portal',
    price: 1800,
    image: 'IMAGES/IMG_0968.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_0972.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_0968.JPG', hex: '#000000' },
      { name: 'Blue', image: 'IMAGES/IMG_0969.JPG', hex: '#0080ffff' },
      { name: 'Pink', image: 'IMAGES/IMG_0971.JPG', hex: '#ff00aeff' },
      { name: 'Orange', image: 'IMAGES/IMG_0973.JPG', hex: '#f56a38ff' }
    ],
   sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 13,
    name: 'Nocta',
    price: 4800,
    image: 'IMAGES/IMG_1838.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1837.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1838.JPG', hex: '#000000' },{ name: 'Red', image: 'https://images.pexels.com/photos/2759828/pexels-photo-2759828.jpeg', hex: '#FF0000' }
    ],
  sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 14,
    name: 'Corteiz 95',
    price: 4500,
    image: 'IMAGES/honey corteiz.webp',
    colors: [
      { name: 'Blue', image: 'IMAGES/Blue corteiz.jpg', hex: '#1038ffff' },
      { name: 'Green', image: 'IMAGES/Green corteiz.webp', hex: '#2d7943ff' },
      { name: 'Black', image: 'IMAGES/honey corteiz.webp', hex: '#000000' },
      { name: 'Pink', image: 'IMAGES/pink corteiz.jpg', hex: '#dd36ffff' },
      
    ],
   sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 15,
    name: 'Nike Dunk Low',
    price: 1600,
    image: 'IMAGES/Panda dunks.webp',
    colors: [
      { name: 'Black', image: 'IMAGES/Panda dunks.webp', hex: '#000000' },
      { name: 'SILVER', image: 'IMAGES/grey dunks .JPG', hex: '#bcbcbcff' },
      { name: 'Blue', image: 'IMAGES/light blue dunks.JPG', hex: '#0066FF' },
      { name: 'Red', image: 'IMAGES/blue dunks.JPG', hex: '#0026ffff' },
      { name: 'Green', image: 'IMAGES/green dunks.JPG', hex: '#00AA00' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 16,
    name: 'Nike Uptempo',
    price: 2000,
    image: 'IMAGES/black up.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/white up.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/black up.JPG', hex: '#000000' },
      { name: 'Blue', image: 'IMAGES/blue up.JPG', hex: '#3c97ffff' },
      { name: 'Reverse Black', image: 'IMAGES/white and black up.JPG', hex: '#161515ff' },
      { name: 'Reverse white', image: 'IMAGES/black and white up.JPG', hex: '#FFDD00' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 17,
    name: 'Nike TN PLUS',
    price: 2100,
    image: 'IMAGES/76.webp',
    colors: [
      { name: 'Grey', image: 'IMAGES/76.webp', hex: '#808080' },
      { name: 'White', image: 'IMAGES/white tnn.jpg', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/Black tnn.avif', hex: '#000000' },
      { name: 'Blue', image: 'IMAGES/blue tnn.avif', hex: '#0066FF' },
      { name: 'ORANGE', image: 'IMAGES/15043784_25224018_1000.webp', hex: '#ff8000ff' }
    ],
   sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 18,
    name: 'Nike SNDR',
    price: 1700,
    image: 'IMAGES/IMG_1849.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1851.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1849.JPG', hex: '#000000' },
      { name: 'Pink', image: 'IMAGES/IMG_1854.JPG', hex: '#e600ffff' },
      { name: 'Blue', image: 'IMAGES/IMG_1852.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/IMG_1855.JPG', hex: '#60f914ff' }
    ],
 sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 19,
    name: 'Jordan 4',
    price: 2200,
    image: 'IMAGES/black j4.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/white j4.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/black j4.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/red j4.JPG', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue j4.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/green j4.JPG', hex: '#065306ff' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 20,
    name: 'New Balance 550',
    price: 1600,
    image: 'IMAGES/white 550.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/white 550.JPG', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/grey 550.JPG', hex: '#808080' },
      { name: 'Black', image: 'IMAGES/black 550.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/red 550.JPG', hex: '#ff0000ff' },
      { name: 'Orange', image: 'IMAGES/orange 550.JPG', hex: '#f3610cff' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 21,
    name: 'Nike Cortez',
    price: 1600,
    image: 'IMAGES/NIKE+CORTEZ.png',
    colors: [
      { name: 'White', image: 'IMAGES/custom-nike-cortez-by-you.avif', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/NIKE+CORTEZ.png', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/cortez red.webp', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/cotez blue.avif', hex: '#0066FF' },
      { name: 'Navy', image: 'IMAGES/NIKE+CORTEZ.avif', hex: '#001F3F' }
    ],
 sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 22,
    name: 'CONVERSE ALL STAR RUN STAR HIKE ',
    price: 1400,
    image: 'IMAGES/9.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/9.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/12.jpg', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/10.jpg', hex: '#000000ff' },
      { name: 'White', image: 'IMAGES/11.jpg', hex: '#ffffffff' },
      
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 23,
    name: 'NIIKE Air max plus drift',
    price: 1900,
    image: 'IMAGES/white drift.jpg',
    colors: [
      { name: 'White', image: 'IMAGES/white drift.jpg', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/black drift.avif', hex: '#000000' },
      { name: 'Midnight Blue', image: 'IMAGES/blue drift.webp', hex: '#0066FF' },
      { name: 'Blue', image: 'IMAGES/blue drift 2.webp', hex: '#0d72ffff' },
      { name: 'Brown', image: 'IMAGES/nike-air-max-plus-drift-baroque-brown-platinum-violet-9.webp', hex: '#6d4b34ff' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 24,
    name: 'jORDAN 1 LOW',
    price: 1800,
    image: 'IMAGES/WMNS+AIR+JORDAN+1+LOW.avif',
    colors: [
      { name: 'Black', image: 'IMAGES/0803-NIKDC077410100W08H-1.webp', hex: '#000000' },
      { name: 'White', image: 'IMAGES/white low.png', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/AIR+JORDAN+1+LOW+SE.avif', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/AIR+JORDAN+1+LOW+SE.png', hex: '#0066FF' },
      { name: 'Grey', image: 'IMAGES/WMNS+AIR+JORDAN+1+LOW.avif', hex: '#808080' }
    ],
   sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 25,
    name: 'Nike Shox R4',
    price: 2300,
    image: 'IMAGES/products.avif',
    colors: [
      { name: 'Black', image: 'Nike shox r4/IMG_2148.JPG', hex: '#000000' },
      { name: 'White', image: 'Nike shox r4/IMG_2146.JPG', hex: '#FFFFFF' },
      { name: 'Red', image: 'Nike shox r4/IMG_2140 2.JPG', hex: '#FF0000' },
      { name: 'Blue', image: 'Nike shox r4/IMG_2143.JPG', hex: '#0066FF' },
      { name: 'Pink', image: 'IMAGES/NIKE+SHOX+R4.avif', hex: '#ff3cfcff' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 26,
    name: 'Nike vermo',
    price: 1800,
    image: 'Nike vermo/IMG_2164.JPG',
    colors: [
      { name: 'Black', image: 'Nike vermo/IMG_2167.JPG', hex: '#000000' },
      { name: 'White', image: 'Nike vermo/IMG_2164.JPG', hex: '#FFFFFF' },
      { name: 'Grey', image: 'Nike vermo/IMG_2165.JPG', hex: '#ffd9a1ff' },
      { name: 'Blue', image: 'Nike vermo/IMG_2170.JPG', hex: '#3793efd8' },
      { name: 'Red', image: 'Nike vermo/IMG_2179.JPG', hex: '#FF0000' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 27,
    name: 'Adidas Gazelle',
    price: 1800,
    image: 'IMAGES/IMG_0986.JPG',
    colors: [
      { name: 'Blue', image: 'IMAGES/IMG_0985.JPG', hex: '#0066FF' },
      { name: 'Black', image: 'IMAGES/IMG_0986.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/IMG_0984.JPG', hex: '#FF0000' },
      { name: 'White', image: 'IMAGES/IMG_0980.JPG', hex: '#ffffffe2' }
    ],
    sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 28,
    name: 'Adiddas yeezy',
    price: 2500,
    image: 'Adidas Yeezy/IMG_2134.JPG',
    colors: [
      { name: 'Peach', image: 'Adidas Yeezy/IMG_2135.JPG', hex: '#ffefb1ff' },
      { name: 'Blue', image: 'IMAGES/blue yeezy.webp', hex: '#4ff3ffff' },
      { name: 'Black', image: 'Adidas Yeezy/IMG_2134.JPG', hex: '#000000' },
      
    ],
   sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 29,
    name: 'Airmax 90',
    price: 1900,
    image: 'Airmax 90/IMG_2151.JPG',
    colors: [
      { name: 'Black', image: 'Airmax 90/IMG_2151.JPG', hex: '#000000' },
      { name: 'White', image: 'Airmax 90/IMG_2150.JPG', hex: '#FFFFFF' },
      { name: 'Grey', image: 'Airmax 90/IMG_2152.JPG', hex: '#acacacff' },
      { name: 'Red', image: 'Airmax 90/IMG_2158.JPG', hex: '#FF0000' },
      { name: 'Blue', image: 'Airmax 90/IMG_2154.JPG', hex: '#2d58f2ff' }
    ],
 sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 30,
    name: 'Airmax 97',
    price: 1600,
    image: 'Airmax 97/IMG_2180.JPG',
    colors: [
      { name: 'White', image: 'Airmax 97/IMG_2185.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'Airmax 97/IMG_2180.JPG', hex: '#000000' },
      { name: 'SILVER', image: 'Airmax 97/IMG_2184.JPG', hex: '#cbcbcbff' },
      { name: 'Black and white', image: 'Airmax 97/IMG_2181.JPG', hex: '#ffffffff' },
      { name: 'Red', image: 'Airmax 97/IMG_2190.JPG', hex: '#FF0000' }
    ],
     sizes:['UK 4', 'UK 5','UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10',]
  },
  {
    id: 31,
    name: 'Customisable Skully',
    price: 499,
    image: 'IMAGES/CLOTHING/IMG_2005.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2005.JPG', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/IMG_2006.JPG', hex: '#FFFFFF' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/IMG_2007.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/IMG_2008.JPG', hex: '#808080' }
    ],
    sizes: ['One Size'],
    customizable: true
  }
];

const nbaExclusives = [
  {
    id: 3001,
    name: 'Lakers Jersey',
    price: 1100,
    category: 'nba',
    image: 'PRODUCTS/NBA/IMG_1349.WEBP',
    colors: [
      { name: 'YELLOW', image: 'IPRODUCTS/NBA/IMG_1349.WEBP', hex: '#fbff00f3' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 3002,
    name: 'Bulls Jersey',
    price: 1100,
    category: 'nba',
    image: 'PRODUCTS/NBA/IMG_1353.PNG',
    colors: [
      { name: 'Red', image: 'IMAGES/NBA/IMG_1352.WEBP', hex: '#CE1141' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 3003,
    name: 'Warriors Jersey',
    price: 1100,
    category: 'nba',
    image: 'PRODUCTS/NBA/IMG_1352.WEBP',
    colors: [
      { name: 'Blue/Gold', image: 'PRODUCTS/NBA/IMG_1352.WEBP', hex: '#1D428A' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 3004,
    name: 'BOSTON CELTICS JERSEY',
    price: 1100,
    category: 'nba',
    image: 'PRODUCTS/NBA/IMG_1356.PNG',
    colors: [
      { name: 'Red/Black', image: 'PRODUCTS/NBA/IMG_1356.PNG', hex: '#129800ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
 
];

const clothingProducts = [
  {
    id: 1001,
    name: 'New Era Yankees 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2005.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2005.JPG', hex: '#158afeff' },
      
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1002,
    name: 'New Era SOX',
    price: 549.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2006.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2006.JPG', hex: '#000000' },
      
      
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1003,
    name: 'New Era SOX 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2012.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2012.JPG', hex: '#000000' },
    
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1004,
    name: 'SOX',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2007.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2008.JPG', hex: '#ff0000ff' },
     
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1005,
    name: 'New Era Red NYC 59FIFTY',
    price: 549.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2008.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2008.JPG', hex: '#ff0000ff' },
     
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1006,
    name: 'New Era LA',
    price: 450.00,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2009.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2009.JPG', hex: '#000000' },
      
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1007,
    name: 'New Era 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2010.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2011.JPG', hex: '#ff0000ff' },

    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1008,
    name: 'New Era 59FIFTY',
    price: 549.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2011.JPG',
    colors: [
      { name: 'Brown', image: 'IMAGES/CLOTHING/IMG_2011.JPG', hex: '#573a14ff' },
   
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1009,
    name: 'New Era Nets 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2013.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2013.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2014.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2015.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2016.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1010,
    name: 'New Era Heat 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2014.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2014.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2015.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2016.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2017.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1011,
    name: 'New Era Spurs 59FIFTY',
    price: 549.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2015.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2015.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2016.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2017.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2018.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1012,
    name: 'New Era Mavericks 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2016.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2016.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2017.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2018.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2019.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1013,
    name: 'New Era Cubs 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2017.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2017.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2018.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2019.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2020.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1014,
    name: 'New Era White Sox 59FIFTY',
    price: 549.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2018.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2018.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2019.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2020.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2021.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1015,
    name: 'New Era Mets 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2019.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2019.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2020.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2021.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2005.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1016,
    name: 'New Era Phillies 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2020.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2020.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2021.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2005.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2006.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1017,
    name: 'New Era Astros 59FIFTY',
    price: 549.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2021.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2021.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2005.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2006.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2007.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1018,
    name: 'New Era Cardinals 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2005.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2005.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2006.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2007.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2008.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
 
  {
    id: 2001,
    name: 'Manchester United Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/man united home.jpeg',
    colors: [
      { name: 'Home', image: 'kits/man united home.webp', hex: '#DA291C' },
      { name: 'Away', image: 'kits/man united away.webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/manchester uinted third lit.webp', hex: '#000000ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2002,
    name: 'Arsenal Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Arsenal home.avif',
    colors: [
      { name: 'Home', image: 'kits/Arsenal home.avif', hex: '#DA291C' },
      { name: 'Away', image: 'kits/Arsenal away.jpeg', hex: '#274798ff' },
      { name: 'Third', image: 'kits/Arsenal third .webp', hex: '#ffffffff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2003,
    name: 'Real Madrid Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/real madrid home .webp',
    colors: [
      { name: 'Home', image: 'kits/real madrid home .webp', hex: '#ffffffff' },
      { name: 'Away', image: 'kits/real madrid away .webp', hex: '#161b5aff' },
      { name: 'Third', image: 'kits/madrid third.avif', hex: '#0b86a1ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2004,
    name: 'Liverpool Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/liverpool home.webp',
    colors: [
      { name: 'Home', image: 'kits/liverpool home.webp', hex: '#DA291C' },
      { name: 'Away', image: 'kits/liverpool away.webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/liverpool third.webp', hex: '#0a8df1ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },

  {
    id: 2006,
    name: 'Orlando Pirates Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/IMG_1340.PNG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1340.PNG', hex: '#000000ff' },
     
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2007,
    name: 'Barcelona Jersey',
    price: 699.0,
    category: 'soccer',
    image: 'kits/Barcelona home .webp',
    colors: [
      { name: 'Home', image: 'kits/Barcelona home .webp', hex: '#0c1285ff' },
      { name: 'Away', image: 'kits/Barcelona away .webp', hex: '#ffcb78ff' },
      { name: 'Third', image: 'kits/barca third.jpg', hex: '#ff6302ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2008,
    name: 'PSG Jersey',
    price: 559.0,
    category: 'soccer',
    image: 'kits/Psg home .webp',
    colors: [
      { name: 'Home', image: 'kits/Psg home .webp', hex: '#092effff' },
      { name: 'Away', image: 'kits/psg away.webp', hex: '#ffffffff' },
      { name: 'Third', image: 'kits/psg third.jpg', hex: '#ff0909ff' },
     
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  
   
  {
    id: 2010,
    name: 'ATHLETICO MADRID  ',
    price: 699.0,
    category: 'soccer',
    image: 'kits/atheletico madrid home .jpg',
    colors: [
      { name: 'Home', image: 'kits/atheletico madrid home .jpg', hex: '#DA291C' },
      { name: 'Third', image: 'kits/Atheletico madrid third.webp', hex: '#2329e2ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  

  {
    id: 2012,
    name: 'Chelsea Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Chelsea Home.webp',
    colors: [
      { name: 'Home', image: 'kits/Chelsea Third.webp', hex: '#001180ff' },
      { name: 'Away', image: 'kits/chelsea Away .webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/Chelsea Third.webp', hex: '#0d00ffff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2013,
    name: 'Manchester City Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Manchester city away.webp',
    colors: [
      { name: 'Home', image: 'kits/manchester city home.webp', hex: '#1c75daff' },
      { name: 'Away', image: 'kits/Manchester city away.webp', hex: '#000000ff' },
     
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2014,
    name: 'Tottenham Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Tothenam Home.webp',
    colors: [
      { name: 'Home', image: 'kits/Tothenam Home.webp', hex: '#152dffff' },
      { name: 'Away', image: 'kits/tottenham Away.webp', hex: '#000000ff' },
    
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },

  
  {
    id: 2022,
    name: 'South Africa Jersey',
    price: 799.0,
    category: 'soccer',
    image: 'kits/IMG_1341.JPG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1341.JPG', hex: '#ffff0aff' },
      { name: 'Away', image: 'kits/IMG_1343.WEBP', hex: '#155718ff' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2023,
    name: 'FRANCE Jersey',
    price: 799.0,
    category: 'soccer',
    image: 'kits/FRANCE H.jpg',
    colors: [
      { name: 'Home', image: 'kits/FRANCE H.jpg', hex: '#1c2cdaff' },
      { name: 'Away', image: 'kits/france away.webp', hex: '#FFFFFF' },

    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2024,
    name: 'PORTUGAL',
    price: 699.0,
    category: 'soccer',
    image: 'kits/IMG_1350.JPG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1350.JPG', hex: '#DA291C' },

    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2025,
    name: 'Kaizer Chiefs Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Chiefs home.webp',
    colors: [
      { name: 'Home', image: 'kits/Chiefs home.webp', hex: '#f5b00fff' },
      { name: 'Away', image: 'kits/IMG_1342.PNG', hex: '#eeeeeeab' },
      { name: 'Third', image: 'kits/chiefs third.webp', hex: '#ffc94bff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2026,
    name: 'Mamelodi Sundowns Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/IMG_1345.PNG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1345.PNG', hex: '#ffeb0fff' },
      { name: 'Away', image: 'kits/IMG_1346.PNG', hex: '#FFFFFF' },
      { name: 'Third', image: 'IMAGES/CLOTHING/soccer/sports_jersey_white_5416c205.jpg', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2027,
    name: 'Inter Miami Jersey',
    price: 799.0,
    category: 'soccer',
    image: 'kits/inter miami away.webp',
    colors: [
      { name: 'Home', image: 'kits/IMG_1351.WEBP', hex: '#be1cdaff' },
       { name: 'Home', image: 'kits/inter miami away.webp', hex: '#000000ff' },
   
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2028,
    name: 'AL NASAAR',
    price: 799.0,
    category: 'soccer',
    image: 'kits/al naasar home.jpeg',
    colors: [
      { name: 'Home', image: 'kits/al naasar home.jpeg', hex: '#dad71cff' },
      { name: 'Away', image: 'kits/al nasaar away.jpeg', hex: '#0813ecff' },

    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2029,
    name: 'Spain Jersey',
    price: 699.0,
    category: 'soccer',
    image: 'kits/spain home.webp',
    colors: [
      { name: 'Home', image: 'kits/spain home.webp', hex: '#DA291C' },
      { name: 'Away', image: 'kits/spain a.jpg', hex: '#3d71ffff' },

    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2030,
    name: 'ENGLAND Jersey',
    price: 699.0,
    category: 'soccer',
    image: 'kits/ENGLAND H.webp',
    colors: [
      { name: 'Home', image: 'kits/ENGLAND H.webp', hex: '#a4a4a4ff' },
      { name: 'Away', image: 'kits/ENGLAND A.jpeg', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/ENGLAND T.jpg', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 3001,
    name: 'Nike Tech Fleece ',
    price: 1399.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-47.jpg',
    colors: [
      { name: 'Beige', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-47.jpg', hex: '#d8b14dff' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3002,
    name: 'Nike Tech Fleece',
    price: 2499.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 2.jpg',
    colors: [
      { name: 'White', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 2.jpg', hex: '#ffffffff' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3003,
    name: 'Nike Tech Fleece ',
    price: 1799.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 3.jpg',
    colors: [
      { name: 'Navy', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 3.jpg', hex: '#0d1947ff' },

    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3004,
    name: 'Nike Tech Fleece ',
    price: 2499.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 4.jpg',
    colors: [
      { name: 'Cyan', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 4.jpg', hex: '#14e7ffff' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3005,
    name: 'Nike Tech Fleece ',
    price: 2499.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 5.jpg',
    colors: [
      { name: 'Red', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 5.jpg', hex: '#ff0e0eff' },
   
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3006,
    name: 'Nike Tech Fleece',
    price: 2499.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-56-14.jpg',
    colors: [
      { name: 'Cream white', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-56-14.jpg', hex: '#ffba82ff' },

    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3007,
    name: 'Nike Tech Fleece ',
    price: 2499.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 7.jpg',
    colors: [
      { name: 'Brown', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 7.jpg', hex: '#572e0eff' },
     
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3008,
    name: 'Nike Tech Fleece ',
    price: 2499.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 6.jpg',
    colors: [
      { name: 'Blue', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 6.jpg', hex: '#0059ffff' },
    
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3009,
    name: 'Nike Tech Fleece SYNA', 
    price: 3099.95,
    category: 'techfleece',
    image: 'IMAGES/syna.avif',
    colors: [
      { name: 'Black', image: 'PRODUCTS/Tech fleece/PHOTO-2025-10-15-22-54-48 5.jpg', hex: '#000000' },
     
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3010,
    name: 'Nike Tech ',
    price: 2499.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/black.webp',
    colors: [
      { name: 'Black', image: 'PRODUCTS/Tech fleece/black.webp', hex: '#000000' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
   {
    id: 3011,
    name: 'Nike X CORTEIZ  ',
    price: 2299.95,
    category: 'techfleece',
    image: 'PRODUCTS/Tech fleece/CORTEIZ TRACK.JPG',
    colors: [
      { name: 'Black', image: 'PRODUCTS/Tech fleece/CORTEIZ TRACK.JPG', hex: '#000000' },
       { name: 'Black', image: 'PRODUCTS/Tech fleece/corteiz.webp', hex: '#000000' },
        { name: 'Black', image: 'PRODUCTS/Tech fleece/corteiz back.webp', hex: '#000000' },
         { name: 'Black', image: 'PRODUCTS/Tech fleece/corteiz pants.webp', hex: '#000000' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
 
 
  // ...existing code...
  {
    id: 4001,
    name: 'Essentials TRACKSUIT',
    price: 1599.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/AC6AB261-4E03-43F8-83D0-F0096E640A96.webp',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/AC6AB261-4E03-43F8-83D0-F0096E640A96.webp', hex: 'rgba(0, 0, 0, 1)' },
      { name: 'BEIGE', image: 'PRODUCTS/DRIP/36FC2AC0-E044-4880-8A71-6705E1420614.webp', hex: '#ffe284ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
// ...existing code...
 
  {
    id: 4002,
    name: 'ESSENTIALS HOODIE',
    price: 1000.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/Fear-Of-God-Essentials-3d-Silicon-Applique-Pullover-Hoodie-Dark-Slate_1.avif',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/Fear-Of-God-Essentials-3d-Silicon-Applique-Pullover-Hoodie-Dark-Slate_1.avif', hex: '#000000' },
      { name: 'BEIGE', image: 'PRODUCTS/DRIP/fear-of-god-essentials-192974_412x.webp', hex: '#ffeea5ff' },

    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4003,
    name: 'ESSENTIALS Tee',
    price: 799.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/IMG-20221102-WA0004.webp',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/IMG-20221102-WA0004.webp', hex: '#000000' },
      { name: 'BEIGE', image: 'PRODUCTS/DRIP/FEAR-OF-GOD-ESSENTIALS-T-shirt-Cream-Buttercream.avif', hex: '#fdda99ff' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4004,
    name: 'DENIM TEARS TRACKSUIT',
    price: 2499.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/BLACK AND WHITE.webp',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/BLACK AND WHITE.webp', hex: '#000000' },
     
      { name: 'BLACK', image: 'PRODUCTS/DRIP/BLACK DENIM.webp', hex: '#000000ff' },
      { name: 'GREY', image: 'PRODUCTS/DRIP/GREY DENIM.jpg', hex: '#868a8eff' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4005,
    name: 'DENIM TEARS HOODIE',
    price: 1799.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/denim-tears-denim-tears-cotton-wreath-hoodie-black-streetwear-1182501425.webp',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/denim-tears-denim-tears-cotton-wreath-hoodie-black-streetwear-1182501425.webp', hex: '#000000' },
      { name: 'Grey', image: 'PRODUCTS/DRIP/GREY HOODIE.webp', hex: '#aaaaaaff' },
      { name: 'Black', image: 'PRODUCTS/DRIP/images (5).jpeg', hex: '#000000ff' },
   
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4006,
    name: 'DENIM TEARS SHIRT ',
    price: 899.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/DT S.jpeg',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/DT S.jpeg', hex: '#000000ff' },
      { name: 'Black', image: 'PRODUCTS/DRIP/m65338881489_1.avif', hex: '#000000ff' },
      { name: 'Grey', image: 'PRODUCTS/DRIP/DT G.avif', hex: '#808080' },
   
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4007,
    name: 'DENIM TEARS SHORTS SET',
    price: 1299.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/images (8).jpeg',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/images (8).jpeg', hex: '#000000' },

      { name: 'Grey', image: 'PRODUCTS/DRIP/b33398_b97f46ab468045ebb3e4fb086b77ca3b~mv2.avif', hex: '#808080' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4008,
    name: 'DENIM TEARS X LV JEANS',
    price: 5499.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/Denim-Tears-x-Levis-Cotton-Wreath-Jean-Light-Wash-ProductX.avif',
    colors: [
      { name: 'Denim', image: 'PRODUCTS/DRIP/Denim-Tears-x-Levis-Cotton-Wreath-Jean-Light-Wash-ProductX.avif', hex: '#86b0e3ff' },
     
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4009,
    name: 'DENIM TEARS SHORTS',
    price: 699.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/DenimTearsTheCottonWreathShortsBlack_FW23_-Front.webp',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/DenimTearsTheCottonWreathShortsBlack_FW23_-Front.webp', hex: '#000000' },
      
      { name: 'Grey', image: 'PRODUCTS/DRIP/images (6).jpeg', hex: '#808080' },
    
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4010,
    name: 'HELLSTAR HOODIE',
    price: 999.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/images (2).jpeg',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/images (2).jpeg', hex: '#000000' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4011,
    name: 'RHUDE SHORTS',
    price: 799.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/BLACK RUDE SHORTS.webp',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/BLACK RUDE SHORTS.webp', hex: '#000000' },
      { name: 'Green', image: 'PRODUCTS/DRIP/RH G.webp', hex: '#0b7200ff' },
      { name: 'Red', image: 'PRODUCTS/DRIP/RHUDE_JUNEPRODUCTION_PRE-AW20_BLENDE.5201.webp', hex: '#f60505ff' },
      { name: 'Navy', image: 'PRODUCTS/DRIP/2025.04.21.Rhude-280.webp', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4012,
    name: 'NORTH FACE PUFFER',
    price: 899.95,
    category: 'clothing',
    image: 'PRODUCTS/DRIP/8993_GOC.webp',
    colors: [
      { name: 'Black', image: 'PRODUCTS/DRIP/8993_GOC.webp', hex: '#000000' },
      { name: 'Blue', image: 'PRODUCTS/DRIP/images (3).jpeg', hex: '#001affff' },
      { name: 'Purple', image: 'PRODUCTS/DRIP/images (4).jpeg', hex: '#4f0fc7ff' },
      { name: 'Navy', image: 'PRODUCTS/DRIP/the-north-face-1996-retro-nuptse-jacket-boysenberry-tnf-black.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
 
  }];

let cart = JSON.parse(localStorage.getItem('soleTheoryCart') || '[]');

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');

  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.animationDelay = `${index * 0.1}s`;

    productCard.innerHTML = `
      <div class="product-image" data-id="${product.id}" style="cursor: pointer;">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">R ${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
      </div>
    `;

    productsGrid.appendChild(productCard);
  });

  document.querySelectorAll('.product-image').forEach(img => {
    img.addEventListener('click', (e) => {
      const productId = parseInt(e.currentTarget.dataset.id);
      showProductDetail(productId);
    });
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      showProductDetail(productId);
    });
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  localStorage.setItem('soleTheoryCart', JSON.stringify(cart));

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    cartTotal.textContent = 'R 0.00';
    return;
  }

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const customizationText = item.customization 
      ? `<div class="cart-item-custom">⚽ ${item.customization.name ? item.customization.name : ''}${item.customization.name && item.customization.number ? ' #' : ''}${item.customization.number ? item.customization.number : ''}</div>`
      : '';

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-image"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-details">${item.color ? item.color : ''} ${item.size ? '• ' + item.size : ''}</div>
        ${customizationText}
        <div class="cart-item-price">R ${item.price.toFixed(2)} x ${item.quantity}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">Remove</button>
    `;

    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = `R ${total.toFixed(2)}`;

  document.querySelectorAll('.cart-item-remove').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      removeFromCart(productId);
    });
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #ff0000;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    z-index: 3000;
    animation: slideInRight 0.3s ease-out;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.5);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartOverlay = document.getElementById('cartOverlay');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResultsPanel = document.getElementById('searchResultsPanel');
const searchResultsOverlay = document.getElementById('searchResultsOverlay');
const searchClose = document.getElementById('searchClose');
const searchResultsContent = document.getElementById('searchResultsContent');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function performSearch(query) {
  if (!query || query.trim() === '') {
    searchResultsContent.innerHTML = '<p class="no-results">Start typing to search...</p>';
    return;
  }

  const searchQuery = query.toLowerCase().trim();
  const allProducts = [...products, ...clothingProducts, ...nbaExclusives];
  const results = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.price.toString().includes(searchQuery) ||
    (product.category && product.category.toLowerCase().includes(searchQuery))
  );

  if (results.length === 0) {
    searchResultsContent.innerHTML = '<p class="no-results">No products found</p>';
    return;
  }

  searchResultsContent.innerHTML = results.map(product => {
    let productType = 'sneaker';
    if (product.id >= 3000) productType = 'nba';
    else if (product.id >= 1000) productType = 'clothing';
    
    return `
      <div class="search-result-item" data-id="${product.id}" data-type="${productType}">
        <div class="search-result-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="search-result-info">
          <h4>${product.name}</h4>
          <p class="search-result-price">R ${product.price.toFixed(2)}</p>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      const productId = parseInt(item.dataset.id);
      const productType = item.dataset.type;
      closeSearch();
      if (productType === 'nba') {
        showNBAProductDetail(productId);
      } else if (productType === 'clothing') {
        showClothingProductDetail(productId);
      } else {
        showProductDetail(productId);
      }
    });
  });
}

function openSearch() {
  searchResultsPanel.classList.add('active');
  searchResultsOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  searchInput.focus();
}

function closeSearch() {
  searchResultsPanel.classList.remove('active');
  searchResultsOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
  searchInput.value = '';
  searchResultsContent.innerHTML = '<p class="no-results">Start typing to search...</p>';
}

searchInput.addEventListener('input', (e) => {
  performSearch(e.target.value);
  if (!searchResultsPanel.classList.contains('active')) {
    openSearch();
  }
});

searchInput.addEventListener('focus', () => {
  openSearch();
});

searchBtn.addEventListener('click', () => {
  openSearch();
});

searchClose.addEventListener('click', closeSearch);
searchResultsOverlay.addEventListener('click', closeSearch);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchResultsPanel.classList.contains('active')) {
    closeSearch();
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showNotification('Message sent! We\'ll get back to you soon.');
  contactForm.reset();
});

const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showNotification('Thanks for subscribing!');
  newsletterForm.reset();
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  updateSearchBarVisibility();

  const isCustomizable = product.customizable === true;

  const customizationSection = isCustomizable ? `
    <div class="kit-customization">
      <h3>Personalize Your Skully</h3>
      <div class="customization-inputs">
        <div class="custom-input-group">
          <label for="playerName">Name (Optional)</label>
          <input type="text" id="playerName" placeholder="e.g. JORDAN" maxlength="15" style="text-transform: uppercase;">
        </div>
        <p class="customization-note">Free personalization included</p>
      </div>
    </div>
  ` : '';

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="product-detail-page">
      <button class="back-btn" onclick="location.reload()">
        <span>&larr;</span> BACK TO SHOP
      </button>

      <div class="product-detail-container">
        <div class="product-detail-image">
          <img id="productDetailImg" src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-detail-info">
          <h1>${product.name}</h1>
          <p class="product-detail-price">R ${product.price.toFixed(2)}</p>

          <div class="color-selector">
            <h3>Select Color</h3>
            <div class="color-options" id="colorOptions">
              ${product.colors.map((color, index) => `
                <button class="color-btn ${index === 0 ? 'active' : ''}"
                        data-image="${color.image}"
                        data-color="${color.name}"
                        style="background: ${color.hex};"
                        title="${color.name}">
                </button>
              `).join('')}
            </div>
            <p class="selected-color" id="selectedColor">${product.colors[0].name}</p>
          </div>

          <div class="size-selector">
            <h3>Select Size</h3>
            <div class="size-options" id="sizeOptions">
              ${product.sizes.map(size => `
                <button class="size-btn" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>

          ${customizationSection}

          <button class="checkout-detail-btn" id="checkoutDetailBtn">CHECKOUT</button>
        </div>
      </div>
    </div>
  `;

  let selectedColor = product.colors[0].name;
  let selectedSize = null;
  let customName = '';

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      document.getElementById('productDetailImg').src = e.target.dataset.image;
      selectedColor = e.target.dataset.color;
      document.getElementById('selectedColor').textContent = selectedColor;
    });
  });

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedSize = e.target.dataset.size;
    });
  });

  if (isCustomizable) {
    const nameInput = document.getElementById('playerName');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        customName = e.target.value.toUpperCase();
      });
    }
  }

  document.getElementById('checkoutDetailBtn').addEventListener('click', () => {
    if (!selectedSize) {
      showNotification('Please select a size');
      return;
    }

    const cartItem = {
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    };

    if (isCustomizable && customName) {
      cartItem.customization = { name: customName };
    }

    const existingItem = cart.find(item =>
      item.id === productId &&
      item.color === selectedColor &&
      item.size === selectedSize &&
      JSON.stringify(item.customization) === JSON.stringify(cartItem.customization)
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push(cartItem);
    }

    updateCart();
    showNotification(`${product.name} (${selectedColor}, ${selectedSize}) added to cart!`);
  });
}

function setupClothingLinks() {
  const clothingItems = document.querySelectorAll('.clothing-item');
  clothingItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const categories = ['clothing', 'soccer', 'techfleece', 'caps'];
      showClothingCategory(categories[index]);
    });
  });
}

function updateSearchBarVisibility() {
  const searchContainer = document.querySelector('.search-container');
  const cartBtn = document.querySelector('.cart-btn');
  if (searchContainer) searchContainer.style.display = 'flex';
  if (cartBtn) cartBtn.style.display = 'flex';
}

function showClothingCategory(category) {
  const categoryTitles = {
    clothing: 'Premium Streetwear',
    soccer: 'Football Jerseys',
    techfleece: 'Nike Tech Fleece',
    caps: 'New Era 59FIFTY'
  };

  const categoryDescriptions = {
    clothing: 'Essentials, Rhude, Gallery Dept, Palm Angels',
    soccer: 'Man United, Arsenal, Real Madrid & More',
    techfleece: 'Joggers, Hoodies, Windrunners',
    caps: 'MLB, NBA, Exclusive Designs'
  };

  updateSearchBarVisibility();

  const categoryProducts = clothingProducts.filter(p => p.category === category);

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="clothing-category-page">
      <button class="back-btn" onclick="location.reload()">
        <span>&larr;</span> BACK TO SHOP
      </button>

      <div class="section-header">
        <h2>${categoryTitles[category].toUpperCase()}</h2>
        <p>${categoryDescriptions[category]}</p>
      </div>

      <div class="products-grid">
        ${categoryProducts.map((product, index) => `
          <div class="product-card" style="animation-delay: ${index * 0.1}s">
            <div class="product-image" data-id="${product.id}" style="cursor: pointer;">
              <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'%3E%3Crect fill=\\'%23222\\' width=\\'400\\' height=\\'400\\'/%3E%3Ctext fill=\\'%23666\\' font-family=\\'Arial\\' font-size=\\'20\\' x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\'%3E${product.name}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="product-info">
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">R ${product.price.toFixed(2)}</p>
              <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.product-image').forEach(img => {
    img.addEventListener('click', (e) => {
      const productId = parseInt(e.currentTarget.dataset.id);
      showClothingProductDetail(productId);
    });
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      showClothingProductDetail(productId);
    });
  });
}

function showClothingProductDetail(productId) {
  const product = clothingProducts.find(p => p.id === productId);
  if (!product) return;

  updateSearchBarVisibility();

  const isFootballKit = product.category === 'soccer';
  
  const customizationSection = isFootballKit ? `
    <div class="kit-customization">
      <h3>⚽ Personalize Your Kit</h3>
      <div class="customization-inputs">
        <div class="custom-input-group">
          <label for="playerName">Player Name (Optional)</label>
          <input type="text" id="playerName" placeholder="e.g. RONALDO" maxlength="15" style="text-transform: uppercase;">
        </div>
        <div class="custom-input-group">
          <label for="playerNumber">Number (Optional)</label>
          <input type="number" id="playerNumber" placeholder="e.g. 7" min="1" max="99">
        </div>
        <p class="customization-note">Add +R 150.00 for personalization</p>
      </div>
    </div>
  ` : '';

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="product-detail-page">
      <button class="back-btn" onclick="location.reload()">
        <span>&larr;</span> BACK TO SHOP
      </button>

      <div class="product-detail-container">
        <div class="product-detail-image">
          <img id="productDetailImg" src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'%3E%3Crect fill=\\'%23222\\' width=\\'400\\' height=\\'400\\'/%3E%3Ctext fill=\\'%23666\\' font-family=\\'Arial\\' font-size=\\'20\\' x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\'%3E${product.name}%3C/text%3E%3C/svg%3E'">
        </div>

        <div class="product-detail-info">
          <h1>${product.name}</h1>
          <p class="product-detail-price" id="basePrice">R ${product.price.toFixed(2)}</p>

          <div class="color-selector">
            <h3>Select Color</h3>
            <div class="color-options" id="colorOptions">
              ${product.colors.map((color, index) => `
                <button class="color-btn ${index === 0 ? 'active' : ''}"
                        data-image="${color.image}"
                        data-color="${color.name}"
                        style="background: ${color.hex};"
                        title="${color.name}">
                </button>
              `).join('')}
            </div>
            <p class="selected-color" id="selectedColor">${product.colors[0].name}</p>
          </div>

          <div class="size-selector">
            <h3>Select Size</h3>
            <div class="size-options" id="sizeOptions">
              ${product.sizes.map(size => `
                <button class="size-btn" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>

          ${customizationSection}

          <button class="checkout-detail-btn" id="checkoutDetailBtn">ADD TO CART</button>
        </div>
      </div>
    </div>
  `;

  let selectedColor = product.colors[0].name;
  let selectedSize = null;
  let customName = '';
  let customNumber = '';

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      document.getElementById('productDetailImg').src = e.target.dataset.image;
      selectedColor = e.target.dataset.color;
      document.getElementById('selectedColor').textContent = selectedColor;
    });
  });

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedSize = e.target.dataset.size;
    });
  });

  if (isFootballKit) {
    const nameInput = document.getElementById('playerName');
    const numberInput = document.getElementById('playerNumber');
    const basePrice = product.price;
    
    const updatePrice = () => {
      const hasCustomization = nameInput.value.trim() || numberInput.value.trim();
      const totalPrice = hasCustomization ? basePrice + 150 : basePrice;
      document.getElementById('basePrice').textContent = `R ${totalPrice.toFixed(2)}`;
    };
    
    nameInput.addEventListener('input', (e) => {
      customName = e.target.value.toUpperCase();
      e.target.value = customName;
      updatePrice();
    });
    
    numberInput.addEventListener('input', (e) => {
      customNumber = e.target.value;
      updatePrice();
    });
  }

  document.getElementById('checkoutDetailBtn').addEventListener('click', () => {
    if (!selectedSize) {
      showNotification('Please select a size');
      return;
    }

    const hasCustomization = customName || customNumber;
    const finalPrice = hasCustomization ? product.price + 150 : product.price;
    
    const cartItem = {
      id: productId,
      name: product.name,
      price: finalPrice,
      image: product.image,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
      customization: hasCustomization ? {
        name: customName,
        number: customNumber
      } : null
    };
    
    const existingItem = cart.find(item => 
      item.id === productId && 
      item.color === selectedColor && 
      item.size === selectedSize &&
      JSON.stringify(item.customization) === JSON.stringify(cartItem.customization)
    );
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push(cartItem);
    }
    
    updateCart();
    let message = `${product.name} (${selectedColor}, ${selectedSize})`;
    if (hasCustomization) {
      message += ` with ${customName ? customName : ''}${customName && customNumber ? ' #' : ''}${customNumber ? customNumber : ''} customization`;
    }
    showNotification(`${message} added to cart!`);
  });
}

function renderNBAExclusives() {
  const nbaGrid = document.getElementById('nbaExclusivesGrid');
  if (!nbaGrid) return;

  nbaExclusives.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.animationDelay = `${index * 0.1}s`;

    productCard.innerHTML = `
      <div class="product-image" data-id="${product.id}" style="cursor: pointer;">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">R ${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
      </div>
    `;

    nbaGrid.appendChild(productCard);
  });

  document.querySelectorAll('#nbaExclusivesGrid .product-image').forEach(img => {
    img.addEventListener('click', (e) => {
      const productId = parseInt(e.currentTarget.dataset.id);
      showNBAProductDetail(productId);
    });
  });

  document.querySelectorAll('#nbaExclusivesGrid .add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      showNBAProductDetail(productId);
    });
  });
}

function showNBAProductDetail(productId) {
  const product = nbaExclusives.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-product">
        <div class="modal-image">
          <img id="productDetailImg" src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
          <h2>${product.name}</h2>
          <p class="modal-price">R ${product.price.toFixed(2)}</p>
          <div class="size-selector">
            <label>SELECT SIZE:</label>
            <div class="sizes">
              ${product.sizes.map(size => `
                <button class="size-btn" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>
          <button id="checkoutDetailBtn" class="checkout-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  let selectedSize = null;
  
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
  
  modal.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      modal.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedSize = e.target.dataset.size;
    });
  });
  
  modal.querySelector('#checkoutDetailBtn').addEventListener('click', () => {
    if (!selectedSize) {
      showNotification('Please select a size');
      return;
    }
    const cartItem = {
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      color: product.colors[0].name,
      size: selectedSize,
      quantity: 1
    };
    
    const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push(cartItem);
    }
    
    updateCart();
    showNotification(`${product.name} (${selectedSize}) added to cart!`);
    modal.remove();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderNBAExclusives();
  updateCart();
  setupClothingLinks();

  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty. Add some items before checking out!');
        return;
      }
      window.location.href = '/checkout.html';
    });
  }

  document.querySelectorAll('.product-card, .clothing-item, .value-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

