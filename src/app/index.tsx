import s from './app.module.scss';

export const App = () => {
	return (
		<div className='page'>
			<div className={s.card}>
				<button className={s.button}>Счётчик: 0</button>
			</div>
		</div>
	);
};
