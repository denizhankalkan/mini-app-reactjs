import React, { useEffect, useState } from 'react';
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
  StateStoring,
  Summary,
  TotalItem,
} from 'devextreme-react/data-grid';
// import SelectBox from 'devextreme-react/select-box';
// import CheckBox from 'devextreme-react/check-box';
import 'devextreme/dist/css/dx.light.css';
// import { exportDataGrid } from 'devextreme/excel_exporter';
// import { Workbook } from 'exceljs';
// import { saveAs } from 'file-saver-es';
import axios from 'axios';
// import service from './data';

// React.useEffect(() => {
//   axios.get(baseURL).then(response => {
//     setDevices(response.data);
//   });
// }, []);

// useEffect(() => {
//   (async () => {
//     const result = await axios.get(
//       'https://apidev.boniglobal.com/Test/Devices',
//     );
//     console.log('result', result);
//     setDevices(result.data);
//   })();
// }, []);

// console.log('??', devices);

const DataGridTable = props => {
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
    tableId,
    userId,
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
  const [showFilterRow] = React.useState(true);
  const [showHeaderFilter] = React.useState(true);

  const [devices, setDevices] = React.useState('');

  const saleAmountEditorOptions = { format: 'currency', showClearButton: true };
  const baseURL = 'https://apidev.boniglobal.com/Test/Devices';

  const [applyFilterTypes, setapplyFilterTypes] = useState([
    {
      key: 'auto',
      name: 'Immediately',
    },
    {
      key: 'onClick',
      name: 'On Button Click',
    },
  ]);

  const [saleAmountHeaderFilter, setsaleAmountHeaderFilter] = useState([
    {
      text: 'Less than $3000',
      value: ['SaleAmount', '<', 3000],
    },
    {
      text: '$3000 - $5000',
      value: [['SaleAmount', '>=', 3000], ['SaleAmount', '<', 5000]],
    },
    {
      text: '$5000 - $10000',
      value: [['SaleAmount', '>=', 5000], ['SaleAmount', '<', 10000]],
    },
    {
      text: '$10000 - $20000',
      value: [['SaleAmount', '>=', 10000], ['SaleAmount', '<', 20000]],
    },
    {
      text: 'Greater than $20000',
      value: ['SaleAmount', '>=', 20000],
    },
  ]);

  // const [orders, setorders] = useState(service.getOrders());
  //this.orders = service.getOrders();

  React.useEffect(() => {
    axios.get(baseURL).then(response => {
      setDevices(response.data);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        'https://apidev.boniglobal.com/Test/Devices',
      );
      console.log('result', result);
      setDevices(result.data);
    })();
  }, []);

  console.log('??', devices);

  // this.saleAmountHeaderFilter = [
  //   {
  //     text: 'Less than $3000',
  //     value: ['SaleAmount', '<', 3000],
  //   },
  //   {
  //     text: '$3000 - $5000',
  //     value: [['SaleAmount', '>=', 3000], ['SaleAmount', '<', 5000]],
  //   },
  //   {
  //     text: '$5000 - $10000',
  //     value: [['SaleAmount', '>=', 5000], ['SaleAmount', '<', 10000]],
  //   },
  //   {
  //     text: '$10000 - $20000',
  //     value: [['SaleAmount', '>=', 10000], ['SaleAmount', '<', 20000]],
  //   },
  //   {
  //     text: 'Greater than $20000',
  //     value: ['SaleAmount', '>=', 20000],
  //   },
  // ];

  //   this.state = {
  //     showFilterRow: true,
  //     showHeaderFilter: true,
  //     currentFilter: this.applyFilterTypes[0].key,
  //   };
  //   this.dataGrid = null;
  //   this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
  //   this.onShowFilterRowChanged = this.onShowFilterRowChanged.bind(this);
  //   this.onShowHeaderFilterChanged = this.onShowHeaderFilterChanged.bind(this);
  //   this.onCurrentFilterChanged = this.onCurrentFilterChanged.bind(this);
  // }

  // const calculateFilterExpression(value, selectedFilterOperations, target) => {
  //   const column = this;
  //   if (target === 'headerFilter' && value === 'weekends') {
  //     return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
  //   }
  //   return column.defaultCalculateFilterExpression(
  //     value,
  //     selectedFilterOperations,
  //     target,
  //   );
  // }

  // const orderHeaderFilter(data) => {
  //   // eslint-disable-next-line no-param-reassign
  //   data.dataSource.postProcess = results => {
  //     results.push({
  //       text: 'Weekends',
  //       value: 'weekends',
  //     });
  //     return results;
  //   };
  // }

  // const onShowFilterRowChanged(e) => {
  //   this.setState({
  //     showFilterRow: e.value,
  //   });
  //   this.clearFilter();
  // }

  // const onShowHeaderFilterChanged(e) => {
  //   this.setState({
  //     showHeaderFilter: e.value,
  //   });
  //   this.clearFilter();
  // }

  // const onCurrentFilterChanged(e) => {
  //   this.setState({
  //     currentFilter: e.value,
  //   });
  // }

  // const clearFilter() => {
  //   this.dataGrid.instance.clearFilter();
  // }

  // const onEditRowKeyChange = React.useCallback((editRowKey) => {
  //   setEditRowKey(dispatch, editRowKey);
  // }, []);

  // function getOrderDay(rowData) => {
  //   return new Date(rowData.OrderDate).getDay();
  // };

  return (
    <div>
      <DataGrid
        id="gridContainer"
        dataSource={devices?.data?.items}
        // keyExpr="ID"
        showBorders
      >
        <FilterRow visible={showFilterRow} applyFilter={currentFilter} />
        <HeaderFilter visible={showHeaderFilter} />
        <SearchPanel visible width={240} placeholder="Search..." />

        <Column
          dataField="deviceId"
          alignment="right"
          dataType="date"
          width={120}
          // calculateFilterExpression={this.calculateFilterExpression}
        >
          {/* <HeaderFilter dataSource={this.orderHeaderFilter} /> */}
        </Column>
        <Column
          dataField="macAddress"
          alignment="right"
          // dataType="datetime"
          // format="M/d/yyyy, HH:mm"
          width={180}
        />
        <Column
          dataField="batteryPower"
          alignment="right"
          // dataType="number"
          // format="currency"
         // editorOptions={saleAmountEditorOptions}
        >
          <HeaderFilter dataSource={saleAmountHeaderFilter} />
        </Column>
        <Column dataField="lastDataSent" />
        <Column dataField="lastSeenGatewayId">
          <HeaderFilter allowSearch />
        </Column>
      </DataGrid>

      {/* <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Apply Filter </span>
          <SelectBox
            items={this.applyFilterTypes}
            value={this.state.currentFilter}
            onValueChanged={this.onCurrentFilterChanged}
            valueExpr="key"
            displayExpr="name"
            disabled={!this.state.showFilterRow}
          />
        </div>
        <div className="option">
          <CheckBox
            text="Filter Row"
            value={this.state.showFilterRow}
            onValueChanged={this.onShowFilterRowChanged}
          />
        </div>
        <div className="option">
          <CheckBox
            text="Header Filter"
            value={this.state.showHeaderFilter}
            onValueChanged={this.onShowHeaderFilterChanged}
          />
        </div>
      </div> */}
    </div>
  );
};

export default DataGridTable;
