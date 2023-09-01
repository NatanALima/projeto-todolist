import PropTypes from 'prop-types';
import {styled} from 'styled-components';
import { upDownAnim, rotate } from './Animation';
import { BsFillPatchExclamationFill as IconExclamation, BsFillPatchCheckFill as IconChecked } from 'react-icons/bs';
import { MdOutlineClose as IconX } from 'react-icons/md';

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(26 27 38 / 50%);
    z-index: 1;
`

const ModalContent = styled.div`
    position:absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2C3273;
    padding: 20px;
    border-radius: 5px;
    transition: .3s ease-in-out;
    animation: ${upDownAnim} .6s ease forwards;
    z-index: 1;

    max-height: calc(100vh - 210px);
    overflow-y: auto;

    .modalIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6em;
        transition: .3s ease;
        animation: ${rotate} .6s ease;
    }

    .modalText {
        font-family: var(--fontSec);
        font-size: 1.3em;
        font-weight: 400;
        line-height: 1.35em;
        margin: 20px 0;
        transition: .3s ease;

    }

    .modalAction {
        float: right;
    }
`

const ButtonModal = styled.button`
    border: none;
    padding: 8px 15px;
    margin: 0 5px;
    font-family: var(--fontSec);
    font-size: 1em;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    background-color: #3b439b;
    color: white;
    transition: .3s ease;

    &:hover {
        background-color: #181C40;
    }
`

export default function Modal({type, info, handleModal}) {
    const infoModal = [{modalType: "success",
                        icon: <IconChecked/>,
                        modalBtn: [{value: "OK",
                                    handleClick: handleModal}]},
                        {modalType: "alert",
                         icon: <IconExclamation/>,
                         modalBtn: [{value: "CANCEL",
                                     handleClick: handleModal},
                                    {value: "OK",
                                     handleClick: handleModal}]
                        },
                        {modalType: "error",
                         icon: <IconX/>,
                         modalBtn: [{value: "OK",
                                     handleClick: handleModal}]}
                      ];
    
    const getInfoModal = (modalTypeSelect) => {
        return infoModal.filter(info => info.modalType === modalTypeSelect)[0];
    }

    const selectedModal = getInfoModal(type);


    return(
        <ModalContainer>
            <ModalContent>
                <div className="modalIcon">
                    {selectedModal.icon}
                </div>
                <div className="modalText">
                    <p>{info}</p>
                </div>
                <div className="modalAction">
                    {selectedModal.modalBtn.map((btn, index) => (
                        <ButtonModal key={index} onClick={btn.handleClick}>{btn.value}</ButtonModal>
                    ))}
                </div>
            </ModalContent>
        </ModalContainer>
    )
}

Modal.propTypes = {
    type: PropTypes.string,
    info: PropTypes.string,
    handleModal: PropTypes.func
}