type Props = {
  showModal: (isShow: any) => void;
};

function ModalBenefit3({ showModal }: Props) {
  return (
    <>
      <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden whitespace-normal  outline-none focus:outline-none">
        <div className="relative my-6 mx-auto h-[90%] w-[90%] max-w-3xl">
          {/*content*/}
          <div className="relative  flex h-full w-full flex-col rounded-lg border-0 bg-light shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="border-slate-200 flex items-start justify-between rounded-t border-b border-solid p-5">
              <h3 className="text-3xl font-semibold">Modal 3 Test</h3>
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
            <div className="relative flex-auto overflow-y-auto p-6">
              <p className="text-slate-500 my-4 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of I always
                felt like I could do anything. That’s the main thing people are
                controlled by! Thoughts- their perception of I always felt like
                I could do anything. That’s the main thing people are controlled
                by! Thoughts- their perception of I always felt like I could do
                anything. That’s the main thing people are controlled by!
                Thoughts- their perception of I always felt like I could do
                anything. That’s the main thing people are controlled by!
                Thoughts- their perception of I always felt like I could do
                anything. That’s the main thing people are controlled by!
                Thoughts- their perception of I always felt like I could do
                anything. That’s the main thing people are controlled by!
                Thoughts- their perception of
              </p>
            </div>
            {/*footer*/}
            <div className="border-slate-200 flex items-center justify-end rounded-b border-t border-solid p-6">
              <button
                className="text-red-500 background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={showModal}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 mr-1 mb-1 rounded px-6 py-3 text-sm font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                type="button"
                onClick={showModal}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-dark opacity-75"></div>
    </>
  );
}

export default ModalBenefit3;
