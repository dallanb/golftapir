import constants from '@constants';

export const renderAction = (
    key: string,
    options: any
): { show: boolean; enabled: boolean } => {
    const renderAction = { show: false, enabled: true };
    switch (key) {
        case constants.ACTION.CHALLENGE.KEY:
            renderAction.show = !options.isMe;
            renderAction.enabled = true;
            break;
        default:
            console.error('Invalid key: ', key);
    }
    return renderAction;
};
