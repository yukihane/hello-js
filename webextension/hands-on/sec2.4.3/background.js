chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  switch (data.command) {
    case "visit-count":
      chrome.history.getVisits({ url: sender.url }, (visits) => {
        sendResponse({ count: visits.length });
      });
      return true;

    case "tabs-count":
      chrome.tabs.query({ url: sender.url }, (tabs) => {
        sendResponse({ count: tabs.length });
      });
      return true;
  }
});
