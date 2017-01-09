# Adfinis SyGroup YUIDoc Theme

A YUIDoc theme, which considers our company standards and uses
our company CSS framework ([AdCSSy](https://adfinis-sygroup.github.io/adcssy)).

## Limitations

* No elements
* No attributes
* Can't remember access options after page refresh
* Descriptions from external sources are not rendered properly (bug in YUIDoc)

## Installation
Install yuidoc-adsy-theme from npm:
```bash
npm install yuidoc-adsy-theme
```
Adjust your options in `yuidoc.json` to:

```json
{
  "options": {
    "themedir": "node_modules/yuidoc-adsy-theme",
    "helpers": [
      "node_modules/yuidoc-adsy-theme/helpers/helpers.js"
    ]
  }
}
```

## Testing
You can build the example documentation with `npm test` or watch it with `npm start`.

## License
MIT see [LICENSE](LICENSE).
