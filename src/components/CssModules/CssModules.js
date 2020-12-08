import React from 'react'
import { success, error } from './style.module.css';

export default function CssModules() {
	const style = true ? success : error;
	return (
		<div>
			<p className={style}>Error</p>
			<p className={style}>Success</p>
		</div>
	)
}
