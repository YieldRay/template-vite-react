export default function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white h-screen max-h-screen overflow-hidden selection:bg-[#79ffe1] selection:text-black">
      <div className="fixed inset-0 grid place-content-center p-8 text-lg">
        <p className="text-center">Hello, world!</p>
      </div>
      <p className="fixed bottom-0 left-0 w-full p-8 text-xs text-center text-gray-500 dark:text-gray-400">
        <span>
          <code>{JSON.stringify(import.meta.env)}</code>
        </span>
      </p>
    </div>
  );
}
