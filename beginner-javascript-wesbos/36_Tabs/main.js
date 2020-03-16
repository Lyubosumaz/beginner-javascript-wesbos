const tabs = document.querySelector('.tabs');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
const tabButtons = tabs.querySelectorAll('[role="tab"]');

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

function handleTabClick(event) {
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    tabButtons.forEach(button => {
        button.setAttribute('aria-selected', false);
    });

    event.currentTarget.setAttribute('aria-selected', true);
    const { id } = event.currentTarget;
    // METHOD 1
    // tabs.querySelector(`[aria-labelledby="${id}"]`).hidden = false;

    // METHOD 2
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
}