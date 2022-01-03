/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Grid, Link, makeStyles, Paper } from '@material-ui/core';
// import { CardWrapper } from 'components/Card';
// import LoadingIndicator from 'components/LoadingIndicator';
// import StyledExpansionPanel from 'components/StyledExpansionPanel';
import DevExTable from 'components/Table/DevExTable';
import PropTypes from 'prop-types';
import React from 'react';
// import { FormattedMessage, useIntl } from 'react-intl';
// import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const StatisticTable = ({ isVisible, history, handleChange }) => {
  const baseURL = 'https://apidev.boniglobal.com/Test/Devices';
  const deviceStaticUrl = 'https://apidev.boniglobal.com/Test/DeviceStatistics';

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then(response => {
      setPost(response.data);
    });
  }, []);


  React.useEffect(() => {
    axios.get(deviceStaticUrl).then(response => {
      setPost(response.data);
    });
  }, []);

  console.log(post);


  function createData(
    hesapNo,
    unvanIsim,
    dosya,
    anapara,
    temlikFaizi,
    bankaMasrafi,
    protokolTutari,
    taksitTutari,
  ) {
    return {
      hesapNo,
      unvanIsim,
      dosya,
      anapara,
      temlikFaizi,
      bankaMasrafi,
      protokolTutari,
      taksitTutari,
    };
  }

  const rows = [
    createData(
      '20129793456',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129793454',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129193456',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20429793457',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129493456',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129393456',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129093456',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129193456',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129793256',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129793416',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129793466',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129793426',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129793406',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      200569,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129790456',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      300568,
      2568,
      2568,
      2568,
      2568,
    ),
    createData(
      '20129791456',
      'İbrahim Okan Okuroğulları',
      'AKBANK1',
      100568,
      2568,
      2568,
      2568,
      2568,
    ),
  ];

  const headRows = [
    {
      name: 'hesapNo',
      title: 'HESAP NO',
    },
    {
      name: 'unvanIsim',
      title: 'ÜNVAN/İSİM',
    },
    {
      name: 'dosya',
      title: 'DOSYA',
    },
    {
      name: 'anapara',
      title: 'ANAPARA',
    },
    {
      name: 'temlikFaizi',
      title: 'TEMLİK FAİZİ',
    },
    {
      name: 'bankaMasrafi',
      title: 'BANKA MASRAFI',
    },
    {
      name: 'taksitTutari',
      title: 'TAKSİT TUTARI',
      // type: 'money',
    },
  ];

  const getEmployee = async () => {
    const { data } = await axios.get(
      'https://apidev.boniglobal.com/Test/Devices',
    );
    // eslint-disable-next-line no-console
    console.log('data', data.data);
    return data.data;
  };

  const getDeviceStatistic = async () => {
    const { data } = await axios.get(
      'https://apidev.boniglobal.com/Test/DeviceStatistics',
    );
    // eslint-disable-next-line no-console
    console.log('data-statistics', data.data);
    return data.data;
  };


  console.log('getEmployee', getEmployee);

  return (
    <>
      <Grid container>
        <DevExTable rows={rows} columns={headRows} />
      </Grid>
    </>
  );
};

StatisticTable.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(StatisticTable);
