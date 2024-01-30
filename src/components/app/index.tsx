import { LiveTable } from '../live-table';
import { fakeTable } from '../../data';
import { useState } from 'react';
import { TLiveTable } from '../../types';

export const App = () => {
	const [table, setTable] = useState<TLiveTable>([]);
	const [isDisconnected, setIsDisconnected] = useState(true);

	const status = isDisconnected ? 'Отключено' : 'Подключено';

	const className =
		'app__status' +
		(isDisconnected ? ' app__status--offline' : ' app__status--online');

	const connect = () => {
		setIsDisconnected(false);
		setTable(fakeTable);
	};

	const disconnect = () => {
		setIsDisconnected(true);
		setTable([]);
	};

	return (
		<div className='app'>
			<h1 className='app__header'>Live table</h1>
			<p className='app__status-label'>
				Статус подключения: <span className={className}>{status}</span>
			</p>
			<div className='app__controls'>
				<button
					className='app__button app__button--connect'
					onClick={connect}
					disabled={!isDisconnected}>
					Подключиться
				</button>
				<button
					className='app__button app__button--disconnect'
					onClick={disconnect}
					disabled={isDisconnected}>
					Отключиться
				</button>
			</div>
			<LiveTable table={table} />
		</div>
	);
};
