# @g01-tecnologia/react-native-pos-print-preview

Virtual view that simulates a POS printer.
_This is a work in progress currently in beta state._

## Installation

```sh
npm install @g01-tecnologia/react-native-pos-print-preview
# or
yarn add @g01-tecnologia/react-native-pos-print-preview
```

## Usage

```typescript
import VirtualPOS from '@g01-tecnologia/react-native-pos-print-preview';

//...

const [commands, setCommands] = useState([{ cmd: null, prn: 'Hello POS!' }]);

return <VirtualPOS data={commands} />;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
