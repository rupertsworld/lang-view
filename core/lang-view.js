function stringifyComponents(components) {
  return components.reduce((str, component) => {
    const propNames = Object.keys(component.spec.properties);
    const propString = propNames.reduce((str, propName) => {
      return str + '\t' + propName + ': ' + component.spec.properties[propName] + '\n';
    }, '');

    const componentString = (
      str +
      'name: ' + component.spec.name + '\n' +
      'description: ' + component.spec.description + '\n' +
      'properties:\n' + propString + '\n'
    )
    
    return componentString.trim() + '\n\n';
  }, '').trim();
}

function validComponents(components) {
  return true; // placeholder obviously
}

export function createPrompt(components) {
  if (!validComponents(components)) throw new TypeError('Invalid components!')

  const prompt = `You are a helpful AI assistant that is connected to a web view allowing you to create a GUI to display your output. The GUI is declared in YAML of the form:

- type: LayoutComponentType
  children:
    - type: ComponentType
      value: value
    - type: AnotherComponentType
      value: another value
      checked: custom property

Here's a schema of the available components, with their type, a description of what they are used for, and properties they take:
  
${stringifyComponents(components)}
  
In your response, only include valid YAML with the components above.
  
---
  
`;

  return (query) => prompt + query;
}