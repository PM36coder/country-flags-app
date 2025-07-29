const Loader = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-amber-400 animate-ping" />
          <div className="absolute inset-0 rounded-full border-4 border-amber-400" />
        </div>
      </div>
    );
  };
  
  export default Loader;
  