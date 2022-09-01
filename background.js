chrome.action.onClicked.addListener(function(tab) {
  let url = tab.url;
  console.log("URL: ", url);
  let newUrl = `https://readible.fly.dev?url=${encodeURIComponent(url)}`;
  console.log("New URL: ", newUrl);
  chrome.tabs.update(tab.id, {url: newUrl});
});