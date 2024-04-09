import React from 'react';

const ActionBtn = ({ bgcolor, txtcolor }) => {
  return (
    <button className={`rounded-3xl px-4 py-2 text-base ${bgcolor} ${txtcolor}`}>
      Get unlimited access
    </button>
  );
};

export default ActionBtn;
