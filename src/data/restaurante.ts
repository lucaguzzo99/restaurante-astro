export interface Horario {
	dia: string;
	abre: number; // minutos desde las 00:00
	cierra: number; // puede superar 1440 si cierra pasada la medianoche
	especial?: boolean;
}

// Indexado por Date.getDay(): 0 = domingo
export const HORARIOS: Horario[] = [
	{ dia: 'Domingo', abre: 660, cierra: 1020, especial: true },
	{ dia: 'Lunes', abre: 720, cierra: 1380 },
	{ dia: 'Martes', abre: 720, cierra: 1380 },
	{ dia: 'Miércoles', abre: 720, cierra: 1380 },
	{ dia: 'Jueves', abre: 720, cierra: 1380 },
	{ dia: 'Viernes', abre: 720, cierra: 1470, especial: true },
	{ dia: 'Sábado', abre: 660, cierra: 1500, especial: true },
];

export interface Plato {
	id: string;
	nombre: string;
	monto: number;
	tag: string;
	img: string;
	alt: string;
	desc: string;
}

export const PLATOS: Plato[] = [
	{ id: 'p1', nombre: 'Pizza Pepperoni', monto: 14500, tag: 'Más pedida', img: 'pizza.jpg', alt: 'Pizza de pepperoni con mozzarella y masa de borde tostado', desc: 'Masa de 24 h de fermentación, mozzarella y pepperoni.' },
	{ id: 'p2', nombre: 'Hamburguesa Doble', monto: 12900, tag: 'Clásico', img: 'hamburguesa.jpg', alt: 'Hamburguesa con queso cheddar, lechuga y pan con sésamo', desc: 'Carne de campo, cheddar, lechuga fresca y pan con sésamo.' },
	{ id: 'p3', nombre: 'Espaguetis a la carbonara', monto: 13200, tag: 'Casero', img: 'pasta.jpg', alt: 'Espaguetis a la carbonara con panceta y queso rallado', desc: 'Pasta al dente con panceta crocante, queso rallado y pimienta negra.' },
	{ id: 'p4', nombre: 'Ensalada de la huerta', monto: 9800, tag: 'Liviano', img: 'ensalada.jpg', alt: 'Ensalada fresca con tomates cherry, edamame y brotes', desc: 'Hojas verdes, tomates cherry, edamame y brotes frescos.' },
	{ id: 'p5', nombre: 'Bife de chorizo', monto: 21500, tag: 'Parrilla', img: 'parrilla.jpg', alt: 'Bife de chorizo a la parrilla sobre una tabla de madera', desc: 'Corte a la parrilla con romero, servido con chimichurri.' },
	{ id: 'p6', nombre: 'Flan casero', monto: 6900, tag: 'Postre', img: 'postre.jpg', alt: 'Flan casero con caramelo cortado en porciones', desc: 'Flan cremoso con caramelo, hecho en casa todos los días.' },
];

export interface Extra {
	id: string;
	icono: string;
	nombre: string;
	desc: string;
	monto: number;
}

export const EXTRAS: Extra[] = [
	{ id: 'e1', icono: '🍟', nombre: 'Papas fritas', desc: 'Porción para compartir', monto: 5500 },
	{ id: 'e2', icono: '🥤', nombre: 'Gaseosa 500 ml', desc: 'Línea cola, naranja o lima', monto: 2800 },
	{ id: 'e3', icono: '💧', nombre: 'Agua mineral 500 ml', desc: 'Con o sin gas', monto: 2200 },
	{ id: 'e4', icono: '🍺', nombre: 'Cerveza artesanal', desc: 'Pinta de 473 ml', monto: 5200 },
];

export const CATALOGO = [...PLATOS, ...EXTRAS].map(({ id, nombre, monto }) => ({ id, nombre, monto }));

export const DELIVERY = { envio: 1800, gratisDesde: 30000, minimo: 8000 };

export const formatoPrecio = (n: number) => `$ ${n.toLocaleString('es-AR')}`;
