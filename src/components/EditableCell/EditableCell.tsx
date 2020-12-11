import React, { ChangeEvent } from 'react';
import { EditableCellProps } from './types';
import './EditableCell.less';

const EditableCell: React.FunctionComponent<EditableCellProps> = ({
    initialValue,
    // row,
    // column,
    onBlur,
}) => {
    const [value, setValue] = React.useState(initialValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    React.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return (
        <input value={value} onChange={onChange} onBlur={() => onBlur(value)} />
    );
};

export default EditableCell;
