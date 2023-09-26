import React from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

function VideoModal({ openVideoModal, setOpenVideoModal, video }) {

  return (
    <ModalVideo
        channel="custom"
        url= {video}
        isOpen={openVideoModal}
        onClose={() => setOpenVideoModal(false)} 
    />
  );
};


export default VideoModal;