import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MainContainer from 'containers/MainContainer';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import StatisticTable from 'containers/DataGridTable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin-left: 80px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  overflow-x: hidden;
`;
export default function App() {
  return (
    <Grid style={{ marginLeft: 80 }}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Boni Global - Mess Safe"
          defaultTitle="Mess Safe"
        />

        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Header />
        <StatisticTable />
        <GlobalStyle />
      </AppWrapper>
    </Grid>
  );
}
