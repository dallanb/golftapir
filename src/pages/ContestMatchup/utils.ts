import { cloneDeep as _cloneDeep, set as _set } from 'lodash';
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
