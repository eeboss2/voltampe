"use client";
import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import ReactPlayer from 'react-player';

export default function ModalVideo({ isOpen, onClose, videoId, channel = 'youtube', autoplay = true }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 首选 #__next（Next.js 的根元素）
      const root = document.getElementById('__next') || document.body;
      ReactModal.setAppElement(root);
    }
  }, []);
  const url = channel === 'youtube' ? `https://www.youtube.com/watch?v=${videoId}` : videoId;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-video"
      overlayClassName="modal-video-overlay"
      contentLabel="Video modal"
      ariaHideApp={typeof window !== 'undefined'}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      preventScroll={true}
    >
  <button className="modal-video-close" onClick={onClose} aria-label="Close video">Close</button>
      <div className="modal-video-wrapper">
        <ReactPlayer url={url} playing={isOpen && autoplay} controls width="100%" height="100%" />
      </div>
    </ReactModal>
  );
}
