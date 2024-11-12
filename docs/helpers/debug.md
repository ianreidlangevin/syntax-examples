# Log debug message

Logs a message to the console only in __development mode__. Useful for debugging without polluting the console in production.

- Logs messages only when `process.env.NODE_ENV` is set to `development`.
- Accepts additional arguments for detailed debugging.

| Parameter     | Description                               | Type       |
|:--------------|:------------------------------------------|:-----------|
| `message`     | The message to log.                      | `string`   | 
| `...args`     | Additional arguments to include in the log (optional). | `any` |

### Usage

```javascript
import { logDebug } from "./helpers/debug";

// Log a debug message
logDebug("This is a debug message.");

// Log with additional arguments
logDebug("Debugging modal component", { el });

```