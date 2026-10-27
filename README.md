# simple-udp

> **Note:** This repository is for learning purposes only. It is not intended for production use.

A minimal example of sending and receiving UDP messages with Node.js's built-in `dgram` module.

## Files

- `simple-receiver.js` – binds a UDP socket to `127.0.0.1:8000` and logs every message it receives.
- `simple-sender.js` – sends a single string message to `127.0.0.1:8000`.

## Usage

Start the receiver first, then run the sender in another terminal:

```bash
node simple-receiver.js
node simple-sender.js
```
