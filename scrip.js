class Tabs {
    #rootEl;
    #navElements;
    #contentElements;
    #activeTabIndex;
  
    static NAV_ITEM_CLASS = 'nav-item';
    static NAV_ITEM_ACTIVE_CLASS = 'nav-item-active';
    static CONTENT_ITEM_CLASS = 'content-item';
    static CONTENT_ITEM_ACTIVE_CLASS = 'content-item-active';
    static ACTIVE_TAB_INDEX_DEFAULT = 0;
  
    constructor(rootEl) {
      this.#rootEl = rootEl;
      this.#navElements = Array.from(this.#rootEl.children[0].children);
      this.#contentElements = Array.from(this.#rootEl.children[1].children);
  
      console.log('navElements', this.#navElements)
      console.log('contentElements', this.#contentElements)
  
  
      for (let navItemEl of this.#navElements) {
        navItemEl.classList.add(Tabs.NAV_ITEM_CLASS);
      }
      for (let contentItemEl of this.#contentElements) {
        contentItemEl.classList.add(Tabs.CONTENT_ITEM_CLASS);
      }
  
      this.#rootEl.addEventListener('click', e => this.onRootElClick(e))
  
      this.setActiveTab(Tabs.ACTIVE_TAB_INDEX_DEFAULT);
    }
  
    onRootElClick(e) {
      if (e.target.classList.contains(Tabs.NAV_ITEM_CLASS)) {

        const clickedTabIndex = this.getNavItemIndex(e.target);
  
        this.#navElements[this.#activeTabIndex].classList.remove(Tabs.NAV_ITEM_ACTIVE_CLASS);
        this.#contentElements[this.#activeTabIndex].classList.remove(Tabs.CONTENT_ITEM_ACTIVE_CLASS);
  
        this.setActiveTab(clickedTabIndex);
      }
    }
  
    getNavItemIndex(clickedEl) {

  
      for (let i = 0; i < this.#navElements.length; i++) {
        if (clickedEl === this.#navElements[i]) {
          return i;
        }
      }
    }
  
    setActiveTab(index) {
      this.#navElements[index].classList.add(Tabs.NAV_ITEM_ACTIVE_CLASS);
      this.#contentElements[index].classList.add(Tabs.CONTENT_ITEM_ACTIVE_CLASS);
  
      this.#activeTabIndex = index;
    }
  }