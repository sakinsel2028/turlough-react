import ScrubbableVideo from './components/ScrubbableVideo'

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <ScrubbableVideo />
      
      {/* Any page overlay or foreground content goes here */}
    </div>
  )
}