function LoadingIcon() {
  return (
    <div className="w-7 h-7 flex justify-center items-center relative">
      <div className="w-full h-full border-4 border-gray-300 rounded-full relative" />
      <div className="animate-spin absolute inset-0 rounded-full border-4 border-solid border-t-transparent border-corPrincipal ">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingIcon;
