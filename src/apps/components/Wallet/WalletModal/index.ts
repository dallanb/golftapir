import CONSTANTS from '@locale/en-CA';

export const headerRenderer = () => CONSTANTS.COMPONENTS.WALLET.ADD_MODAL.TITLE;
export const bodyRenderer = () =>
    CONSTANTS.COMPONENTS.WALLET.ADD_MODAL.DESCRIPTION;
export { default as footerRenderer } from './WalletModalFooter';
