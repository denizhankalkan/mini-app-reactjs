import React, { useEffect, useState } from 'react';
import DataGrid, {
  Column,
  FilterRow,
  HeaderFilter,
  SearchPanel,
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import axios from 'axios';
import { Paper, Grid } from '@material-ui/core';

const DataGridTable = () => {
  const [currentFilter] = React.useState(null);
  const [showFilterRow] = React.useState(true);
  const [showHeaderFilter] = React.useState(true);
  const [calculateFilterExpression] = React.useState(true);
  const [devices, setDevices] = React.useState('');

  const baseURL = 'https://apidev.boniglobal.com/Test/Devices';

  const [BatteryPowerHeaderFilter] = useState([
    {
      text: 'Less than 30',
      value: ['Power', '<', 30],
    },
    {
      text: '30 - 50',
      value: [['Power', '>=', 30], ['Power', '<', 50]],
    },
    {
      text: '50 - 75',
      value: [['Power', '>=', 50], ['Power', '<', 75]],
    },
    {
      text: 'Greater than 75',
      value: ['Power', '>=', 75],
    },
  ]);

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setDevices(response.data);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        'https://apidev.boniglobal.com/Test/Devices',
      );
      setDevices(result.data);
    })();
  }, []);

  return (
    <div>
      <Paper>
        <Grid style={{ marginLeft: 10, marginTop: 10 }}>
          <h3>Device Statistics</h3>
        </Grid>
        <DataGrid
          id="gridContainer"
          dataSource={devices?.data?.items}
          showBorders
          rowAlternationEnabled
        >
          <FilterRow visible={showFilterRow} applyFilter={currentFilter} />
          <HeaderFilter visible={showHeaderFilter} />
          <SearchPanel visible width={240} placeholder="Search..." />

          <Column
            dataField="deviceId"
            alignment="right"
            width={180}
            calculateFilterExpression={calculateFilterExpression}
          />
          <Column dataField="macAddress" alignment="right" />
          <Column dataField="batteryPower" alignment="right" dataType="number">
            <HeaderFilter dataSource={BatteryPowerHeaderFilter} />
          </Column>
          <Column dataField="lastDataSent" />
          <Column dataField="lastSeenGatewayId">
            <HeaderFilter allowSearch />
          </Column>
        </DataGrid>
      </Paper>
    </div>
  );
};

export default DataGridTable;
