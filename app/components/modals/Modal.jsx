"use client";

import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import Button from "../Button";

function Modal({
  isOpen,
  disabled,
  onClose,
  secondaryAction,
  secondaryActionLabel,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  btnType,
  myForm,
}) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!showModal) return null;

  return (
    <>
      <div
        onClick={handleClose}
        className="
        justify-center 
        items-center 
        flex 
        overflow-x-hidden 
        overflow-y-auto 
        fixed 
        inset-0 
        z-50 
        outline-none 
        focus:outline-none
        bg-neutral-800/70
      "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="
        relative 
        w-[95%]
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        sm:text-[12px]
        mx-auto 
        h-auto 
        lg:h-auto
        md:h-auto
        "
        >
          <div
            className={`
          translate
          duration-300
          h-full
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
        `}
          >
            <div
              className="
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-white 
            outline-none 
            focus:outline-none
          "
            >
              {/*header*/}
              <div
                className="
              flex 
              items-center 
              p-6
              xl:p-3
              rounded-t
              justify-center
              relative
              border-b-[1px]
              "
              >
                <button
                  className="
                  p-1
                  border-0 
                  hover:opacity-70
                  transition
                  absolute
                  left-9
                "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}
              <div className="relative p-6 xl:p-4 flex-auto">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-x-2 p-4">
                <div
                  className="
                  flex 
                  flex-row 
                  items-center 
                  gap-4 
                  w-full
                "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  {btnType === "submit" ? (
                    <input
                      className={`
                    relative
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    rounded-lg
                    hover:opacity-80
                    transition
                    w-full
                    bg-gradient-to-r from-indigo-500 to-blue-300
                    border-indigo-100
                    text-white
                    py-3
                    cursor-pointer
                  `}
                      type="submit"
                      form={myForm}
                      value={actionLabel}
                    />
                  ) : (
                    <Button
                      disabled={disabled}
                      label={actionLabel}
                      onClick={handleSubmit}
                    />
                  )}
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

// Modal.defaultProps = {
//   isOpen: false,
//   disabled: false,
//   onClose: null,
//   secondaryAction: null,
//   secondaryActionLabel: "Cancel",
//   onSubmit: null,
//   title: "",
//   body: null,
//   footer: null,
//   actionLabel: "",
// };

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  secondaryAction: PropTypes.func,
  secondaryActionLabel: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.element,
  footer: PropTypes.element,
  actionLabel: PropTypes.string,
};
