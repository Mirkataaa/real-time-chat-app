export default function ChatBubblesComponent ({title , subtitle}) {
    return (
      <div className="flex items-center justify-center bg-base-200 p-6 sm:p-12">
      <div className="max-w-md text-center">
        {/* Phone mockup */}
        <div className="bg-base-100 rounded-3xl shadow-xl p-4 mb-8 w-56 sm:w-64 mx-auto">
          {/* Top bar */}
          <div className="flex justify-between items-center text-xs text-base-content/60 mb-3">
            <span>09:41</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-base-content rounded-full" />
              <div className="w-2 h-2 bg-base-content rounded-full" />
              <div className="w-2 h-2 bg-base-content rounded-full" />
            </div>
          </div>

          {/* Chat messages */}
          <div className="space-y-3 text-left">
            {/* Person 1 */}
            <div className="flex items-start gap-2">
              <div className="bg-primary text-white text-sm px-3 py-2 rounded-2xl rounded-tl-sm max-w-[70%] animate-pulse">
                Hey! Are you ready to sign up?
              </div>
            </div>

            {/* Person 2 */}
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-base-300 text-sm px-3 py-2 rounded-2xl rounded-tr-sm max-w-[70%]">
                Yep! Just about to finish.
              </div>
            </div>

            {/* Person 1 */}
            <div className="flex items-start gap-2">
              <div className="bg-primary text-white text-sm px-3 py-2 rounded-2xl rounded-tl-sm max-w-[70%]">
                Nice 🚀 see you inside!
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>
        <p className="text-sm sm:text-base text-base-content/60">{subtitle}</p>
      </div>
    </div>
    );
}