# Stores

`wafer-connect` exposes two stores, `account` and `network`, useful for keeping track of the connection status and the current connected chain.

## Store Definition

### account

| Name           | Type                                                            | Description                            |
|----------------|-----------------------------------------------------------------|----------------------------------------|
| address        | \`0x${string}\` \| undefined                                    | Address of the connected account       |
| isConnected    | boolean                                                         | Returns true if account isConnected    |
| isConnecting   | boolean                                                         | Returns true if account isConnecting   |
| isDisconnected | boolean                                                         | Returns true if account isDisconnected |
| isReconnecting | boolean                                                         | Returns true if account isReconnecting |
| status         | "connected" \| "reconnecting" \| "connecting" \| "disconnected" | Returns current status of the account  |

### network

| Name   | Type                                                               | Description              |
|--------|--------------------------------------------------------------------|--------------------------|
| chain  | Chain & {unsupported?: boolean} \| undefined                       | Current connected chain  |
| chains | Chain[];                                                           | List of supported chains |

Chain is simply the `@wagmi/core` Chain type.
| Name           | Type                                                                                            | Description                   |
|----------------|-------------------------------------------------------------------------------------------------|-------------------------------|
| id             | number                                                                                          | ID in number form             |
| name           | string                                                                                          | Human-readable name           |
| network        | string                                                                                          | Internal network name         |
| nativeCurrency | NativeCurrency                                                                                  | Currency used by chain        |
| rpcUrls        | { [key: string]: RpcUrls; default: RpcUrls; public: RpcUrls; } \| undefined                     | Collection of RPC endpoints   |
| blockExplorers | { [key: string]: BlockExplorer; default: BlockExplorer; } \| undefined                          | Collection of block explorers |
| contracts      | { ensRegistry?: Contract; ensUniversalResolver?: Contract; multicall3?: Contract;} \| undefined | Collection of contracts       |
| testnet        | boolean \| undefined                                                                            | Flag for test networks        |

Try connecting to see the stores in action.
