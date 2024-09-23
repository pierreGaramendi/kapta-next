export default function Page() {
    return (   <div className="dark:bg-gray-900 dark:text-gray-100 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Encontrar al leon</h1>
          <div className="flex space-x-2">
            <button className="dark:text-gray-400">Attach</button>
            <button className="dark:text-gray-400">Add Incident</button>
            <button className="dark:text-gray-400">Link Incident</button>
          </div>
        </div>
  
        {/* Description Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="dark:text-gray-300">Edit description</p>
        </div>
  
        {/* Activity Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Activity</h2>
          <div className="flex space-x-4 text-sm">
            <button className="dark:text-gray-400">All</button>
            <button className="dark:text-gray-400">Comments</button>
            <button className="dark:text-gray-400">History</button>
          </div>
  
          {/* Comment Input */}
          <div className="mt-4 flex items-center border border-gray-600 p-2 rounded-md">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
             PA
            </div>
            <input
              type="text"
              placeholder="Add a comment..."
              className="bg-transparent text-gray-300 ml-2 flex-grow outline-none"
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">Expert tip: Press M to comment</p>
        </div>
  
        {/* Sidebar Section */}
        <div className="border-t border-gray-700 pt-4 mt-6">
          <h2 className="text-lg font-semibold">Details</h2>
          <div className="mt-2">
            <div className="flex justify-between mb-2">
              <span>Assigned to:</span>
              <span className="flex items-center space-x-2">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  ATB
                </div>
                <span>Pierre garamendi</span>
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Sprint:</span>
              <span>1</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Created:</span>
              <span>1</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Updated:</span>
              <span>2</span>
            </div>
          </div>
        </div>
      </div> );
}