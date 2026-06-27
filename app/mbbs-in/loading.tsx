export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor:"#0A2E65"}}>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white font-medium">Loading...</p>
      </div>
    </div>
  )
}