import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { ArticlePanel } from './components/ArticlePanel';

export const plugin = new PanelPlugin<SimpleOptions>(ArticlePanel).setPanelOptions((builder) => {
  return builder
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
