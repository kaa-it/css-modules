import { TLiveTable } from '../../types';

type TLiveTableProps = {
	table: TLiveTable;
};

export const LiveTable = (props: TLiveTableProps) => {
	const { table } = props;
	return (
		<table className='live-table'>
			<thead>
				<tr>
					<th className='live-table__cell live-table__cell--first-column'>
						ID
					</th>
					<th className='live-table__cell'>Текст</th>
				</tr>
			</thead>
			<tbody>
				{table.map((row) => {
					return (
						<tr key={row.id.toString()}>
							<td className='live-table__cell live-table__cell--first-column'>
								{row.id}
							</td>
							<td className='live-table__cell'>{row.text}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
