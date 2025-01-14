chrome.tabs.onUpdated.addListener(({ tabID, changeInfo, tab }) => {
    ['Chainguard Authentication', 'Sigstore Authentication'].forEach((title) => {
        chrome.tabs.query({
            title: title,
            url: "http://localhost:*/*"
        }).then((tabs) => {
            tabs.forEach((tab) => {
                console.log(`closing tab ${tab.id} with title ${tab.title} and url ${tab.url}`);
                chrome.tabs.remove(tab.id);
            });
        });
    });
});
