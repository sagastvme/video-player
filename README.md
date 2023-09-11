# Random Video Server

## Overview

The Random Video Server is a simple Node.js server built with Bun. It serves a random video from a local directory when accessed at the `/randomvideo` endpoint. The server also logs the time it was last restarted.

## Features

- **Random Video**: Serves a random video from the `./videos` directory.
- **Logging**: Logs the server restart time in a readable format.

## Configuration

The server runs on port 8080 by default. You can change this by modifying the `port` value in the `serve` function.
