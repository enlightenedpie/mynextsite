const useScript = url => {
  const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  
  return () => {
    document.body.removeChild(script);
  }
};

export default useScript;