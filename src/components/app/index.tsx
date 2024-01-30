import { LiveTable } from '../live-table';
import { fakeTable } from '../../data';
import { useState } from 'react';
import { TLiveTable } from '../../types';
import s from './app.module.scss';
import clsx from 'clsx';

export const App = () => {
	const [table, setTable] = useState<TLiveTable>([]);
	const [isDisconnected, setIsDisconnected] = useState(true);

	const status = isDisconnected ? 'Отключено' : 'Подключено';

	const connect = () => {
		setIsDisconnected(false);
		setTable(fakeTable);
	};

	const disconnect = () => {
		setIsDisconnected(true);
		setTable([]);
	};

	return (
		<div className={s.app}>
			<h1 className={s.header}>Live table</h1>
			<p className={s.statusLabel}>
				Статус подключения:{' '}
				<span
					className={clsx(s.status, {
						[s.statusOffline]: isDisconnected,
						[s.statusOnline]: !isDisconnected,
					})}>
					{status}
				</span>
			</p>
			<div className={s.controls}>
				<button
					className={clsx(s.button, s.buttonConnect)}
					onClick={connect}
					disabled={!isDisconnected}>
					Подключиться
				</button>
				<button
					className={clsx(s.button, s.buttonDisconnect)}
					onClick={disconnect}
					disabled={isDisconnected}>
					Отключиться
				</button>
			</div>
			<LiveTable table={table} />
		</div>
	);
};
