import React from 'react'

export type Column<T> = { key: keyof T; header: string; render?: (row: T) => React.ReactNode }

export default function Table<T extends { id?: string | number }>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {data.map((row, i) => (
            <tr key={(row as any).id ?? i}>
              {columns.map((c) => (
                <td key={String(c.key)} className="px-4 py-2 text-sm text-gray-800">
                  {c.render ? c.render(row) : String(row[c.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
