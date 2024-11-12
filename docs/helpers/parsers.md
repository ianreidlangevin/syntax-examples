# Parsers helper functions

A set of reusable utility functions for parsing data attribute values into usable formats such as booleans or numbers. These parsers provide fallback values when attributes are missing or invalid.

## parseBoolean

Parses a value (typically from a data attribute) into a boolean. Supports "true", "false", "1", "0", and numeric values 1 and 0. Returns the fallback value for invalid or missing inputs.

| Parameter         | Description                                                                | Type            | Default  |
|:------------------|:---------------------------------------------------------------------------|:----------------|:---------|
| `value`           | The value to parse.                                  | `string` or `number` | `null` | N/A      |
| `fallback`        | The fallback value if the value is missing or invalid.                | `boolean`       | `true`   |

#### Usage

```javascript
import { parseBoolean } from "./helpers/parsers";

const closeOutside = parseBoolean(
  el.getAttribute("data-fx-modal-close-outside"),
  true
);

```

--- 

## parseNumber

Parses a value into a number. If the value is missing, invalid, or cannot be converted into a number, the fallback value is returned.

| Parameter         | Description                                                                | Type            | Default  |
|:------------------|:---------------------------------------------------------------------------|:----------------|:---------|
| `value`           | The value to parse.                                  | `string` | `null` | N/A      |
| `fallback`        | The fallback value if the attribute is missing or invalid.                | `number`        | `0`      |

#### Usage

```javascript
import { parseNumber } from "./helpers/parsers";

this.toggleDuration = parseNumber(
  el.getAttribute("data-fx-clipboard-duration"),
  2000
);
```