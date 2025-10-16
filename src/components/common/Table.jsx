import PropTypes from 'prop-types'

const Table = ({ columns, data, emptyMessage = 'No records available' }) => {
  return (
    <div className="table-card">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key || column.title} scope="col">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td className="text-center" colSpan={columns.length}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row.id || row.key || JSON.stringify(row)}>
                  {columns.map((column) => (
                    <td key={`${row.id || row.key}-${column.key || column.title}`}>
                      {column.render ? column.render(row[column.dataIndex], row) : row[column.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string,
      key: PropTypes.string,
      render: PropTypes.func
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyMessage: PropTypes.string
}

export default Table
