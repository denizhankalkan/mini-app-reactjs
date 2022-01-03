import { withStyles, Grid } from '@material-ui/core';
import classNames from 'classnames';
import DataGrid, {
  Column,
  ColumnChooser,
  Editing,
  Export,
  FilterRow,
  HeaderFilter,
  Lookup,
  Pager,
  Paging,
  SearchPanel,
  Sorting,
  Summary,
  TotalItem,
} from 'devextreme-react/data-grid';
import PropTypes, { shape } from 'prop-types';
import React from 'react';

import styles from './DevExTable.styles';
import messages from './messages';
// import { customLoad, customSave } from './stateStoringTool';

const cellRenderTitle = info => {
  if (info.rowType === 'data') {
    // eslint-disable-next-line no-param-reassign
    info.cellElement.style.color = '#f5a623';
    // eslint-disable-next-line no-param-reassign
    info.cellElement.innerText = info.value;
  }
};

const DevExTable = props => {
  const {
    classes,
    columns,
    rows,
    currentPage,
    initialPageSize,
    pageSizeList,
    selectionMode,
    sortingMode,
    onSelectionChanged,
    onCellDblClick,
    onContextMenuPreparing,
    hasHeaderFilter,
    hasExportToExcel,
    allowColumnResizing,
    allowColumnReordering,
    hasColumnChooser,
    onCellClick,
    onRowUpdating,
    onRowInserting,
    onRowPrepared,
    isEdit,
    mode,
    columnAutoWidth,
    showBorders,
    summaryItems,
    isTotalSummary,
    isClickable,
  } = props;
  const [currentFilter] = React.useState(null);

  const exportAll = 'Export All';
  const exportSelectedRows = 'Selected Rows';
  const exportTo = 'Export To';

  return (
    <>
      <Grid container>
        <div
          className={classNames(classes.table, {
            [classes.tbodyTrHover]: isClickable,
          })}
        >
          <DataGrid
            dataSource={rows}
            showColumnLines
            allowColumnResizing={allowColumnResizing}
            columnResizingMode="widget"
            columnAutoWidth={columnAutoWidth}
            allowColumnReordering={allowColumnReordering}
            selection={{ mode: selectionMode }}
            onCellClick={onCellClick}
            onSelectionChanged={onSelectionChanged}
            onCellDblClick={onCellDblClick}
            onContextMenuPreparing={onContextMenuPreparing}
            currentPage={currentPage}
            // className={classNames(null, {
            //   [classes.paddingBottom]: rows.length < Math.min(...pageSizeList),
            // })}
            onRowUpdating={onRowUpdating}
            onRowInserting={onRowInserting}
            onRowPrepared={onRowPrepared}
            showBorders={showBorders}
          >
            <Export
              enabled={hasExportToExcel}
              allowExportSelectedData={hasExportToExcel}
              texts={{
                exportAll,
                exportSelectedRows,
                exportTo,
              }}
            />

            {isEdit && (
              <Editing mode={mode} allowUpdating allowDeleting allowAdding />
            )}
            {sortingMode !== 'none' && (
              <Sorting mode={sortingMode} showBorders />
            )}
            <Paging defaultPageSize={initialPageSize} />
            <Pager
              showPageSizeSelector
              allowedPageSizes={pageSizeList}
              showInfo
            />
            {hasHeaderFilter && (
              <FilterRow visible applyFilter={currentFilter} />
            )}
            {hasHeaderFilter && <HeaderFilter visible />}
            {hasHeaderFilter && <SearchPanel />}
            {hasColumnChooser && <ColumnChooser enabled mode="select" />}

            {columns &&
              columns.map(x => (
                <Column
                  key={x.name}
                  dataField={x.name}
                  caption={x.title}
                  width={x.width}
                  dataType={x.type}
                  format={x.format}
                  alignment={x.alignment}
                  cellRender={x.isClickable && cellRenderTitle}
                  allowEditing={x.allowEditing}
                  customizeText={x.customizeText}
                >
                  {x.isLookup && (
                    <Lookup
                      dataSource={x.lookupRows}
                      displayExpr={x.displayExpr}
                      valueExpr={x.valueExpr}
                    />
                  )}
                </Column>
              ))}
            {isTotalSummary && (
              <Summary>
                {summaryItems.map(x => (
                  <TotalItem
                    key={x.name}
                    column={x.title}
                    summaryType={x.summaryType}
                    valueFormat={x.valueFormat}
                    customizeText={x.customizeText}
                  />
                ))}
              </Summary>
            )}
          </DataGrid>
        </div>
      </Grid>
    </>
  );
};

DevExTable.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  rows: PropTypes.arrayOf(shape({})).isRequired,
  columns: PropTypes.arrayOf(
    shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      width: PropTypes.number,
      type: PropTypes.string,
      dataType: PropTypes.string,
      format: PropTypes.string,
      alignment: PropTypes.oneOf(['left', 'right']),
    }),
  ).isRequired,
  currentPage: PropTypes.number,
  initialPageSize: PropTypes.number,
  pageSizeList: PropTypes.arrayOf(PropTypes.number),
  selectionMode: PropTypes.oneOf(['single', 'multiple']),
  sortingMode: PropTypes.oneOf(['single', 'multiple', 'none']),
  onSelectionChanged: PropTypes.func,
  onCellDblClick: PropTypes.func,
  onContextMenuPreparing: PropTypes.func,
  hasHeaderFilter: PropTypes.bool,
  hasExportToExcel: PropTypes.bool,
  hasColumnChooser: PropTypes.bool,
  allowColumnResizing: PropTypes.bool,
  allowColumnReordering: PropTypes.bool,
  onCellClick: PropTypes.func,
  onRowUpdating: PropTypes.func,
  onRowInserting: PropTypes.func,
  onRowPrepared: PropTypes.func,
  isEdit: PropTypes.bool,
  mode: PropTypes.string,
  columnAutoWidth: PropTypes.bool,
  showBorders: PropTypes.bool,
  summaryItems: PropTypes.array,
  isTotalSummary: PropTypes.bool,
  isClickable: PropTypes.bool,
};

DevExTable.defaultProps = {
  currentPage: 1,
  initialPageSize: 10,
  pageSizeList: [10, 15, 20],
  selectionMode: 'single',
  sortingMode: 'multiple',
  onSelectionChanged: null,
  onCellDblClick: null,
  onContextMenuPreparing: null,
  hasHeaderFilter: false,
  hasExportToExcel: false,
  allowColumnResizing: true,
  allowColumnReordering: true,
  columnAutoWidth: true,
  isClickable: true,
};

export default withStyles(styles, { withTheme: true })(DevExTable);
