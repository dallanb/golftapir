import { cloneDeep as _cloneDeep, set as _set } from 'lodash';
import constants from '@constants';
import { renderActionResponse } from '@pages/ContestMatchup/ContestMatchupActions/types';
export const mapSheetItems = (sheet: any, data: { participants: any }) => {
    let items = _cloneDeep(sheet);
    const { participants } = data;
    return items.reduce((accum: any[], item: any) => {
        if (participants) {
            const participant = participants.find(
                ({ membership_uuid }: { membership_uuid: string }) =>
                    membership_uuid === item.participant
            );
            _set(item, ['participant'], participant);
        }
        accum.push(item);
        return accum;
    }, []);
};

export function renderAction(key: string, options: any): renderActionResponse {
    const renderAction = {
        show: false,
        enabled: true,
        onClick: () => options.onClick(),
    };
    switch (key) {
        case constants.ACTION.COMPLETE.KEY:
            renderAction.onClick = () => options.onClickFunc(options.uuid);
            renderAction.show = options.isOwner;
            renderAction.enabled =
                options.isOwner &&
                options.status !== constants.STATUS.COMPLETED.KEY;
            break;
        case constants.ACTION.APPROVE.KEY:
            renderAction.onClick = () =>
                options.onClickFunc(options.participantSheet.uuid);
            renderAction.show = options.participantSheet;
            renderAction.enabled =
                options.status === constants.STATUS.COMPLETED.KEY &&
                options.participantSheet.status !==
                    constants.STATUS.APPROVED.KEY;
            break;
        default:
            console.error('Invalid key: ', key);
    }
    return renderAction;
}
