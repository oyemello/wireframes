import React, { useState, useMemo } from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Button,
  Pagination
} from '@carbon/react';
import { Add, Subtract } from '@carbon/icons-react';
import './TableSection.css';

const DEFAULT_HEADERS = [
  { key: 'id', header: 'Item ID' },
  { key: 'name', header: 'Resource Name' },
  { key: 'category', header: 'Category' },
  { key: 'status', header: 'Status' }
];

const INITIAL_ROWS = [
  { id: 'item-01', name: 'Server Node A', category: 'Infrastructure', status: 'Active' },
  { id: 'item-02', name: 'Database Cluster', category: 'Storage', status: 'Pending' },
  { id: 'item-03', name: 'Load Balancer', category: 'Network', status: 'Disabled' },
  { id: 'item-04', name: 'API Gateway', category: 'Security', status: 'Active' }
];

export default function TableSection({ title, description, searchTerm }) {
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filter rows based on search term from parent
  const filteredRows = useMemo(() => {
    if (!searchTerm) return rows;
    const term = searchTerm.toLowerCase();
    return rows.filter(row => 
      Object.values(row).some(val => 
        String(val).toLowerCase().includes(term)
      )
    );
  }, [rows, searchTerm]);

  // Handle pagination
  const paginatedRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredRows.slice(start, start + pageSize);
  }, [filteredRows, page, pageSize]);

  // Row Manipulation
  const handleAddRow = () => {
    const newIdNum = Math.floor(Math.random() * 1000) + 10;
    const newRow = {
      id: `item-${newIdNum}`,
      name: `New Resource ${newIdNum}`,
      category: 'General',
      status: 'Created'
    };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = () => {
    if (rows.length > 0) {
      setRows(rows.slice(0, -1));
    }
  };

  return (
    <div className="table-section-container">
      <div className="table-header-group">
        <h4>{title}</h4>
        <p className="cds--label-description">{description}</p>
      </div>

      <div className="table-data-wrapper">
        <DataTable rows={paginatedRows} headers={DEFAULT_HEADERS} isSortable>
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
            <TableContainer>
              <TableToolbar aria-label="Table toolbar">
                <TableToolbarContent>
                  <div className="append-remove-btns">
                    <Button 
                      kind="ghost" 
                      renderIcon={Subtract} 
                      iconDescription="Remove Row" 
                      hasIconOnly 
                      onClick={handleRemoveRow}
                      tooltipPosition="bottom"
                    />
                    <Button 
                      kind="primary" 
                      renderIcon={Add} 
                      iconDescription="Append Row" 
                      onClick={handleAddRow}
                      size="sm"
                    >
                      Append Row
                    </Button>
                  </div>
                </TableToolbarContent>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })} key={header.key}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow {...getRowProps({ row })} key={row.id}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>

      <div className="table-footer">
        <Pagination
          totalItems={filteredRows.length}
          pageSize={pageSize}
          pageSizes={[10, 20, 30]}
          page={page}
          onChange={({ page, pageSize }) => {
            setPage(page);
            setPageSize(pageSize);
          }}
        />
      </div>
    </div>
  );
}
