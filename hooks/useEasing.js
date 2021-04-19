function useEasing() {
  const easeOutCubic = (val) => 1 - Math.pow(1 - val, 3);
  return { easeOutCubic };
}

export default useEasing;
