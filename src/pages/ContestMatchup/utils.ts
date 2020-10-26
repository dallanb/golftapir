import { cloneDeep as _cloneDeep, set as _set } from 'lodash';
import constants from '@constants';
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

export const totalStrokeCalculator = (holes: any) =>
    Object.values(holes).reduce(
        (total: number, { strokes }: any) => total + strokes,
        0
    );

export const renderAction = (
    key: string,
    options: any
): { show: boolean; enabled: boolean } => {
    const renderAction = { show: false, enabled: true };
    switch (key) {
        case constants.ACTION.COMPLETE.KEY:
            renderAction.show = options.isOwner;
            renderAction.enabled =
                options.isOwner &&
                options.status !== constants.STATUS.COMPLETED.KEY;
            break;
        case constants.ACTION.APPROVE.KEY:
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
};
