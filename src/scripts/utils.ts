import { HORARIOS } from '../data/restaurante';

export const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
export const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export const pad = (n: number) => (n < 10 ? '0' + n : '' + n);
export const hm = (m: number) => pad(Math.floor(m / 60) % 24) + ':' + pad(m % 60);

export interface EstadoLocal {
	abierto: boolean;
	cierra?: string;
	abre?: string;
	cuando?: 'hoy' | 'mañana';
}

export function estadoActual(): EstadoLocal {
	const ahora = new Date();
	const min = ahora.getHours() * 60 + ahora.getMinutes();
	const d = ahora.getDay();
	const ayer = HORARIOS[(d + 6) % 7];
	const hoy = HORARIOS[d];
	if (ayer.cierra > 1440 && min < ayer.cierra - 1440) return { abierto: true, cierra: hm(ayer.cierra) };
	if (min >= hoy.abre && min < hoy.cierra) return { abierto: true, cierra: hm(hoy.cierra) };
	if (min < hoy.abre) return { abierto: false, abre: hm(hoy.abre), cuando: 'hoy' };
	return { abierto: false, abre: hm(HORARIOS[(d + 1) % 7].abre), cuando: 'mañana' };
}
