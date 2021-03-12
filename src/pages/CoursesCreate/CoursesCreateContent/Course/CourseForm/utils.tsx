import { toLower as _toLower, startCase as _startCase } from 'lodash';
import { Button } from 'antd';
import React from 'react';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons/lib';
import { ordinalSuffix } from '@utils';
import CONSTANTS from '@locale/en-CA';

export const courseHoleLabelMaker = ({ name, value }: any) => {
    const place = parseInt(name[1]) + 1;
    return _startCase(
        _toLower(
            `${ordinalSuffix(place)} ${
                CONSTANTS.PAGES.COURSES_CREATE.FORM.LABELS.HOLE
            } ${name[2]}`
        )
    );
};

export const courseHolesButtonsRenderer = ({
    value,
    formik,
    arrayHelpers,
}: any) => {
    console.log(formik);
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
                        hole: value.length + 1,
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
