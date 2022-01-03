/*
 * NavigationDrawer Messages
 *
 * This contains all the text for the NavigationDrawer container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'colarx.containers.NavigationDrawer';

export default defineMessages({
  dailyList: {
    id: `${scope}.dailyList`,
    defaultMessage: 'Daily List',
  },
  performanceIndicators: {
    id: `${scope}.performanceIndicators`,
    defaultMessage: 'Performance Indicators',
  },
  callControl: {
    id: `${scope}.callControl`,
    defaultMessage: 'Call Control',
  },
});
