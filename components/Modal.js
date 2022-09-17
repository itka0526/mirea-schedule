import React from "react";
import { X as Xicon } from "react-feather";
import useDelayMountUnmount from "./hooks/useDelayMountUnmount";
import ReactDOM from "react-dom";

const Modal = ({ state, close, children }) => {
    const hasTransitionedIn = useDelayMountUnmount(state, 150);

    return (
        <>
            {state || hasTransitionedIn
                ? ReactDOM.createPortal(
                      <div
                          className={`
                    modal-outer-container fixed left-0 top-0 
                    z-50 flex h-screen w-screen 
                    items-center justify-center
                    bg-black-rgba
                ${hasTransitionedIn ? "in" : ""} ${state ? "visible" : ""}`}
                          onClick={close}
                      >
                          <div
                              className={`modal-main-container
                         relative -translate-y-12
                          rounded-md bg-white py-2
                           opacity-90 transition-[transform,opacity]
                            duration-300 ${hasTransitionedIn ? "in" : ""} ${
                                  state ? "visible" : ""
                              }`}
                          >
                              <div
                                  className={`modal-action-container absolute top-0 right-0 z-10 -translate-x-3 translate-y-3 cursor-pointer`}
                                  onClick={close}
                              >
                                  <Xicon height={24} width={24} />
                              </div>
                              <div
                                  onClick={(e) => e.stopPropagation()}
                                  className={`h-full w-full pt-3 max-lg:h-screen max-lg:w-screen max-lg:rounded-none`}
                              >
                                  {children}
                              </div>
                          </div>
                      </div>,
                      document.body
                  )
                : null}
        </>
    );
};

export default Modal;
