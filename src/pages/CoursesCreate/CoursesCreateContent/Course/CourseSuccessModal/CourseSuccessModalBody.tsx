import React from 'react';
import { DollarTwoTone } from '@ant-design/icons';
import CONSTANTS from '@locale/en-CA';

const CourseSuccessModalBody = () => (
    <>
        <DollarTwoTone
            twoToneColor={'orange'}
            className="wallet-balance-amount-icon"
        />{' '}
        <b>100 </b>
        {CONSTANTS.PAGES.COURSES_CREATE.SUCCESS_MODAL.DESCRIPTION}
    </>
);

export default CourseSuccessModalBody;
