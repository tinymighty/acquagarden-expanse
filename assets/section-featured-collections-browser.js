import { HTMLThemeElement } from '@archetype-themes/custom-elements/theme-element'

const tabClass = 'featured-collections-browser__tab';
const activeTabClass = 'featured-collections-browser__tab--active';
const tabPaneClass = 'featured-collections-browser__collection';
const activeTabPaneClass = 'featured-collections-browser__collection--active';

class FeaturedCollectionsBrowser extends HTMLThemeElement {
  tabs = [];
  tabPanes = [];
  connectedCallback() {
    super.connectedCallback()
    console.log('Featured Collections Browser connected');
    window.addEventListener
    this.init();
  }
  constructor() {
    super();
    
  }
  init() {
    this.tabs = this.querySelectorAll(`.${tabClass}`);
    this.tabs.forEach((tab, i) => {
      tab.addEventListener('click', this.handleTabClick.bind(this, i));
    });
    this.tabPanes = this.querySelectorAll(`.${tabPaneClass}`);
    console.log('Tabs', this.tabs);

    this.showTab(0);
  }

  handleTabClick(tabIndex, event) {
    console.log('Tab Clicked', tabIndex);
    this.showTab(tabIndex);
  }

  showTab(tabIndex) {
    this.tabs.forEach(tab => {
      tab.classList.remove(activeTabClass);
    });
    this.tabs[tabIndex].classList.add(activeTabClass);
    this.tabPanes.forEach(tabPane => {
      tabPane.classList.remove(activeTabPaneClass);
    });
    this.tabPanes[tabIndex].classList.add(activeTabPaneClass);
  }
}

customElements.define('featured-collections-browser', FeaturedCollectionsBrowser)
