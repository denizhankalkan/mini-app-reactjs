/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MainContainer from 'containers/MainContainer';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import StatisticTable from 'containers/DeviceStatisticTable';

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
// max-width: calc(768px + 16px * 2);
export default function App() {
  return (
    <Grid style={{ marginLeft: 80 }}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>

        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Header />
        <StatisticTable />
        <GlobalStyle />
      </AppWrapper>
    </Grid>
  );
}
