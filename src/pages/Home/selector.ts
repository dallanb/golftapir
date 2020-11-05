import { createSelector } from 'reselect';

const getHomePage = (state: any) => state.homePage;

export const selectData = createSelector([getHomePage], (homePage) => homePage);
