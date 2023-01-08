import React from "react";
import { useEffect } from "react";

type Props = {
  showModal: (isShow: any) => void;
  title: string;
};

function ScheduleModal({ showModal, title = "exemplo" }: Props) {
  const downloadSchedule = () => {
    // using Java Script method to get PDF file
    fetch("teste.rtf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden  outline-none focus:outline-none">
        <div className="relative my-6 mx-auto h-[90%] w-[90%] max-w-3xl">
          {/*content*/}
          <div className="relative   flex h-full w-full flex-col justify-center rounded-lg border-0 bg-gradient-to-r from-purple-main to-blue-alt1 shadow-lg outline-none focus:outline-none">
            <div
              id="content"
              className=" mx-auto flex h-[99%] w-[99%] flex-col rounded-lg border-0 bg-black-70 shadow-lg outline-none focus:outline-none"
            >
              {/*header*/}
              <div
                id="header"
                className="border-slate-200 flex items-start justify-between rounded-t border-b border-solid p-5"
              >
                <h3 className="text-3xl font-semibold">{title}</h3>
                <button
                  className="bg-transparent text-black float-right ml-auto border-0 p-1 text-3xl font-semibold leading-none opacity-5 outline-none focus:outline-none"
                  onClick={showModal}
                >
                  <span className="bg-transparent text-black block h-6 w-6 text-2xl opacity-5 outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div id="body" className="relative flex-auto overflow-y-auto p-6">
                <p className="text-slate-500 my-4 text-lg leading-relaxed">
                  I always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of I
                  always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of I
                  always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of I
                  always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of I
                  always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of I
                  always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of I
                  always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of
                </p>
              </div>
              {/*footer*/}
              <div
                id="footer"
                className="border-slate-200 flex items-center justify-end rounded-b border-t border-solid p-6"
              >
                <button
                  className="text-red-500 background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase outline-none transition-all duration-150 ease-linear focus:outline-none"
                  type="button"
                  onClick={showModal}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 active:bg-emerald-600 mr-1 mb-1 rounded px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                  type="button"
                  onClick={downloadSchedule}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black-100 opacity-90"></div>
    </>
  );
}

export default ScheduleModal;
