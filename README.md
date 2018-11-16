# ![SingleLineTextField](https://user-images.githubusercontent.com/44801418/48109583-9c3e0d80-e27a-11e8-947b-0a44998bc403.png) SingleLineTextField

[![npm package][npm-badge]][npm]

Used for entering a single line of text.

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| text | String |  | Single line of text to be displayed / edited |
| onChange | Function |  | Callback invoked whenever the text changes. : `({id: string, text: string}): void` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/single-line-text-field.svg
[npm]: https://www.npmjs.org/@cmds/single-line-text-field

