const NOTIFICATION_ICON_URL = chrome.extension.getURL("notification_icon.png");

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query(
    {
      currentWindow: true,
      active: true,
    },
    (tabs) => {
      const tab = tabs[0];
      chrome.bookmarks.create(
        {
          title: tab.title,
          url: tab.url,
        },
        () => {
          chrome.notifications.create({
            type: "basic",
            iconUrl: NOTIFICATION_ICON_URL,
            title: "Bookmark created",
            message: "bookmark crated non " + tab.url,
          });
        }
      );
    }
  );
});
