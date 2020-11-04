import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import { ModalActions } from '@actions';
import { ContestMatchupCarouselHoleEditProps } from './types';
import { contestMatchupCarouselHoleEditFormBodyRenderer } from './contestMatchupCarouselHoleEditFormBodyRenderer';
import { contestMatchupCarouselHoleEditFormHeaderRenderer } from './contestMatchupCarouselHoleEditFormHeaderRenderer';
import ContestMatchupCarouselContext from '../../ContestMatchupCarouselContext';
import './ContestMatchupCarouselHoleEdit.scss';

const ContestMatchupCarouselHoleEdit: React.FunctionComponent<ContestMatchupCarouselHoleEditProps> = ({
    hole,
}) => {
    const dispatch = useDispatch();
    const context = useContext(ContestMatchupCarouselContext);
    const onClick = () => {
        dispatch(
            ModalActions.openModal(
                contestMatchupCarouselHoleEditFormHeaderRenderer,
                () =>
                    contestMatchupCarouselHoleEditFormBodyRenderer({
                        ...hole,
                        uuid: context.sheetUUID,
                    }),
                () => null,
                () => dispatch(ModalActions.closeModal())
            )
        );
    };
    return <EditOutlined onClick={onClick} />;
};

export default ContestMatchupCarouselHoleEdit;
