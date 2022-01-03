/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.user,
  );

const makeSelectCompany = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.company,
  );

const makeSelectBranch = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.branch,
  );

const makeSelectUseInin = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.useInin,
  );

const makeSelectPinnedTabs = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.pinnedTabs,
  );

const makeSelectClearTabs = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tabs,
  );

const makeSelectTabs = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tabs,
  );

const makeSelectInteractions = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.interactions,
  );

const makeSelectToastMessages = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.toastMessages,
  );

const makeSelectCheckTime = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.messageCheckTime,
  );

const makeSelectAutoAnswerFlag = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.autoAnswerFlag,
  );

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectUser,
  makeSelectCompany,
  makeSelectBranch,
  makeSelectUseInin,
  makeSelectTabs,
  makeSelectPinnedTabs,
  makeSelectInteractions,
  makeSelectToastMessages,
  makeSelectCheckTime,
  makeSelectClearTabs,
  makeSelectAutoAnswerFlag,
};
