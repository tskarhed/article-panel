import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/NewsPanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addNumberInput({
      path: 'maxContentHeight',
      name: 'Max content height',
      defaultValue: 200,
    })
    .addFieldNamePicker({
      path: 'dateField',
      name: 'Date field',
      defaultValue: 'time',
    })
    .addFieldNamePicker({
      path: 'titleField',
      name: 'Title field',
      defaultValue: 'title',
    })
    .addFieldNamePicker({
      path: 'hrefField',
      name: 'Link field',
    })
    .addFieldNamePicker({
      path: 'imageUrlField',
      name: 'Image URL field',
    })
    .addFieldNamePicker({
      path: 'descriptionField',
      name: 'Description field',
    });
});
