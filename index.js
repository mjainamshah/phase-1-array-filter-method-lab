// Code your solution here
function findMatching(drivers , name) {
    const lowercaseName = name.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
      const lowercaseDriverName = driver.toLowerCase();
      return lowercaseDriverName.includes(lowercaseName);
    });
  
    return matchingDrivers;
  }


  function fuzzyMatch (drivers , searchText) {
      return drivers.filter (driver => driver.startsWith(searchText));
  }
  
  function matchName (drivers, name) {
    return drivers.filter (drivers => drivers.name === name);
  }