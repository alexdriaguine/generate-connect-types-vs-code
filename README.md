# generate-connect-typs-code README

This is a vs code extension that generates interface for your connected props. It uses `generate-connect-types` under the hood
which can be found [here](https://github.com/alexdriaguine/generate-connect-types)

## Features

Given a input like

```typescript
import {connect} from 'react-redux'
import {State} from './somewhere-appstate'

const t = connect(
  (state: State) => ({
    index: state.index,
    name: state.name,
    ble: state.bla,
  }),
  () => ({
    dispatch: () => console.log('hej'),
  }),
)(Comp)
it outputs

interface ConnectProps {
  index: number
  name: string
  ble: Bla
  dispatch: () => void
}
```

## Release Notes

### 0.0.1

Initial release

## Todo
- [ ] some images in description part
