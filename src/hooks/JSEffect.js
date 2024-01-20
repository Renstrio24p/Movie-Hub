export function JSEffect(callback, dependencies) {
    let prevDependencies = [];
  
    function dependenciesChanged() {
      if (prevDependencies.length !== dependencies.length) {
        return true;
      }
  
      return !prevDependencies.every((dep, index) => dep === dependencies[index]);
    }
  
    function runEffect() {
      if (!dependencies || dependenciesChanged()) {
        callback();
        prevDependencies = dependencies || [];
      }
    }
  
    // Initial run
    runEffect();
  }