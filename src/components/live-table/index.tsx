import { TLiveTable } from '../../types';
import s from './live-table.module.scss';
import clsx from 'clsx';

type TLiveTableProps = {
	table: TLiveTable;
};

export const LiveTable = (props: TLiveTableProps) => {
	const { table } = props;
	return (
		<table className={s.liveTable}>
			<thead>
				<tr>
					<th className={clsx(s.cell, s.cellFirstColumn)}>ID</th>
					<th className={s.cell}>Текст</th>
				</tr>
			</thead>
			<tbody>
				{table.map((row) => {
					return (
						<tr key={row.id.toString()}>
							<td className={clsx(s.cell, s.cellFirstColumn)}>{row.id}</td>
							<td className={s.cell}>{row.text}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
