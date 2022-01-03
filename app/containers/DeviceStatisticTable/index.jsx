import React, { useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table';
import XLSX from 'xlsx';
import { Button } from '@material-ui/core';
import axios from 'axios';
import DataGridTable from 'containers/DataGridTable';
import DevExTable from '../../components/Table/DevExTable';
import Paper from '@mui/material/Paper';

const DeviceStatisticTable = ({ props }) => {
  const baseURL = 'https://apidev.boniglobal.com/Test/Devices';
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then(response => {
      setPost(response.data);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        'https://apidev.boniglobal.com/Test/Devices',
      );
      console.log('result', result);
      setPost(result.data);
    })();
  }, []);

  // eslint-disable-next-line no-console
  console.log('getDevices', post?.data.items);

  const columns = [
    { title: 'Device Id', field: 'deviceId' },
    { title: 'macAddress', field: 'macAddress' },
    { title: 'Battery Power', field: 'name' },
    { title: 'lastDataSent', field: 'lastDataSent', type: 'numeric' },
    { title: 'lastSeenGatewayId', field: 'lastSeenGatewayId' },
  ];

  const downloadExcel = () => {
    const newData = post?.data.items.map(
      row =>
        // delete row;
        row,
    );
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'students');
    const buf = XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' });
    console.log('buf', buf);
    XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });
    XLSX.writeFile(workBook, 'StudentsData.xlsx');
  };

  return (
    <Paper>
      <DataGridTable />
    </Paper>
  );
};

export default DeviceStatisticTable;
