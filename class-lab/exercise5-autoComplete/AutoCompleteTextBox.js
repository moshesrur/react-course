class AutoCompleteTextBox {
  constructor(el) {
    this.data = ["1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888",
      "9999", "129", "a38", "aaa", "12345", "321", "b38"];
    el.innerHTML = `
      <div>
          <datalist id="suggestions"></datalist>
          <input autoComplete="of" list="suggestions" type="search" placeholder="Search Google or type a URL"/> 
      </div>`
    this.suggestions = el.querySelector('datalist');
    this.input = el.querySelector('input');
    this.input.addEventListener('input', this.autoComplete);
  }

  autoComplete = () => {
    const stringToSearch = this.input.value;
    let searchResult = this.search(stringToSearch);
    console.log("searchResult " + searchResult);
    this.addOptions(searchResult);
  }

  addOptions = (searchResult) => {
    this.suggestions.innerHTML = "";
    for (let item of searchResult) {
      const option = document.createElement('option');
      option.value = item;
      option.addEventListener('click', this.hideSuggestions);
      this.suggestions.appendChild(option);
    }
  }

  search = (stringToSearch) => {
    let pos = 0;
    let searchResult = [];
    for (let item of this.data) {
      if (item.toLowerCase().match(stringToSearch)) {
        searchResult[pos] = item;
        pos++
      }
    }
    return searchResult;
  }

  hideSuggestions = () => {
    console.log("hideSuggestions");
    this.suggestions.style.display = 'none';
  }

}

const e1 = document.createElement('div');
document.body.appendChild(e1);
new AutoCompleteTextBox(e1);

