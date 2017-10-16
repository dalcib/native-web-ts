window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 0)
  }

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }
  }
