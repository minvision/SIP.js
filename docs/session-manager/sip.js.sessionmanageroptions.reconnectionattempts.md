<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SessionManagerOptions](./sip.js.sessionmanageroptions.md) &gt; [reconnectionAttempts](./sip.js.sessionmanageroptions.reconnectionattempts.md)

## SessionManagerOptions.reconnectionAttempts property

Maximum number of times to attempt to reconnection.

<b>Signature:</b>

```typescript
reconnectionAttempts?: number;
```

## Remarks

When the transport connection is lost (WebSocket disconnects), reconnection will be attempted immediately. If that fails, reconnection will be attempted again when the browser indicates the application has come online. See: https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine
