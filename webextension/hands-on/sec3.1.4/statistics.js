export const getVisitCount = (url) => {
  return new Promise((resolve) => {
    chrome.history.getVisits({ url }, (visits) => {
      resolve(visits.length);
    });
  });
};

export const getTabCount = (url) => {
  return new Promise((resolve) => {
    chrome.tabs.query({ url }, (tabs) => {
      resolve(tabs.length);
      sendResponse({ count: tabs.length });
    });
  });
};
