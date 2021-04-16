import {toLower as _toLower, startCase as _startCase, get as _get} from 'lodash';
import { Button } from 'antd';
import React from 'react';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons/lib';
import { ordinalSuffix } from '@utils';
import CONSTANTS from '@locale/en-CA';

export const courseHoleLabelMaker = ({ name, value }: any) => {
    const place = parseInt(name[1]) + 1;
    return `${ordinalSuffix(place)} ${
        CONSTANTS.PAGES.COURSES_CREATE.FORM.LABELS.HOLE
    } ${_startCase(_toLower(name[2]))}`;
};

export const courseHolesButtonsRenderer = ({
    value,
    formik,
    arrayHelpers,
}: any) => {
    return (
        <div className="course-form-hole-dynamic-input-buttons">
            <Button
                disabled={value.length === 1}
                onClick={() => arrayHelpers.remove(value.length - 1)}
                type="text"
                icon={<MinusCircleTwoTone />}
                style={{ height: '24px', width: '24px' }}
            />
            <Button
                onClick={() =>
                    arrayHelpers.insert(value.length, {
                        number: value.length + 1,
                        par: 0,
                        distance: 0,
                    })
                }
                type="text"
                icon={<PlusCircleTwoTone />}
                style={{ height: '24px', width: '24px' }}
            />
        </div>
    );
};

export function validateHolesLength(this: any) {
    const context = _get(this, ['options', 'context']);
    const index = _get(this, ['options', 'index'], 0);
    const holes = _get(context, ['holes'], [])
    if(holes.length === index +1){

        return holes.length === 18;
    }
    return true
}
