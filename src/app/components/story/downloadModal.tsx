"use client"
import { X } from "lucide-react"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  isLoading?: boolean
}

export default function DownloadModal({ isOpen, onClose, onConfirm, isLoading = false }: DownloadModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-8 text-center flex flex-col items-center">
          {/* Download Icon Circle */}
          <div className="mb-6 relative">
            <svg width="120" height="120" viewBox="0 0 120 120" className="relative z-10">
              {/* Decorative clouds */}
              <path
                d="M 20 50 Q 15 50 15 55 Q 15 60 20 60 L 30 60 Q 25 65 25 70 Q 25 78 32 78 Q 38 78 40 70 Q 45 72 50 72 Q 58 72 58 65 Q 60 58 55 55 Q 50 50 45 50"
                fill="#D4C5F9"
                opacity="0.8"
              />
              <path
                d="M 80 40 Q 75 40 75 45 Q 75 50 80 50 L 90 50 Q 88 55 88 60 Q 88 66 93 66 Q 99 66 100 60"
                fill="#D4C5F9"
                opacity="0.6"
              />
            </svg>

            {/* Main Download Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            </div>

            {/* Hand illustration below */}
            <div className="mt-16 flex justify-center">
              <svg width="100" height="80" viewBox="0 0 100 80" className="mt-4">
                {/* Hand receiving download */}
                <g>
                  {/* Palm */}
                  <ellipse cx="50" cy="55" rx="25" ry="20" fill="#F4C4A0" />
                  {/* Thumb */}
                  <ellipse cx="30" cy="48" rx="8" ry="12" fill="#F4C4A0" transform="rotate(-25 30 48)" />
                  {/* Fingers */}
                  <rect x="38" y="25" width="6" height="32" fill="#F4C4A0" rx="3" />
                  <rect x="48" y="20" width="6" height="37" fill="#F4C4A0" rx="3" />
                  <rect x="58" y="25" width="6" height="32" fill="#F4C4A0" rx="3" />
                </g>
              </svg>
            </div>
          </div>

          {/* Decorative plants */}
          <div className="absolute bottom-24 left-8 text-green-400 text-3xl opacity-60">🌿</div>
          <div className="absolute bottom-24 right-8 text-blue-300 text-3xl opacity-60">🌱</div>

          {/* Text Content */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to Download?</h2>
          <p className="text-gray-600 text-sm mb-6">
            Your story will be downloaded as a PDF file with all your photos and content.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 w-full">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download PDF
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
