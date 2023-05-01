const data = [
	{
		id: 1,
		// указывай путь к картинке в таком формате и относительно 2 странички html
		img: './img/category1/2.webp',
		imgAlt: 'Product Image 1',
		name: 'грешник',
		price: '1799 ₽',

		descriptionOne: `
		— Доступны размеры: M, XL, XXL `,

		descriptionTwo:`
		— Принт выполнен качественной dtf технологией, футболка 100% хлопок, оверсайз`,
		descriptionThree:`
		Уход: 
		Стирать при 30 градусах и наизнанку`,
	
		link: 'https://vk.com/nightdemis?w=product-220079627_8276645',
		sizes: './img/logo.jpg',
		images: [
			'../img/category1/2.webp',
			'../img/category1/4.webp',
			'../img/category1/1.webp',
			'../img/category1/3.webp',
			'../img/category1/размерный лист.webp',
		],
		category: 'category-1', // добавлено новое свойство category
	},

	{
		id: 2,
		// указывай путь к картинке в таком формате и относительно 2 странички html
		img: './img/category1/5.webp',
		imgAlt: 'Product Image 1',
		name: 'motoboy',
		price: '1599 ₽',
		
		descriptionOne: `
		— Доступны размеры: M, XL, XXL `,

		descriptionTwo:`
		— Принт выполнен качественной dtf технологией, футболка 100% хлопок, оверсайз`,
		descriptionThree:`
		Уход: 
		Стирать при 30 градусах и наизнанку`,

		link: 'https://vk.com/nightdemis?w=product-220079627_8276645',
		sizes: './img/logo.jpg',
		images: [
			'../img/category1/5.webp',
			'../img/category1/6.webp',
			'../img/category1/размерный лист.webp',
		],
		category: 'category-1', // добавлено новое свойство category
	},

	{
		id: 3,
		// указывай путь к картинке в таком формате и относительно 2 странички html
		img: './img/category1/8.webp',
		imgAlt: 'Product Image 1',
		name: 'OPIUM EDITION',
		price: '1699 ₽',
		descriptionOne: `
		— Доступны размеры: M, L, XXL `,

		descriptionTwo:`
		— Принт выполнен качественной dtf технологией, футболка 100% хлопок, оверсайз`,
		descriptionThree:`
		Уход: 
		Стирать при 30 градусах и наизнанку`,
		link: 'https://vk.com/nightdemis?w=product-220079627_8276645',
		sizes: './img/logo.jpg',
		images: [
			'../img/category1/8.webp',
			'../img/category1/7.webp',
			'../img/category1/9.webp',
			'../img/category1/10.webp',
			'../img/category1/размерный лист.webp',
		],
		category: 'category-1', // добавлено новое свойство category
	},

	{
		id: 4,
		// указывай путь к картинке в таком формате и относительно 2 странички html
		img: './img/category1/12.webp',
		imgAlt: 'Product Image 1',
		name: 'smoke clinic',
		price: '1599 ₽',
		descriptionOne: `
		— Доступны размеры: M, L, XXL `,

		descriptionTwo:`
		— Принт выполнен качественной dtf технологией, футболка 100% хлопок, оверсайз`,
		descriptionThree:`
		Уход: 
		Стирать при 30 градусах и наизнанку`,
		link: 'https://vk.com/nightdemis?w=product-220079627_8276645',
		sizes: './img/logo.jpg',
		images: [
			'../img/category1/12.webp',
			'../img/category1/11.webp',
			'../img/category1/размерный лист.webp',
		],
		category: 'category-1', // добавлено новое свойство category
	},
];

for (const item of data) {
	console.log(item);
	cards.addCard(
		item.id,
		item.img,
		item.imgAlt,
		item.name,
		item.price,
		item.category
	);
}
